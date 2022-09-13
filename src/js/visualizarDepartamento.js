import { url, tokenUsuario } from "./assets.js";

const uuidDepartamento = localStorage.getItem('@BM:uuidDepartamentoFuncionario')
const h3VisualizarDepartamento = document.querySelector('.visializarDepartamento > h3')
const listaColegasTrabalho = document.querySelector('.visializarDepartamento > ul')


if(uuidDepartamento === null){
    h3VisualizarDepartamento.innerText = 'Você ainda não pertencea nenhum departamento'
}else{
    verTodosDepartmentos()
}

async function verTodosDepartmentos(){
    await fetch(`${url}/users/departments/coworkers`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tokenUsuario}`
        }
    }).then(resp => resp.json())
        .then(resp => {
            console.log(resp)
           mostrarColegasTrabalho(resp)
        })
        .catch(erro => {
            console.error('error:', erro)
        })
}

function mostrarColegasTrabalho(r){
    h3VisualizarDepartamento.innerText = `Departamento: ${r[0].name}`
    r[0].users.forEach(element => {
        const li =document.createElement('li')
        li.innerText = element.username
        listaColegasTrabalho.append(li)
    });
}
