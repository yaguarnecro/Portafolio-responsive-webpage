// Define a new component called todo-item
Vue.component('about-item', {
    template: `
<div>
    <main id="about">
        <h1 class="lg-heading">
            About <span class="text-secondary"> Me</span>
        </h1>
        <h2 class="sm-heading">
            Dejame contarte un poco sobre mi.
        </h2>
        <div class="about-info">
            <img src="img/portrait.jpg" alt="Arturo Araque" class="bio-image">
            <div class="bio">
                <h3 class="text-secondarry">Bio</h3>
                <p>Persona perseverante, apasionada por la tecnología, la constante adquisición de nuevos conocimientos y superación de sus propios límites, con conocimientos en programación orientada a objetos, frameworks como .Net y Angular, base de datos
                    relacional (SQL), lenguajes como C# y javascript, game engines como Unity, herramientas de automatización como Uipath, y conceptos básicos de ilustración, dominio del inglés como lengua extranjera, alta capacidad de adaptación.
                </p>
            </div>
            <div class="job job-1">
                <h6 class="position">Front-end developer(2020)</h6>
                <h3>Portafolio, responsive web-page</h3>
                <p>L</p>
            </div>
            <div class="job job-2">
                <h6 class="position">full stack developer(2020)</h6>
                <h3>123 WebShop</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maxime provident, eaque tempora a inventore. Culpa numquam laboriosam quidem est!</p>
            </div>
            <div class="job job-3">
                <h6 class="position">full stack developer(2020)</h6>
                <h3>123 WebShop</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maxime provident, eaque tempora a inventore. Culpa numquam laboriosam quidem est!</p>
            </div>
        </div>
    </main>
    <script src="js/main.js"></script>
</div>
    `


});

var app = new Vue({
    el: '#about',

});