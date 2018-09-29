$(document).on("ready",function(){
        //ENVIO DE CORREO

        $('#btn-enviar').on('click',function(){

            $('#respuesta').html('Enviando Mensaje...');

            var nombre = $('#nombre').val();
            var telefono = $('#telefono').val();
            var email = $('#email').val();
            var mensaje = $('#mensaje').val();

            if (nombre=='' || telefono=='' || email=='' || mensaje=='') {

                $('#respuesta').html('Error, complete los campos correctamente');

            } else {

                $.post('mail.php',{'nombre':nombre,'telefono':telefono,'email':email,'mensaje':mensaje},function(datos){
                          lista = JSON.parse(datos);
                          if (lista.respuesta=='ok'){
                             $('#respuesta').html('El mensaje fue enviado correctamente.<br> En breve nos comunicaremos con ustedes. Muchas gracias');
                          } else {
                             $('#respuesta').html('Error al enviar el mensaje, intentelo nuevamente');
                          }
                });

            }    

        });
});        

