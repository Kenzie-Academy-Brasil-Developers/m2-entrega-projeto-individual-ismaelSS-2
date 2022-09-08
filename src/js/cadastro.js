import {url} from "./assets.js";

const buttonCadastrar = document.querySelector('.cadastro button')

buttonCadastrar.addEventListener('click', e =>{
    e.preventDefault()
    console.log(e.target)
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
        mostrarErro(resp.error[0])
    }else{
        criarModalSucesso()
    }
    })
    .catch(erro => {
        console.error('error:',erro)
    })

};


// CRIAR MODAL ERRO CADASTRO
function mostrarErro(erro){
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

   incrementarClickFecharErro()
   window.alert('alerta do mostrar erro pos chamada do incrementar')
}


// FECHAR JANELA DE ERRO

function incrementarClickFecharErro(){
    const buttonFecharErro = document.querySelector('.temporarios div div button')

    buttonFecharErro.addEventListener('click', e => {
        e.preventDefault()
        // console.log('dfdfdgdf');
        const temp = document.querySelector('.temporarios')

        temp.innerHTML =''
    })
}


// SUCESSO CADASTRO
 function criarModalSucesso(){
    const temp = document.querySelector('.temporarios')

   const divErro = document.createElement('div')
   divErro.setAttribute('class', 'sucesso-cadastro')
   
   const subDiv = document.createElement('div')

   const h3 = document.createElement('h3')
   h3.innerText = 'Cadastro realizado com sucesso'

   const p = document.createElement('p')
   p.innerText = 'você sera redirecionado para a tela de login'

   subDiv.append(h3,p)
   divErro.append(subDiv)

   temp.append(divErro)
//    setInterval(e=>{}3000)
//    window.alert('sdssddsds')
 }

 export{mostrarErro, incrementarClickFecharErro}