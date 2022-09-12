import { url, tokenUsuario } from "./assets.js";


const select = document.querySelector('.lista select')


async function listarSection() {
    const lista = await fetch(`${url}/sectors`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tokenUsuario}`
        }
    }).then(resp => resp.json())
        .then(resp => {
            sectionAppend(resp)
        })
        .catch(erro => {
            console.error('error:', erro)
        })


};

function sectionAppend(lista) {
    lista.forEach(e => {
        const option = document.createElement('option')
        option.innerText = e.description
        option.value = e.description
        select.append(option)
    })

}

listarSection()

//RENDERIZAR EMPRESAS POR SETOR
select.onchange = () =>{criarCardEmpresa(select.value)}

async function criarCardEmpresa(setor) {
    const lista = await fetch(`${url}/companies/${setor}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer null'
        }
    }).then(resp => resp.json())
        .then(resp => {
            montarCard(resp)
        })
        .catch(erro => {
            console.error('error:', erro)
        })
}

function montarCard(respRequest) {
    const ulEmpresas = document.querySelector('.lista ul')
    ulEmpresas.innerHTML = ''
    if (respRequest.length == 0) {
        const h3 = document.createElement('h3')
        h3.innerText = 'não temos empress desse setor'
        ulEmpresas.append(h3)
    } else {
        respRequest.forEach(e => {
            const li = document.createElement('li')

            const nomeEmpresa = document.createElement('h3')
            nomeEmpresa.innerText = e.name

            const frase = document.createElement('p')
            frase.innerText = e.description

            const horario = document.createElement('p')
            horario.innerText = `horario de funcionamento: ${e.opening_hours}`

            li.append(nomeEmpresa, frase, horario)
            ulEmpresas.append(li)
        })
    }
}

export {listarSection}