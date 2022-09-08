const chk = document.getElementById('chk')

const html = document.querySelector('html')

chk.addEventListener('change', () => {
 html.classList.toggle('dark-mode')
})