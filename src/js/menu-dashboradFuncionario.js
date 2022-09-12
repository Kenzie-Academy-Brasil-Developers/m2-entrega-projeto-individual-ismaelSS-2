const sectionGerenciarContaFuncionario = document.querySelector('.gerenciarConta')
const sectionVisializarDepartamento = document.querySelector('.visializarDepartamento')

const navDashboard = document.querySelector('.nav ul')

navDashboard.addEventListener('click',e => {
    if(e.target.tagName === 'LI'){
        

        let classClick = e.target.classList[0]
        let classSectionSelectSTR = classClick.substr(8, classClick.length - 1)
        let sectionDaVez = document.querySelector(`.${classSectionSelectSTR}`)
        console.log(sectionDaVez);


        sectionGerenciarContaFuncionario.classList.add('display-none')
        sectionVisializarDepartamento.classList.add('display-none')
        sectionDaVez.classList.remove('display-none')

       

    }
})

