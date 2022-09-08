import { sectionCadastro, url} from "./assets.js";

const buttonCadastrar = document.querySelector('.cadastro button')

buttonCadastrar.addEventListener('click', e =>{
    e.preventDefault()
    pegarDadosCadastro()
})

function pegarDadosCadastro(){
    const inputsCadastro = document.querySelectorAll('.cadastro  form > input')
 
    const dados = {
         email : inputsCadastro[0].value,
         password : inputsCadastro[1].value,
         profissional_level : inputsCadastro[2].value,
         username : inputsCadastro[3].value
    }
 
    fazerCadastro(dados)
 }


 async function fazerCadastro(dados){
    await fetch(`${url}/auth/register/user`,{
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
        mostrarErroCadastro(resp.error[0])
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



function mostrarErroCadastro(erro){
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


// FECHAR JANELA DE ERRO

const buttonFecharErro = document.querySelector('.error-cadastro div button')

buttonFecharErro.addEventListener('click', e => {
    e.preventDefault()
    console.log('dfdfdgdf');
    const temp = document.querySelector('.temporarios')

    temp.innerHTML =''
})