const projectGroup = document.querySelector('.project-group');

const data = [
    {
        "typeOfProject":"Portifolio Website",
        "shortDescription":"Online description of me",
        "image": "https://i.pinimg.com/originals/44/83/37/448337fd82e8c13de37548a9e7ca1261.jpg",
        "projectLink": "https://e-clone-b16ec.web.app/"      
    },
    // {
    //     "typeOfProject":"Noonya Search Engine",
    //     "shortDescription":" Google based Search Engine mimic",
    //     "image": "https://resize.hswstatic.com/w_796/gif/google-update.jpg",
    //     "projectLink": "https://e-clone-b16ec.web.app/"      
    // },
  
];

window.addEventListener('load', (event)=>{
    showProjects(data)
});


function showProjects(data){
    const htmlString = data.map((project)=>{
        return `
        <article class="project-tile">
        <a href="${project.projectLink}">
          <div class="project-tile-image">
            <img class="image" src="${project.image}" alt="landscape pic" />
          </div>
          <div class="project-info">
            <h5>${project.typeOfProject}</h5>
            <p>${project.shortDescription}</p>
          </div>
        </a>
      </article>
        `;
    }).join('');

    projectGroup.innerHTML = htmlString;
}
