import styles from './scss/main.scss'
import toggleNav from './js/toggle_nav'
import routes from './js/routes'
import png from './img/logo.png'

const footerYear = document.querySelector('.Footer-year')

footerYear.textContent = new Date().getFullYear()

toggleNav()
routes()

