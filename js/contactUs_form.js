$(document).ready(function(){
    $("#generalQueryForm").submit(function(e){
        e.preventDefault(); 
        var form = document.forms.generalQueryForm;

        arrayForm = form.elements;

        for (let index = 0; index < arrayForm.length; index++) {
            if(arrayForm[index].classList.contains("inputError"))  {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor corrija los campos que están incorrectos (en rojo)',
                });
                return false;
            }
        }

        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: "Formulario enviado correctamente, pronto recibirá una respuesta. ¡Muchas gracias!",
        })
        setTimeout(function(){form.submit();}, 1800);  
    })
});


function validarMinLengthTextArea(){
    consulta = document.getElementById("consulta");
    if(consulta.value.length < 20){
        campoInvalido(consulta);
    }
    else{
        campoValido(consulta);
    }
}

// function validateFormOnSubmitContact(form) {
//     if(form.lastname.classList.contains("inputError") || form.name.classList.contains("inputError") || form.email.classList.contains("inputError") || form.consulta.classList.contains("inputError")){
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Por favor corrija los campos que están incorrectos (en rojo)',
//         });
//         return false;
        
//     }else{
//         Swal.fire({
//             icon: 'success',
//             title: 'Correcto',
//             text: "Formulario enviado correctamente, pronto recibirá una respuesta. ¡Muchas gracias!",
//         })
//         setTimeout(function(){form.submit()}, 3000);  
//     }
// }

