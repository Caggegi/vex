import {getRequestConfig} from 'next-intl/server';
import { headers } from 'next/headers';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  let locale = "en"
  try{
    locale = (await headers()).get('accept-language')?.split(",")[0].split("-")[0] || 'en';
  } catch(error:any){
    console.warn("Error setting locale")
  }
 
  return {
    locale,
    messages: await import(`../../messages/${locale}.json`)
      .catch(async () => {
        // Fallback to en if requested locale file doesn't exist
        return import('../../messages/en.json');
      })
      .then(module => module.default)
  };
});