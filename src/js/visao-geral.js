import { url, tokenUsuario } from "./assets.js";

const ulSetor = document.querySelector('.visaoGeral__div__visao__setor')
const ulEmpresas = document.querySelector('.visaoGeral__div__visao__empresa')
const ulDepartmento = document.querySelector('.visaoGeral__div__visao__departamento')
const ulFuncionarios = document.querySelector('.visaoGeral__div__visao__funcionarios')


async function pegarSetores() {
    const lista = await fetch(`${url}/sectors`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tokenUsuario}`
        }
    }).then(resp => resp.json())
        .then(resp => {
            inserirSetoresNaLista(resp)
        })
        .catch(erro => {
            console.error('error:', erro)
        })


};

 function inserirSetoresNaLista(resp){
    resp.forEach( e=>{
        const li = document.createElement('li')
        li.innerText = e.description
        li.setAttribute('id', e.description)

        ulSetor.append(li)
    })
 }
 pegarSetores()




// LISTAR EMPRESAS

ulSetor.addEventListener('click', e =>{
    if(e.target.tagName == "LI"){
        ulEmpresas.innerHTML = ''
        ulDepartmento.innerHTML = ''
        ulFuncionarios.innerHTML =''
        pegarEmpresasPorDepartamento(e.target.id)
    }
})

async function pegarEmpresasPorDepartamento(setor){
        await fetch(`${url}/companies/${setor}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer null'
            }
        }).then(resp => resp.json())
            .then(resp => {
                inserirEmpresasNaLista(resp)
            })
            .catch(erro => {
                console.error('error:', erro)
            })
}

function inserirEmpresasNaLista(list){
    if(list.length == 0){
        const span = document.createElement('span')
        span.innerText = 'Esse setor não tem empresas cadastradas'
        ulEmpresas.append(span)
    }
    list.forEach(e => {
        const li = document.createElement('li')
        li.innerText = e.name
        li.setAttribute('id', e.uuid)

        const horario =document.createElement('span')
        horario.innerText= e.opening_hours

        const descricao = document.createElement('span')
        descricao.innerText = e.description

        li.append(horario,descricao)

        ulEmpresas.append(li)
    })
}


// LISTAR DEPARTAMENTOS

ulEmpresas.addEventListener('click', e => {
    if(e.target.tagName == "LI"){
        ulDepartmento.innerHTML = ''
        pegarDepartamentos(e.target.id)
    }
})

async function pegarDepartamentos(uuid){
    await fetch(`${url}/departments/${uuid}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tokenUsuario}`
        }
    }).then(resp => resp.json())
        .then(resp => {
            inserirDepartamentosNaLista(resp)
        })
        .catch(erro => {
            console.error('error:', erro)
        })

}

function inserirDepartamentosNaLista(list){
    list.forEach(e=>{
        const li = document.querySelector('li')
        li.innerText = e.name
        li.setAttribute('id', e.uuid)
        ulDepartmento.append(li)

    })
}


// LISTAR FUNCIONARIOS DO DEPARTAMENTO
ulDepartmento.addEventListener('click', e => {
    if(e.target.tagName == "LI"){
        pegarTodosFuncionario(e.target.id)
    }
})

async function pegarTodosFuncionario(idDepartamento){
    await fetch(`${url}/users`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tokenUsuario}`
        }
    }).then(resp => resp.json())
        .then(resp => {
            filtrarFuncionariosPorSetor(resp, idDepartamento)
        })
        .catch(erro => {
            console.error('error:', erro)
        })

}


function filtrarFuncionariosPorSetor(list, idDepartamento){
    list.forEach(e => {
        if(e.department_uuid == idDepartamento){
            const li = document.createElement('li')
            li.innerText = e.username
            li.setAttribute('id', e.uuid)
            ulFuncionarios.append(li)
        }
    })
}