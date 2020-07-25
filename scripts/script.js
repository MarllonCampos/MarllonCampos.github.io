const ul = document.getElementsByTagName("ul")[1];

async function getRepos() {
    const response = await fetch('https://api.github.com/users/marlloncampos/repos')
    const repos = await response.json()

    return repos
}


showInfo()

async function showInfo() {
    let data
    data = await getRepos()

    data.forEach(element => {
        var li = document.createElement('li')
        var p = document.createElement('p')
        var anotherP = document.createElement('p')
        li.innerHTML = `<strong>* ${element.full_name}</strong>`
        if (element.description) {
            anotherP.innerHTML = `<strong>Descrição: </strong>${element.description}`
        }
        p.innerHTML = `<a href="${element.html_url}" target="_blank">${element.name} </a>`
        anotherP.classList.add('descricao')
        li.appendChild(anotherP)
        li.appendChild(p)
        ul.appendChild(li)

    })
}