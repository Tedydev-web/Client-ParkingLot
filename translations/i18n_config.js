import i18next from 'i18next';
import common_en from './en.json'
import common_vi from './vi.json'
// import { getLanguage } from '../utils/user-func'

i18next.init({
  interpolation: { escapeValue: false },
  // lng: getLanguage() ? getLanguage() : 'en',
  lng: 'vi',
  resources: {
    en: {
      common: common_en
    },
    vi: {
      common: common_vi
    },
  },
});

export default i18next;
