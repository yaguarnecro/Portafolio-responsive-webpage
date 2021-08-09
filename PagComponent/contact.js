// Define a new component called todo-item
Vue.component('contact-item', {
    template: ` 
<div>
    <main id="contact">
    <h1 class="lg-heading">
        <span class="text-secondary">¿</span>Como contactarme <span class="text-secondary"> ?</span>
    </h1>
    <h2 class="sm-heading text-secondary">
        Sería genial si pudiéramos dialogar un poco...
    </h2>
    <div class="boxes">
        <div>
            <span class="text-secondary">Email: </span> yaguarnecro@gmail.com
        </div>
        <div>
            <span class="text-secondary">Teléfono: </span>(+57) 300 438 5827
        </div>
        <div>
            <span class="text-secondary">Dirección: </span>Medellín-Antioquía-Colombia
        </div>
    </div>


    </main>
    
</div>
`


});

var app = new Vue({
    el: '#contact',

});
