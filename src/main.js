import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { MotionPlugin } from '@vueuse/motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebook, faInstagram)

createApp(App)
  .use(MotionPlugin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
