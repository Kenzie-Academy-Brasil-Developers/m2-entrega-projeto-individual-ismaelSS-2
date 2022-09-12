import { url, tokenUsuario} from "./assets.js";

const buttonCadastrarEmpresa = document.querySelector('.button-criarEmpresa')

const inputs =document.querySelectorAll('input')

buttonCadastrarEmpresa.addEventListener('click', e =>{
    e.preventDefault()
    if(inputs[0] == '' || inputs[1] == '' ||inputs[2] == ''|| inputs[3] == '' ){
        window.alert('preecha todos os dados')
    }else{
        pegarDadosCadastrarEmpresa()
    }
})

function pegarDadosCadastrarEmpresa(){
    const dados ={
        name : inputs[0].value,
        opening_hours : inputs[1].value,
        description : inputs[2].value,
        sector_uuid : inputs[3].value
    }
    cadastrarEmpresa(dados)
}

async function cadastrarEmpresa(dados){
    await fetch(`${url}/companies`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${tokenUsuario}`
        },
        body:JSON.stringify(dados)
       }).then(resp => resp.json())
       .then(resp => {
           console.log(resp);
           if(resp.error){
               console.log(resp);
               window.alert(resp.error[0])
           }else{
            window.alert('empresa cadastrada com sucesso')
           }
       })
       .catch(erro => {
           console.error('error:',erro)
       })
}