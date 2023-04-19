import { defaults } from 'lodash-es'
import Browser from 'webextension-polyfill'

export enum TriggerMode {
  Always = 'always',
  QuestionMark = 'questionMark',
  Manually = 'manually',
}

export const TRIGGER_MODE_TEXT = {
  [TriggerMode.Always]: { title: 'Always', desc: 'ChatGPT is queried on every search' },
  [TriggerMode.Manually]: {
    title: 'Manually',
    desc: 'ChatGPT is queried when you manually click a button',
  },
}

export enum Theme {
  Auto = 'auto',
  Light = 'light',
  Dark = 'dark',
}

export enum Language {
  Auto = 'auto',
  English = 'en-US',
  ChineseSimplified = 'zh-Hans',
  ChineseTraditional = 'zh-Hant',
  Spanish = 'es-ES',
  French = 'fr-FR',
  Korean = 'ko-KR',
  Japanese = 'ja-JP',
  German = 'de-DE',
  Portuguese = 'pt-PT',
  Russian = 'ru-RU',
}

const userConfigWithDefaultValue: {
  triggerMode: TriggerMode
  theme: Theme
  language: Language
  prompt: string
  promptSearch: string
  promptPage: string
  promptComment: string
  enableSites: string[] | null
  pageSummaryEnable: boolean
  pageSummaryWhitelist: string
  pageSummaryBlacklist: string
} = {
  triggerMode: TriggerMode.Always,
  theme: Theme.Auto,
  language: Language.Auto,
  prompt: '',
  promptSearch: '',
  promptPage: '',
  promptComment: '',
  enableSites: null,
  pageSummaryEnable: true,
  pageSummaryWhitelist: '',
  pageSummaryBlacklist: '',
}

export type UserConfig = typeof userConfigWithDefaultValue

export async function getUserConfig(): Promise<UserConfig> {
  const result = await Browser.storage.local.get(Object.keys(userConfigWithDefaultValue))
  return defaults(result, userConfigWithDefaultValue)
}

export async function updateUserConfig(updates: Partial<UserConfig>) {
  console.debug('update configs', updates)
  return Browser.storage.local.set(updates)
}

export async function getSessionTask(): Promise<string> {
  const result = await Browser.storage.local.get('taskId')
  return result.taskId
}

export async function setSessionTask(taskId: string) {
  return Browser.storage.local.set({ taskId })
}

export enum ProviderType {
  ChatGPT = 'chatgpt',
  GPT3 = 'gpt3',
}

export enum ChatModelType {
  GPT35 = 'GPT-3.5 Turbo',
  GPT40 = 'auto',
}

interface GPT3ProviderConfig {
  model: string
  apiKey: string
  apiHost: string
}

export interface ProviderConfigs {
  provider: ProviderType
  configs: {
    [ProviderType.GPT3]: GPT3ProviderConfig | undefined
  }
  chatModel: ChatModelType | undefined
}

export interface ChatModel {
  name: string
  code: ChatModelType
  desc: string
}

export async function getProviderConfigs(): Promise<ProviderConfigs> {
  const { provider = ProviderType.ChatGPT } = await Browser.storage.local.get('provider')
  const configKey = `provider:${ProviderType.GPT3}`
  const result = await Browser.storage.local.get(configKey)
  const chatModel = await Browser.storage.local.get('chatModel')
  return {
    provider,
    configs: {
      [ProviderType.GPT3]: result[configKey],
    },
    chatModel: chatModel.chatModel,
  }
}

export async function saveProviderConfigs(
  provider: ProviderType,
  configs: ProviderConfigs['configs'],
  chatModel: ChatModelType | undefined,
) {
  return Browser.storage.local.set({
    provider,
    [`provider:${ProviderType.GPT3}`]: configs[ProviderType.GPT3],
    chatModel,
  })
}

export const BASE_URL = 'https://chat.openai.com'

export const DEFAULT_PAGE_SUMMARY_BLACKLIST = `https://www.youtube.com`
export const APP_TITLE = `YouTube Summary`

export const DEFAULT_MODEL = 'gpt-3.5-turbo'
export const DEFAULT_API_HOST = 'api.openai.com'

export const CHAT_DEFAULT_MODEL = 'text-davinci-002-render-sha'

export const TRANSLATION_LANGUAGES = [
  { name: 'Chinese (Simplified)', code: 'zh-Hans' },
  { name: 'Chinese (Traditional)', code: 'zh-Hant' },
  { name: 'English', code: 'en-US' },
  { name: 'Hindi', code: 'hi-IN' },
  { name: 'Spanish', code: 'es-ES' },
  { name: 'Arabic', code: 'ar-SA' },
  { name: 'Bengali', code: 'bn-BD' },
  { name: 'Portuguese', code: 'pt-PT' },
  { name: 'Russian', code: 'ru-RU' },
  { name: 'Japanese', code: 'ja-JP' },
  { name: 'Punjabi', code: 'pa-IN' },
  { name: 'German', code: 'de-DE' },
  { name: 'Korean', code: 'ko-KR' },
  { name: 'French', code: 'fr-FR' },
  { name: 'Vietnamese', code: 'vi-VN' },
  { name: 'Telugu', code: 'te-IN' },
  { name: 'Marathi', code: 'mr-IN' },
  { name: 'Tamil', code: 'ta-IN' },
  { name: 'Turkish', code: 'tr-TR' },
  { name: 'Urdu', code: 'ur-PK' },
  { name: 'Italian', code: 'it-IT' },
  { name: 'Thai', code: 'th-TH' },
  { name: 'Gujarati', code: 'gu-IN' },
  { name: 'Persian', code: 'fa-IR' },
  { name: 'Polish', code: 'pl-PL' },
  { name: 'Pashto', code: 'ps-AF' },
  { name: 'Kannada', code: 'kn-IN' },
  { name: 'Malayalam', code: 'ml-IN' },
  { name: 'Sundanese', code: 'su-ID' },
  { name: 'Odia', code: 'or-IN' },
  { name: 'Maithili', code: 'mai-IN' },
  { name: 'Burmese', code: 'my-MM' },
  { name: 'Ukrainian', code: 'uk-UA' },
  { name: 'Bhojpuri', code: 'bh-IN' },
  { name: 'Tagalog', code: 'tl-PH' },
  { name: 'Yoruba', code: 'yo-NG' },
  { name: 'Sindhi', code: 'sd-IN' },
  { name: 'Amharic', code: 'am-ET' },
  { name: 'Fula', code: 'ff-SN' },
  { name: 'Romanian', code: 'ro-RO' },
  { name: 'Igbo', code: 'ig-NG' },
  { name: 'Azerbaijani', code: 'az-AZ' },
  { name: 'Awadhi', code: 'awa-IN' },
]

export const CHAT_MODEL: ChatModel[] = [
  {
    name: 'GPT-3.5 Turbo',
    code: ChatModelType.GPT35,
    desc: 'GPT-3.5 is unlimited for Free and Plus users.',
  },
  {
    name: 'GPT-4',
    code: ChatModelType.GPT40,
    desc: 'GPT-4 is for Plus users and has a very limited quota.',
  },
]
