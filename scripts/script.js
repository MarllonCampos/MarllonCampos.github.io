document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/scripts/config.json')
    const config = await response.json()


    config.tecnologies.forEach((tecnology) => {
        document.querySelector('#tecnologias .row').appendChild(createTecnology(tecnology))
    })

})




function createTecnology(tecnology) {

    const tecnologyCard = document.createElement('div')
    tecnologyCard.classList.add('tecnology-card')

    const tecnologyImg = document.createElement('img')
    tecnologyImg.setAttribute('src', tecnology.image.url)
    tecnologyImg.setAttribute('alt', tecnology.image.alt)

    const tecnologyName = document.createElement('p')
    tecnologyName.innerText = tecnology.name


    tecnologyCard.appendChild(tecnologyImg)
    tecnologyCard.appendChild(tecnologyName)

    return tecnologyCard
}