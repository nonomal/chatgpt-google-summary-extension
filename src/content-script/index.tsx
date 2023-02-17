import { render } from 'preact'
import '../base.css'
import { getUserConfig, Language, Theme } from '../config'
import { detectSystemColorScheme } from '../utils'
import ChatGPTContainer from './ChatGPTContainer'
import ChatGPTCard from './ChatGPTCard'
import { config, SearchEngine } from './search-engine-configs'
import {
  getPossibleElementByQuerySelector,
  getSearchParam,
  getLangOptionsWithLink,
  getTranscriptHTML,
  getRawTranscript,
  waitForElm,
  getQueryText,
  waitMs,
} from './utils'
import xss from 'xss'
import './styles.scss'
import { setParams, queryParam } from 'gb-url'

const siteRegex = new RegExp(Object.keys(config).join('|'))
const siteName = location.hostname.match(siteRegex)![0]
const siteConfig = config[siteName]

async function mount(question: string, siteConfig: SearchEngine, subtitle?: any) {
  if (document.querySelector('div.glarity--container')) {
    document.querySelector('div.glarity--container')?.remove()
  }

  const container = document.createElement('div')
  container.className = 'glarity--container'

  const userConfig = await getUserConfig()
  let theme: Theme
  if (userConfig.theme === Theme.Auto) {
    theme = detectSystemColorScheme()
  } else {
    theme = userConfig.theme
  }
  if (theme === Theme.Dark) {
    container.classList.add('gpt--dark')
  } else {
    container.classList.add('gpt--light')
  }

  if (siteName === 'youtube') {
    container.classList.add('glarity--chatgpt--youtube')
    waitForElm('#secondary.style-scope.ytd-watch-flexy').then(() => {
      document.querySelector('#secondary.style-scope.ytd-watch-flexy')?.prepend(container)
    })
  } else {
    const siderbarContainer = getPossibleElementByQuerySelector(siteConfig.sidebarContainerQuery)
    if (siderbarContainer) {
      siderbarContainer.prepend(container)
    } else {
      container.classList.add('sidebar--free')
      const appendContainer = getPossibleElementByQuerySelector(siteConfig.appendContainerQuery)
      if (appendContainer) {
        appendContainer.appendChild(container)
      }
    }
  }

  render(
    <ChatGPTContainer
      question={question}
      subtitle={subtitle}
      siteConfig={siteConfig}
      triggerMode={userConfig.triggerMode || 'always'}
    />,
    container,
  )
}

// YouTube List
async function mountYouTubeList(
  question: string,
  siteConfig: SearchEngine,
  items: any,
  index: number,
) {
  const container = document.createElement('div')
  container.className = 'glarity--clickbait--score'
  // container.append('loading...')

  const userConfig = await getUserConfig()
  const item = items[index]

  if (item.querySelector('div.glarity--clickbait--score')) {
    item.querySelector('div.glarity--clickbait--score')?.remove()
  }

  console.log('item', item, item.querySelector('#metadata.ytd-video-meta-block'))

  if (!item) {
    return
  }

  item.querySelector('#metadata.ytd-video-meta-block').append(container)

  render(
    <ChatGPTCard
      question={question}
      style="simple"
      triggerMode={userConfig.triggerMode || 'always'}
    />,
    container,
  )
}

