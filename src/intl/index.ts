import { createIntl, createIntlCache } from 'react-intl'
import { flattenMessages } from '@utils'

import { ruLocale } from './locales/ru'

const cache = createIntlCache()

const locale = 'ru'

const messages: { [key: string]: Record<string, string> } = {
  ru: flattenMessages(ruLocale),
}

export const intl = createIntl(
  {
    locale,
    messages: messages[`${locale}`],
  },
  cache,
)

export const t = (id: string, values = {}): string =>
  intl.formatMessage({ id }, values)
