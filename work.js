// Define a new component called todo-item
Vue.component('work-item', {
    template: ` 
    <main id="work">
        <h1 class="lg-heading">
            Mis <span class="text-secondary">Trabajos y proyectos</span>
        </h1>
        <h2 class="sm-heading">
            Mira algunos de mis ultimos proyectos.
        </h2>
        <div class="projects">
            <div class="item">
                <a href="#!">
                    <img src="img/projects/project1.jpg" alt="projecto-1">
                    <a href="#" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="img/projects/project2.jpg" alt="projecto-2">
                    <a href="#" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="img/projects/project3.jpg" alt="projecto-3">
                    <a href="#" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="img/projects/project4.jpg" alt="projecto-4">
                    <a href="#" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="img/projects/project5.jpg" alt="projecto-5">
                    <a href="#" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="img/projects/project1.jpg" alt="projecto-1">
                    <a href="#" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
        </div>

    </main>
`


});

var app = new Vue({
    el: '#work',

});