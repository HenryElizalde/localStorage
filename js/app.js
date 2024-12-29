const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');
const ls = localStorage;

const aceptoInvitacion = () =>{
    registro.classList.remove('activo');
    exito.classList.add('activo');
}


formulario.addEventListener('submit', async(e)=>{
    e.preventDefault();
    try {
        await fetch('https://api.sheetbest.com/sheets/a9906398-1efe-4342-9ac5-213c222e2a66', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": formulario.nombre.value,
                "Correo": formulario.comentario.value,
                "Telefono": "Si asisteré"
            })
        });
    } catch (error) {
        console.log(error);
    }
    ls.setItem("invitacion", "si")
    // acepto la invitacion
    aceptoInvitacion();

});

document.addEventListener("DOMContentLoaded", (e) =>{
    if (ls.getItem("invitacion") === "si") aceptoInvitacion();
});


