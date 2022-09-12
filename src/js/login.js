import {sectionCadastro, sectionLogin, url} from "./assets.js";
// import { mostrarErro, incrementarClickFecharErro } from "./cadastrojs";
const buttonLogar = document.querySelector('.login form button')
const buttonCadastre = document.querySelector('.login div > button')

buttonLogar.addEventListener('click', e => {
    e.preventDefault()
    pegarDadosLogin()
})

function pegarDadosLogin(){
   const inputsLogin = document.querySelectorAll('.login  form > input')

   const dados = {
        email : inputsLogin[0].value,
        password : inputsLogin[1].value
   }

   fazerLogin(dados)
}

async function fazerLogin(dados){
    await fetch(`${url}/auth/login`,{
     method: 'POST',
     headers:{
         'Content-Type':'application/json'
     },
     body:JSON.stringify(dados)
    }).then(resp => resp.json())
    .then(resp => {
        console.log(resp);
    if(resp.error){
        console.log(resp.error);
        criarModalErro()
    }else{
        localStorage.setItem('@BM:token', resp.token)
        localStorage.setItem('@BM:uuid', resp.user_uuid)
        localStorage.setItem('@BM:uuid_funcionario', resp.uuid)
        localStorage.setItem('@BM:is_admin', resp.is_admin)
        window.location.replace('/src/pages/dashboard.html')
        
        if(resp.is_admin === true){
            window.location.assign('/src/pages/dashboard.html')
        }else{
            window.location.assign('/src/pages/dashboard-funcionario.html')
        }
    }
    })
    .catch(erro => {
        console.error('error:',erro)
    })
};


// ABRIR SECTION CADASTRAR

buttonCadastre.addEventListener('click', e=>{
    e.preventDefault()
    sectionCadastro.classList.remove('display-none')
    sectionLogin.classList.add('display-none')
})



//CRIAR MODAL ERRO
function criarModalErro(erro){
    const temp = document.querySelector('.temporarios')

    const divErro = document.createElement('div')
    divErro.setAttribute('class', 'error-cadastro')
    
    const subDiv = document.createElement('div')
 
    const h3 = document.createElement('h3')
    h3.innerText = 'ERRO'
 
    const p = document.createElement('p')
    p.innerText = erro
 
     const button = document.createElement('button')
     button.setAttribute('class', 'button-padrao')
     button.innerText = 'esta bem'
 
 
    subDiv.append(h3,p, button)
    divErro.append(subDiv)
 
    temp.append(divErro)
}