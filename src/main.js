import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import {  faGithub, faLinkedin, faVuejs } from '@fortawesome/free-brands-svg-icons'

 import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
 library.add(faGithub, faLinkedin, faEnvelope, faVuejs  )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
