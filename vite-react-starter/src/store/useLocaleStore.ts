import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Locale = 'zh' | 'en'

interface LocaleState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    set => ({
      locale: (typeof window !== 'undefined' && navigator.language.startsWith('zh')) ? 'zh' : 'en',
      setLocale: locale => set({ locale }),
    }),
    {
      name: 'app-locale', // localStorage key name
    },
  ),
)
