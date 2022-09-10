 const opcaoVisaoGeral = document.querySelector('.menuNav-visaoGeral')
 const opcaoCriarEmpresa = document.querySelector('.menuNav-criarEmpresa')

 let opcaoDaVez = opcaoVisaoGeral

const navDashboard = document.querySelector('.nav ul')

navDashboard.addEventListener('click',e => {
    if(e.target.tagName === 'LI'){
        let classClick = e.target.classList[0]
        console.log(classClick);
    }
})



