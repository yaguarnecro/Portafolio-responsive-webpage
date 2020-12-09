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
                    <a href="https://yaguarnecro.github.io/portafolioresponsive/" target="_blank">
                        <img src="https://repository-images.githubusercontent.com/309911911/79323500-2ef9-11eb-9486-c431623deaec" alt="projecto-1">
                    </a>
                    <a href="https://github.com/yaguarnecro/portafolioresponsive/blob/master/Readme.md" target="_blank" class="btn-light">
                        <i class="fas fa-eye">portafolioresponsive</i>
                    </a>
                    <a href="https://github.com/yaguarnecro/portafolioresponsive" target="_blank" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <a href="" target="_blank">
                        <img src="https://github.com/Klerith/angular-login-demoapp/raw/master/src/assets/images/demo.png?raw=true" alt="projecto-2">
                    </a>
                    <a href="https://github.com/yaguarnecro/loginapp/blob/main/README.md" class="btn-light" target="_blank">
                        <i class="fas fa-eye">Logapp, Api FireBase</i>
                    </a>
                    <a href="https://github.com/yaguarnecro/loginapp" target="_blank" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!" target="_blank">
                    <a href="" target="_blank">
                        <img src="img/projects/project3.jpg" alt="projecto-3">
                    </a>
                    <a href="#" target="_blank" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" target="_blank" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <a href="" target="_blank">
                        <img src="img/projects/project4.jpg" alt="projecto-4">
                    </a>
                    <a href="#" target="_blank" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" target="_blank" class="btn-dark">
                        <i class="fab fa-github">Github</i>
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#!" target="_blank">
                    <a href="">
                        <img src="img/projects/project5.jpg" alt="projecto-5">
                    </a>
                    <a href="#" target="_blank" class="btn-light">
                        <i class="fas fa-eye">Projecto</i>
                    </a>
                    <a href="#" target="_blank" class="btn-dark">
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