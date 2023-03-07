import { isString } from 'lodash'

interface NestedMessages {
  [key: string]: string | NestedMessages
}

export const flattenMessages = (
  nestedMessages: NestedMessages,
  prefix = '',
): Record<string, string> =>
  Object.keys(nestedMessages).reduce(
    (acc: Record<string, string>, key: string): Record<string, string> => {
      const value = nestedMessages[`${key}`]
      const prefixedKey = prefix ? `${prefix}.${key}` : key

      if (isString(value)) {
        acc[`${prefixedKey}`] = value
      } else {
        Object.assign(acc, flattenMessages(value, prefixedKey))
      }

      return acc
    },
    {},
  )
