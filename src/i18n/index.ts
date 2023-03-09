import { flattenMessages } from "@utils";
import { createIntl, createIntlCache } from "react-intl";

import { ru } from "./locales/ru";

const cache = createIntlCache();

const locale = "ru";

const messages: { [key: string]: Record<string, string> } = {
  ru: flattenMessages(ru),
};

export const intl = createIntl(
  {
    locale,
    messages: messages[`${locale}`],
  },
  cache
);

export const t = (id: string, values = {}): string =>
  intl.formatMessage({ id }, values);
