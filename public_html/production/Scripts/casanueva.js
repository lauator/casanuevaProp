//public general
function getElementIdName(idWithNumeral)
{
    idWithNumeral.replace('#', '');
    return idWithNumeral;
}
//public general
function elementExists(elementToValidate)
{
    var element = (elementToValidate.indexOf('#') > -1) ? getElementIdName(elementToValidate) : elementToValidate;
    if (document.getElementById(element) != null)
        return true;
    else
        return false;
}

function cargarSelect(idSelect, valorMaximo) {
    if (elementExists(idSelect) != null) {
        for (i = 0; i <= valorMaximo; i++) {
            var o = new Option(i, i);
            $(idSelect).append(o);
        }
    }
}


function cargarMonedas() {
    if (elementExists('ddlMoneda') && elementExists('ddlMonedaExpensas')) {

        document.getElementById('ddlMoneda').options.length = 0;
        document.getElementById('ddlMonedaExpensas').options.length = 0;

        $.ajax({
            type: "GET",
            url: "/Monedas/ObtenerMonedas",
            //data: '{name: "' + $("#txtName").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                for (i = 0; i < response.length; i++) {
                    var obj1 = new Option(response[i].Descripcion, response[i].IdMoneda);
                    var obj2 = new Option(response[i].Descripcion, response[i].IdMoneda);
                    $('#ddlMoneda').append(obj1);
                    $('#ddlMonedaExpensas').append(obj2);
                }
            },
            failure: function (response) {
                alert("Failure " + response.responseText);
            },
            error: function (response) {
                alert("Error " + response.responseText);
            }
        });
    }
}

function cargarTipoAviso() {
    if (elementExists('ddlTipoAviso')) {

        document.getElementById('ddlTipoAviso').options.length = 0;

        $.ajax({
            type: "GET",
            url: "/TipoOperacion/ObtenerTipoOperacion",
            //data: '{name: "' + $("#txtName").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                for (i = 0; i < response.length; i++) {
                    var obj1 = new Option(response[i].Descripcion, response[i].IdTipoAviso);
                    $('#ddlTipoAviso').append(obj1);
                }
            },
            failure: function (response) {
                alert("Failure " + response.responseText);
            },
            error: function (response) {
                alert("Error " + response.responseText);
            }
        });
    }
}

function cargarEstadoAviso() {
    if (elementExists('ddlEstadoAviso')) {
        document.getElementById('ddlEstadoAviso').options.length = 0;

        $.ajax({
            type: "GET",
            url: "/EstadoAviso/ObtenerEstadoAviso",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                for (i = 0; i < response.length; i++) {
                    //var obj1 = new Option(response[i].Descripcion, response[i].IdEstado);
                    //$('#ddlEstadoAviso').append(obj1);
                }
            },
            failure: function (response) {
                alert("Failure " + response.responseText);
            },
            error: function (response) {
                alert("Error " + response.responseText);
            }
        });
    }
}

function cargarBarrios() {
    if (elementExists('ddlBarrio')) {
        document.getElementById('ddlBarrio').options.length = 0;

        $.ajax({
            type: "GET",
            url: "/Ciudad/ObtenerCiudades",
            //data: '{name: "' + $("#txtName").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                for (i = 0; i < response.length; i++) {
                    var obj1 = new Option(response[i].NombreCiudad, response[i].IdCiudad);
                    $('#ddlBarrio').append(obj1);
                }
            },
            failure: function (response) {
                alert("Failure " + response.responseText);
            },
            error: function (response) {
                alert("Error " + response.responseText);
            }
        });
    }
}

function ChangeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(null, obj.Page, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function confirmacionDeleteModal(idPropiedad,sTitulo, sComentarios) {
    $("#modalHeaderText > h4").text("AVISO - CODIGO PROPIEDAD: " + idPropiedad);
    $("#modalBodyTextTituloProp").text(sTitulo);
    $("#modalBodyTextComentarioProp").text(sComentarios);
    $("#idPropiedad").val(idPropiedad);
    $("#confirmationDeleteModal").modal();
};
