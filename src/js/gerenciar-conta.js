import { url, tokenUsuario } from "./assets.js";

const buttonEditarConta = document.querySelector('.button-editarConta')

const inputs = document.querySelectorAll('.gerenciarConta__editarConta form input')

async function pegarInfosPessoais(tokenUsuario){
    const spans= document.querySelectorAll('.gerenciarConta__minhaInformacoes__div span')


    await fetch(`${url}/users/profile`,{
        method: 'GET',
        headers:{
            'Authorization':`Bearer ${tokenUsuario}`
        }
       }).then(resp => resp.json())
       .then(resp => {
           console.log(resp);
       if(resp.error){
           console.log(resp)
       }else{
            spans[0].innerText = resp.username
            inputs[0].value = resp.username

            spans[1].innerText = resp.email
            inputs[1].value = resp.email

            if(resp.professional_level == null){
                spans[2].innerText = 'não definido'
            }else{
                spans[2].innerText = resp.professional_level
            }

            if(resp.kind_of_work == null){
                spans[3].innerText = 'não definido'
            }else{
                spans[3].innerText = resp.kind_of_work
            }

            spans[4].innerText = resp.uuid

            if(resp.department_uuid == null){
                spans[5].innerText = 'não atribuido a nenhum departamento'
            }else{
                spans[5].innerText = respdepartment_uuid
            } 


       }
       })
       .catch(erro => {
           console.error('error:',erro)
       })
}




// EDITAR CONTA
buttonEditarConta.addEventListener('click', () =>{
    pegarDadosEditarConta()
})

function pegarDadosEditarConta(){
    const dados ={
        username : inputs[0].value,
        email : inputs[1].value,
        password : inputs[2].value
    }

    editarConta(dados)
}

async function editarConta(dados){
    await fetch(`${url}/users`,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${tokenUsuario}`
        },
        body:JSON.stringify(dados)
       })
       .then(resp => resp.json())
       .then(resp => resp)
       .catch(erro => {
           console.error('error:',erro)
       })
}

pegarInfosPessoais(tokenUsuario)