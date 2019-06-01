import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser, 
  faFolderOpen, 
  faBriefcase,
  faPencilRuler,
  faGraduationCap,
  faAddressCard,
  faFileAlt,
 } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { resultKeyNameFromField } from 'apollo-utilities';

config.autoAddCss = false
library.add(faGithub, 
  faTwitter, 
  faUser, 
  faFolderOpen,
  faBriefcase,
  faPencilRuler,
  faGraduationCap,
  faAddressCard,
  faFileAlt,
  )

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}