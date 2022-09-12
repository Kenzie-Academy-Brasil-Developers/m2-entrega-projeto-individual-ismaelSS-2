import { url, tokenUsuario } from "./assets.js";

const buttonDemitir = document.querySelector('.button-contratar')

buttonDemitir.addEventListener('click', e =>{
    e.preventDefault()

    pegarDadoscontrartar()
})

function pegarDadoscontrartar(){
    const inputsDemitir = document.querySelectorAll('.gerenciarFuncionarios__contratar__div form input')

    const dados = {
        user_uuid : inputsDemitir[0].value,
        department_uuid : inputsDemitir[1].value
    }

    contratarFuncionario(dados)
}

async function contratarFuncionario(dados){
    await fetch(`${url}/departments/hire/`,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${tokenUsuario}`
        },
        body:JSON.stringify(dados)
       }).then(resp => resp.json())
       .then(resp => {
           console.log(resp);
        })
       .catch(erro => {
           console.error('error:',erro)
       }) 
}