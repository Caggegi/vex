import {getRequestConfig} from 'next-intl/server';
import { cookies, headers } from 'next/headers';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = (await headers()).get('accept-language')?.split(",")[0] || 'en-US';
 
  return {
    locale,
    messages: await import(`../../messages/${locale}.json`)
      .catch(async () => {
        // Fallback to en-US if requested locale file doesn't exist
        return import('../../messages/en-US.json');
      })
      .then(module => module.default)
  };
});