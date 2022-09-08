import {sectionCadastro, sectionLogin, url} from "./assets.js";
import { mostrarErro, incrementarClickFecharErro } from "./cadastrojs";
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
        console.log('deu erro');
    }else{
        localStorage.setItem('@BM:token', resp.token)
        localStorage.setItem('@BM:uuid', resp.user_uuid)
        localStorage.setItem('@BM:is_admin', resp.is_admin)
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

}