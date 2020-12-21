// Define a new component called todo-item
Vue.component('work-item', {
    template: ` 
    <div class="contenido-principal" id="work">
        <h1 class="lg-heading">
            Mis <span class="text-secondary">Trabajos y proyectos</span>
        </h1>
        <h2 class="sm-heading">
            Mira algunos de mis ultimos proyectos.
        </h2>

        <div class="swiper-container">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <div class="item">
                        <a href="#!">
                            <a href="https://yaguarnecro.github.io/portafolioresponsive/" target="_blank">
                                <img src="https://repository-images.githubusercontent.com/309911911/79323500-2ef9-11eb-9486-c431623deaec" alt="projecto-1">
                            </a>
                            <a href="https://github.com/yaguarnecro/portafolioresponsive/blob/master/Readme.md" target="_blank" class="btn-light">
                                <i class="fas fa-eye"> Portafolioresponsive</i>
                            </a>
                            <a href="https://github.com/yaguarnecro/portafolioresponsive" target="_blank" class="btn-dark">
                                <i class="fab fa-github"> Github</i>
                            </a>
                            <a href="https://www.figma.com/file/xzK9RWyvBs5gBexgjxkOdK/Portafolio-Desing?node-id=0%3A1" target="_blank" class="btn-dark">
                                <i class="fas fa-eye"> Figma desing</i>
                            </a>
                        </a>
                    </div>
                </div>

                <div class="swiper-slide">
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
                </div>

                <div class="swiper-slide">
                    <div class="item">
                    <a href="#!">
                    <a href="" target="_blank">
                    <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWHzi699ynpJStogXDXHqR8%2FAppGoalsTracker%3Fnode-id%3D5%253A9%26scaling%3Dmin-zoom" allowfullscreen></iframe>
                    </a>
                    <a href="https://www.figma.com/file/WHzi699ynpJStogXDXHqR8/AppGoalsTracker?node-id=0%3A1" class="btn-light" target="_blank">
                        <i class="fas fa-eye"> Tracking app Figma</i>
                    </a>
                </a>

                    </div>
                </div>

                <div class="swiper-slide">
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
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>

    </div>

`


});

var app = new Vue({
    el: '#work',

});