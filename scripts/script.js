document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/scripts/config.json');
  const config = await response.json();

  config.tecnologies.forEach((tecnology) => {
    document.querySelector('#tecnologias .row').appendChild(createTecnology(tecnology));
  });

  config.projects.forEach((tecnology) => {
    document.querySelector('#projetos .row').appendChild(createProject(tecnology));
  });

  const projects = document.querySelector('#projetos .project-card');
  function scrollIntoElement(e) {
    if (e.deltaY > 0) {
      projectsTechs.scrollLeft += 50;
      e.preventDefault();
    } else {
      projectsTechs.scrollLeft -= 50;
      e.preventDefault();
    }
  }

  const projectsTechs = projects.querySelector('.techs');
  projects.addEventListener('mouseenter', () => {
    projects.addEventListener('wheel', scrollIntoElement);
  });
  projects.addEventListener('mouseleave', () => {
    projects.removeEventListener('wheel', scrollIntoElement);
  });
});
function createProject(project) {
  const isProjectClosed = project.closed;
  const projectCard = document.createElement('a');
  projectCard.classList.add('project-card');
  projectCard.setAttribute('href', project.githubLink);
  projectCard.setAttribute('target', '_blank');
  isProjectClosed && projectCard.classList.add('closed');

  const projectImg = document.createElement('img');
  projectImg.setAttribute('src', project.image.url);
  projectImg.setAttribute('alt', project.image.alt);

  const projectInfo = document.createElement('div');
  projectInfo.classList.add('project-info');

  const projectName = document.createElement('strong');
  projectName.classList.add('project-name');
  projectName.innerText = project.name;

  const techsChipsContainer = document.createElement('div');
  techsChipsContainer.classList.add('techs');

  for (let chip of project.chips) {
    techsChipsContainer.appendChild(createTechChips(chip));
  }

  projectInfo.appendChild(projectName);
  projectInfo.appendChild(techsChipsContainer);

  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectInfo);

  return projectCard;
}

function createTechChips(chipName) {
  const chip = document.createElement('span');
  chip.classList.add('tech-chip');

  chip.innerText = chipName;

  return chip;
}

function createTecnology(tecnology) {
  const tecnologyCard = document.createElement('div');
  tecnologyCard.classList.add('tecnology-card');

  const tecnologyImg = document.createElement('img');
  tecnologyImg.setAttribute('src', tecnology.image.url);
  tecnologyImg.setAttribute('alt', tecnology.image.alt);

  const tecnologyName = document.createElement('p');
  tecnologyName.innerText = tecnology.name;

  tecnologyCard.appendChild(tecnologyImg);
  tecnologyCard.appendChild(tecnologyName);

  return tecnologyCard;
}
