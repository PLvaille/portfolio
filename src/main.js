import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faHtml5, faCss3,  faSass, faBootstrap, faJs, faNodeJs, faVuejs, faGithub, faLinkedin, faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons'

import { faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(faHtml5, faCss3, faSass, faBootstrap, faJs, faNodeJs, faVuejs, faEye, faGithub, faLinkedin, faEnvelope, faGitAlt, faReact  )



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