async function run() {
  const language = window.navigator.language
  const userConfig = await getUserConfig()
  console.debug('Mount ChatGPT on', siteName)

  // Youtube
  if (siteName === 'youtube') {
    const videoId = getSearchParam(window.location.href)?.v
    let vId = ''

    if (!videoId) {
      await waitForElm('div#contents.ytd-rich-grid-renderer')

      const contents = document.querySelector('div#contents.ytd-rich-grid-renderer')

      if (!contents) {
        return
      }

      const items = contents.querySelectorAll('div#content.ytd-rich-item-renderer') || []

      const itemList = Array.from(items).map((item) => {
        const linkElement = item.querySelector('a#video-title-link.ytd-rich-grid-media')
        const url = linkElement?.getAttribute('href') || ''
        const title = linkElement?.textContent
        const id = queryParam('v', url)

        return { id, title, url }
      })

      for (let index = 0; index < 6; index++) {
        const item = itemList[index]
        const { id, title, url } = item

        const queryText = await getQueryText({ id, title, url, userConfig, language })
        console.log('queryText', queryText)
        await mountYouTubeList(queryText, siteConfig, items, index)

        await waitMs(20 * 1000)
      }

      //       const element = document.querySelectorAll('ytd-thumbnail.ytd-rich-grid-media')[0]
      //       const url = element.querySelector('a.ytd-thumbnail')?.href
      //       vId = queryParam('v', url)

      //       element.addEventListener('mouseenter', async () => {
      //         console.log('鼠标进入了元素')

      //         // Get Transcript Language Options & Create Language Select Btns
      //         const langOptionsWithLink = await getLangOptionsWithLink(vId)

      //         const rawTranscript = !langOptionsWithLink
      //           ? []
      //           : await getRawTranscript(langOptionsWithLink[0].link)
      //         console.log('rawTranscript', rawTranscript)

      //         const subtitleList = !langOptionsWithLink
      //           ? []
      //           : await getTranscriptHTML(rawTranscript, videoId)
      //         console.log('subtitleList', subtitleList)

      //         const subtitle =
      //           subtitleList.map((v) => {
      //             return `(${v.time}):${v.text}`
      //           }) || []

      //         let suttitleText = subtitle.join('. \r\n ')

      //         suttitleText = suttitleText.length > 3800 ? suttitleText.substring(0, 3800) : suttitleText

      //         const vTitle = element.parentElement.querySelector(
      //           'yt-formatted-string.ytd-rich-grid-media',
      //         ).textContent

      //         const queryText = `Title: ${vTitle}
      // URL: ${url}

      // Transcript:

      // ${suttitleText}

      // Instructions: The above is the transcript and title of a youtube video I would like to analyze for exaggeration. Based on the content, please give a Clickbait score of the title.
      // reply format:
      // **Clickbait score**: 10/10

      // Reply in ${userConfig.language === Language.Auto ? language : userConfig.language} Language.`

      //         console.log('queryText', queryText)

      //         document
      //           .querySelector('div#video-preview')
      //           .querySelector('div#metadata-line')
      //           .insertAdjacentHTML(
      //             'beforeend',
      //             `<div class="glarity--clickbait--score"><strong>Clickbait score</strong>: 6/10</div>`,
      //           )
      //       })

      //       element.addEventListener('mouseleave', () => {
      //         console.log('鼠标离开了元素')
      //       })

      return
    }

    // Get Transcript Language Options & Create Language Select Btns
    const langOptionsWithLink = await getLangOptionsWithLink(videoId)

    const rawTranscript = !langOptionsWithLink
      ? []
      : await getRawTranscript(langOptionsWithLink[0].link)
    console.log('rawTranscript', rawTranscript)

    const subtitleList = !langOptionsWithLink ? [] : await getTranscriptHTML(rawTranscript, videoId)
    console.log('subtitleList', subtitleList)

    const subtitle =
      subtitleList.map((v) => {
        return `(${v.time}):${v.text}`
      }) || []

    let suttitleText = subtitle.join('. \r\n ')

    suttitleText = suttitleText.length > 3800 ? suttitleText.substring(0, 3800) : suttitleText

    const videoTitle = document.title
    const videoUrl = window.location.href

    //     const queryText = `Video transcript:

    // ${suttitleText}

    // Instructions: Use the transcript information above to summarise the highlights of this video.

    // Reply in ${userConfig.language === Language.Auto ? language : userConfig.language} Language.`
    const queryText = `Title: ${videoTitle}
URL: ${videoUrl}

Transcript:

${suttitleText}

Instructions: The above is the transcript and title of a youtube video I would like to analyze for exaggeration. Based on the content, please give a Clickbait score of the title. Please provide a brief explanation for your rating. and give a most accurate title according to the transcript and summarize the highlights of the video.
reply format:
**Clickbait score**: 10/10 \r\n
**Explanation**: 
xxx \r\n
**More accurate**:
title:xxx \r\n
**Summary**: 
xxx \r\n

Reply in ${userConfig.language === Language.Auto ? language : userConfig.language} Language.`

    console.log('queryText', queryText)

    mount(subtitle.length > 0 ? queryText : '', siteConfig, subtitleList)
    return
  }

  // Google
  const searchInput = getPossibleElementByQuerySelector<HTMLInputElement>(siteConfig.inputQuery)
  if (searchInput && searchInput.value) {
    const searchValueWithLanguageOption =
      userConfig.language === Language.Auto
        ? searchInput.value
        : `${searchInput.value}(in ${userConfig.language})`

    console.log('searchValueWithLanguageOption', searchValueWithLanguageOption)
    // mount(searchValueWithLanguageOption, siteConfig)

    let searchList = ''

    //  Result list
    const resultList = document.querySelectorAll('div.MjjYud')
    if (resultList.length > 0) {
      resultList.forEach((v, i) => {
        let url = ''
        let text = ''
        const index = i + 1
        let titleWrap: Element | null = null
        let title: Element | null = null

        if (v.contains(v.querySelector('block-component'))) {
          // featured snippets
          titleWrap = v.querySelector('div.yuRUbf')
          title = titleWrap?.querySelector('h3.LC20lb') || null
          url = titleWrap?.querySelector('a')?.href || ''
          text = v.querySelector('span.ILfuVd')?.textContent || ''
        } else if (v.contains(v.querySelector('video-voyager'))) {
          // video
          titleWrap = v.querySelector('div.ct3b9e')
          title = titleWrap?.querySelector('h3.LC20lb') || null
          // url = titleWrap?.querySelector('a')?.href || ''
          // text = v.querySelector('div.Uroaid')?.textContent || ''
          url = ''
          text = ''
        } else {
          // link
          titleWrap = v.querySelector('div.yuRUbf')
          title = titleWrap?.querySelector('h3.LC20lb') || null
          url = titleWrap?.querySelector('a')?.href || ''
          text = v.querySelector('div.VwiC3b')?.textContent || ''
        }

        console.log(title, text, url)

        if (title) {
          const html = xss(`<span class="glarity--summary--highlight">[${index}] </span> `)
          title.insertAdjacentHTML('afterbegin', html)
        }

        if (text && url && index <= 6) {
          searchList =
            searchList +
            `
[${index}] ${text}
URL: ${url}

          `
        }
      })
    }

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const queryText = `Web search results:

${searchList}

Current date: ${year}/${month}/${day}

Instructions: Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.
Query: ${searchInput.value}
Reply in ${userConfig.language === Language.Auto ? language : userConfig.language}`

    console.log('searchList', searchList)
    console.log('queryText', queryText)
    console.log('siteConfig', siteConfig)

    mount(searchList ? queryText : '', siteConfig, '')
  }
}

run()

if (siteConfig.watchRouteChange) {
  siteConfig.watchRouteChange(run)
}
