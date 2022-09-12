const sectionVisaoGeral = document.querySelector('.visaoGeral')
const sectionCriarEmpresa = document.querySelector('.criarEmpresa')
const sectionGerenciarFuncionarios = document.querySelector('.gerenciarFuncionarios')
const sectionGeenciarDepartmentos = document.querySelector('.gerenciarDepartamentos')


const navDashboard = document.querySelector('.nav ul')

navDashboard.addEventListener('click',e => {
    if(e.target.tagName === 'LI'){
        

        let classClick = e.target.classList[0]
        let classSectionSelectSTR = classClick.substr(8, classClick.length - 1)
        let sectionDaVez = document.querySelector(`.${classSectionSelectSTR}`)
        console.log(sectionDaVez);

        sectionVisaoGeral.classList.add('display-none')
        sectionCriarEmpresa.classList.add('display-none')
        sectionGerenciarFuncionarios.classList.add('display-none')
        sectionGeenciarDepartmentos.classList.add('display-none')
        sectionDaVez.classList.remove('display-none')

       

    }
})

