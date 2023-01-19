import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import ko from "./korean/page.json"
import en from "./english/page.json"


const resource = {
    en : {
        translation: en
    },
    ko : {
        translation: ko
    }
}

i18n.use(initReactI18next).init({
    resources: resource,
    lang:"ko",
    fallbackLng: 'ko',
    debug: true,
    saveMissing: true,
   
},function(err) {
    if(err) console.error(err);
  })

  export default i18n;