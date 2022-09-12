import { url,tokenUsuario } from "./assets.js";

const buttonEditarDepartamento = document.querySelector('.button-editarDepartamento')
const buttonDeletarDepartamento = document.querySelector('.button-deletarDepartamento')
const buttonCriarDepartamento = document.querySelector('.button-criarDeparto')

//EDITAR DEPARTAMENTO
buttonEditarDepartamento.addEventListener('click', e =>{
    e.preventDefault()

    pegarDadosEditarDepartamento()
})

function pegarDadosEditarDepartamento(){
    const inputs = document.querySelectorAll('.editarDepatamento form input')

    editarDepartamento(inputs[0].value, inputs[1].value)
}

async function editarDepartamento(uuid, description){
    await fetch(`${url}/departments/${uuid}`,{
        method: 'PATCH',
        headers:{
            'Content-Type':`Bearer ${tokenUsuario}`
        },
        body:JSON.stringify({
            "description": description
        })
       }).then(resp => resp.json())
       .then(resp => {
           console.log(resp);
        })
       .catch(erro => {
           console.error('error:',erro)
       })
}


//DELETAR DEPARTMENTO
buttonDeletarDepartamento.addEventListener('click', e => {
    e.preventDefault()

    pegarIdDepartamento()
})

function pegarIdDepartamento(){
    const input = document.querySelector('.deletarDepartamento input')

    deletarDepartamento(input.value)
}

async function deletarDepartamento(uuid){
    await fetch(`${url}/departments/${uuid}`,{
        method: 'DELETE',
        headers:{
            'Authorization':`Bearer ${tokenUsuario}`
        }
       }).then(resp => resp.json())
       .then(resp => {
           console.log(resp);
        })
       .catch(erro => {
           console.error('error:',erro)
       })
}



//CRIAR DEPARTAMENTO
buttonCriarDepartamento.addEventListener('click', e =>{
    e.preventDefault()

    pegarDadosParaCriarDepartamento()
})

function pegarDadosParaCriarDepartamento(){
    const inputs = document.querySelectorAll('.criarDepartamento input')

    const dados ={
        name: inputs[0].value,
        description: inputs[1].value,
        company_uuid: inputs[2].value
    }

    criarDepartamento(dados)
}

async function criarDepartamento(dados){
    await fetch(`${url}/departments`,{
        method: 'POST',
        headers:{
            'Content-Type':`Bearer ${tokenUsuario}`
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