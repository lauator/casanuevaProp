function SendEmailForNewsLetter() {
    var jsonData = {
        FromEmail: $('#txtFromEmail').val(),
        FromName: 'Visitante - Anónimo',
        ToEmail: '',
        Message: 'Deseo suscribirme al News letter para recibir notificaciones sobre nuevas propiedades.',
        Subject: 'CASANUEVA - RECIBIR ACTUALIZACIONES Y NOTICIAS.'
    };

    var data = {
        jsonData: JSON.stringify(jsonData)
    };

    EnviarMail(data);
};
function SendEmailForPropertieInfo(tituloPropiedad, descPropiedad) {
    var idPropiedad = getParameterByName("idPropiedad");
    var jsonData = {
        FromEmail: $('#txtFromEmailInfoProp').val(),
        FromName: 'Visitante - Anónimo',
        ToEmail: '',
        Message: "Deseo recibir información sobre la propiedad que estoy viendo. \n CODIGO DE PROPIEDAD: " + idPropiedad + "\n TITULO: " + tituloPropiedad + "\n DESCRIPCION: " + descPropiedad,
        Subject: 'CASANUEVA - INFORMACIÓN SOBRE PROPIEDAD: ' + idPropiedad
    };

    var data = {
        jsonData: JSON.stringify(jsonData)
    };

    EnviarMail(data);
};
function SendEmailContactForm(firstname, lastname, email, subject, message) {
    var firstname = (firstname != '') ? firstname : 'Anonimo'
    var lastname = (lastname != '') ? lastname : 'Anonimo';

    var jsonData = {
        FromEmail: email,
        FromName: firstname.concat(', ', lastname),
        ToEmail: '',
        Message: message,
        Subject: 'CASANUEVA - FORMULARIO DE CONTACTO: ' + subject
    };

    var data = {
        jsonData: JSON.stringify(jsonData)
    };

    EnviarMail(data);
};
function EnviarMail(data) {
    if (data !== null) {
        $.ajax({
            type: "POST",
            async: true,
            dataType: 'json',
            url: 'Contact/EnviarMail',
            data: data,
            complete: function (result) {
                $("#modalMailBodyText > p").text("Su mail ha sido enviado correctamente.");
                $("#mailingModal").modal();
            }
        });
    }
};
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};