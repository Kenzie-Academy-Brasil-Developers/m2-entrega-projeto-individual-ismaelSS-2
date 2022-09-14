import { url, tokenUsuario } from "./assets.js";

const buttonDeletarConta = document.querySelector('.button-deletarConta')

buttonDeletarConta.addEventListener('click', e =>{
    e.preventDefault()
    pegarUuidChamarDeletar()
})

function pegarUuidChamarDeletar(){
    const uuidFuncionario = document.querySelector('.gerenciarFuncionarios__deletarConta__div > form >input').value

    deletarConta(uuidFuncionario)
}

async function deletarConta(uuid){
    await fetch(`${url}/admin/delete_user/${uuid}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenUsuario}`
        }
    }).then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
        .catch(erro => {
            console.error('error:', erro)
        })
}