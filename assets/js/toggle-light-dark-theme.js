console.log('script loaded')
const body_el = document.getElementById('body')
const toggle_button = document.getElementById('toggle-theme')
const toggleTheme = (e) => {
  console.log("toggle")
  body_el.classList.toggle('dark')
}
toggle_button.addEventListener('click', toggleTheme)

