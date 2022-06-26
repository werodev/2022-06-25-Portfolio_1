import { projectArray } from "./constants/projectList.js";
const projectsContainer = document.querySelector(".projects");

projectArray.forEach(function (project) {
        projectsContainer.innerHTML +=
            `
            <div class="col">
                <div class="card mb-3"  style="max-width: 600px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="./${project.image}" class="card-img-top" alt="${project.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <div>
                                        <h4 class="card-title">${project.title}</h4>
                                        <p class="card-text">${project.description}</p>
                                    </div>
                                    <div class="align-bottom d-flex justify-content-end gap-2">
                                        <a href="${project.github}" class="btn btn-primary">Github</a>
                                        <a href="${project.preview}" class="btn btn-primary">Preview</a>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>            
            </div>
            `;
})

