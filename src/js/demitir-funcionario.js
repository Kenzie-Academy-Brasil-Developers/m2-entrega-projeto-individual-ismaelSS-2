import { url, tokenUsuario } from "./assets.js";

const buttonDemitir = document.querySelector('.button-demitir')

buttonDemitir.addEventListener('click', e =>{
    e.preventDefault()
    pegarDadosDemitir()
})

function pegarDadosDemitir(){
    const inputId = document.querySelector('.gerenciarFuncionarios__demitir__div input')

    demitirFuncionario(inputId)
}

async function  demitirFuncionario(inputId){
    await fetch(`${url}/departments/dismiss/${inputId}`,{
        method: 'PATCH',
        headers:{
            'Authorization':`Bearer ${tokenUsuario}`
        },
       }).then(resp => resp.json())
       .then(resp => {
           console.log(resp);
        })
       .catch(erro => {
           console.error('error:',erro)
       }) 
}