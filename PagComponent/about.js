// Define a new component called todo-item
Vue.component('about-item', {
    template: `
<div>
    <main class="about" id="about">
        <div class="heading">
            <h1 class="lg-heading">
              About <span class="text-secondary"> Me</span>
            </h1>
            <h2 class="sm-heading">
            Dejame contarte un poco sobre mi.
            </h2>
        </div>

        <img src="img/portrait.jpg" alt="Arturo Araque" class="bio-image">
    
        <div class="bio">
            <h3 class="text-secondarry"><span class="text-secondary">Bio</span></h3>
                <p>Persona perseverante, apasionada por la tecnología, la constante adquisición de nuevos conocimientos y superación de sus propios límites, con conocimientos en programación orientada a objetos, frameworks como .Net y Angular, base de datos
            relacional (SQL), lenguajes como C# y javascript, game engines como Unity, herramientas de automatización como Uipath, y conceptos básicos de ilustración, dominio del inglés como lengua extranjera, alta capacidad de adaptación.
                </p>
        </div>
        
        <div class="swiper-container">
            <div class="swiper-wrapper">

                <div class="swiper-slide">

                    <div class="job">
                        <div class="job job-glass">
                        <h6 class="position"> Desarrollador front-end (2020)</h6>
                        <h3><span class="text-secondary">Portafolio, responsive web-page </span></h3>
                        <p> Sitio web receptivo sensillo que mostrará imágenes, enlaces y descripciones. el punto era experimentar con css grid, gith y github.
                        <br/>
                        <br/> Ultimamente también intenté cambiarlo de un MPA a un SPA con Vue.js </p>
                        
                        </div>
                    </div>

                </div>

                <div class="swiper-slide">

                    <div class="job">
                        <div class="job job-glass">
                        <h6 class="position">Practicante Unisys (2020)</h6>
                        <h3><span class="text-secondary">Practicante desarrollador de software </span></h3>
                        <p>Funciones: automatización robótica de procesos (RPA) con Uipath, manejo de acceso y permisos en Directorio activo, Azure Active Directory, configuración de usuarios, perfiles y grupos, así como el manejo de alertas en office 365.</p>
                        </div>
                    </div>

                </div>

                <div class="swiper-slide">
                

                    <div class="job">
                        <div class="job job-glass">
                        <h6 class="position">UI desinger (2020)</h6>
                        <h3><span class="text-secondary">Técnico en progracimon de software </span></h3>
                        <p>Prototipo de aplicación y portafolio, diseñado en Figma, con componentes reutilizables, y simulación de navegación https://www.figma.com/@yaguarnecro.</p>
                        </div>
                    </div>

                </div>

                <div class="swiper-slide">

                    <div class="job">
                        <div class="job job-glass">
                        <h6 class="position">full stack developer( student 2019)</h6>
                        <h3><span class="text-secondary">Técnico en progracimon de software </span></h3>
                        <p>Como trabajo de grado, se procedio con la creación de una aplicación integrar para una empreza ficticia comercializadora.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <!DOCTYPE html><html><head><link href="./main.css" rel="stylesheet" /><title>Document</title></head><body><p class="v10" /></body></html>    </main>
</div>
    `


});

var app = new Vue({
    el: '#about',

});