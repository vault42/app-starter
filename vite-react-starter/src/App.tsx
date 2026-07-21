import { IntlProvider } from 'react-intl'
import enMessages from './locales/en.json'
import zhMessages from './locales/zh.json'
import Home from './pages/Home'

import { ThemeProvider } from '/@/components/theme-provider'
import { useLocaleStore } from '/@/store/useLocaleStore'

const messages = {
  zh: zhMessages,
  en: enMessages,
}

function IntlAppProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocaleStore(state => state.locale)
  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="zh">
      {children}
    </IntlProvider>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <IntlAppProvider>
        <Home />
      </IntlAppProvider>
    </ThemeProvider>
  )
}
