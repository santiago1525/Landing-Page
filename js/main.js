// EFECTO MAQUINA
const typed = new Typed('.typed', {
    strings:[
        '<i>Bienvenido al evento</i>',
        '<i>Bienvenido al evento</i>'
    ],
    typeSpeed: 70,  // Tiempo que demora en escrbir una letra
    starDelay: 4000, // Tiempo de retraso en iniciar la animacion
    backSpeed: 70, // Tiempo que tarda en borrar una letra

});


/* Validacion Formulario */

var toastCamp = document.getElementById('CampToast');
var toastC = new bootstrap.Toast(toastCamp);

var toastForm = document.getElementById('NiceToast');
var toastF = new bootstrap.Toast(toastForm);

const form = document.querySelector('#form-event');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.querySelector('#floatingName');
    const email = document.querySelector('#floatingInput');
    const pass = document.querySelector('#floatingPassword');

    if(name.value == "" || email.value == "" || pass.value == "") {
        toastC.show();
    }
    else {
        toastF.show();
        form.reset();
    }
});
