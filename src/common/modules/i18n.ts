import { createI18n } from 'vue-i18n'
import type { UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(17, yaml ? -5 : -4), value.default]
    }),
)

const state = useStorage('locale', '')

const i18n = createI18n({
  legacy: false,
  locale: state.value,
  messages,
})

export const loadLanguageAsync = async (lang: string) => {
  const messages = await import(`../../../locales/${lang}.yml`)
  i18n.global.locale.value = lang
  i18n.global.setLocaleMessage(lang, messages.default)
}

export const install: UserModule = ({ app }) => {
  app.use(i18n)

  loadLanguageAsync(state.value).then(r => r)
}
