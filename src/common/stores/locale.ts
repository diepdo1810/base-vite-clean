import {defineStore} from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: (): LocaleStore => ({
    locale: 'en'
  }),
  getters: {
    currentLocale: (state) => state.locale
  },
  actions: {
    setLocale(locale: string) {
      this.locale = locale
    }
  }
})

interface LocaleStore {
  locale: string
}
