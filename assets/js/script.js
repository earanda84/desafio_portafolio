//Se inicia lectura de documento html y se entrega función de animación de scrollTop con un desplazamiento de la parte superior de -70 unidades con una duración de 800 ms
$(document).ready(function() {

    $('a').click(function() {
        var gato = this.hash

        $('html,body').animate({
            scrollTop: $(gato).offset().top - 70
        }, 800)

    })

})

//Se implementan tooltip Bootstrap

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})