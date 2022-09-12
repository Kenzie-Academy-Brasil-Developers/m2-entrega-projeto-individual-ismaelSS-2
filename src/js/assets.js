const url = 'https://localhost:6278'
const sectionLogin = document.querySelector('.login')
const sectionCadastro = document.querySelector('.cadastro')
const uuidUsuario = localStorage.getItem('@BM:uuid')
const tokenUsuario = localStorage.getItem('@BM:token')
const is_adminUsuario = localStorage.getItem('@BM:is_admin')

export{url, sectionLogin, sectionCadastro, uuidUsuario, tokenUsuario, is_adminUsuario}
