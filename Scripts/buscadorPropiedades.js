    //public general
    function search(sorting) {
        var jsonData = getSearchParamenter();

        var data = {
            jsonData: JSON.stringify(jsonData),
            sortOption: (sorting == "default") ? "" : getSortType(),
            page: $("#PropertiesListSection .pagination a").html(),
            pageSize: $("#items_per_page").val()
        };
        if (jsonData !== null) {
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: 'FiltrarPropiedades',
                data: data,
                //contentType: "application/json; charset=utf-8",
                success: function (result) {
                    $('#PropertiesListSection').html(result.responseText);
                },
                error: function (result) {
                    $('#PropertiesListSection').html(result.responseText);
                    //console.log(result);
                }
            });
        }
    };

    function searchPropFromIndex() {
        var jsonData = getSearchParamenter();

        var data = {
            jsonData: JSON.stringify(jsonData)
        };

        if (jsonData !== null) {
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: 'Home/FiltrarPropiedadesIndex',
                data: data,
                //contentType: "application/json; charset=utf-8",
                success: function (result) {
                    $('#PropertiesListSectionIndex').html(result.responseText);
                },
                error: function (result) {
                    $('#PropertiesListSectionIndex').html(result.responseText);
                }
            });
        }
    };

    function searchPropFromAdmin() {
        var jsonData = getSearchParameterAdmin();

        var data = {
            jsonData: JSON.stringify(jsonData),
            page: $("#PropertiesListSectionAdmin .pagination a").html(),
            pageSize: $("#items_per_page").val()
        };

        if (jsonData !== null) {
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: 'FiltrarPropiedadesAdministracion',
                data: data,
                //contentType: "application/json; charset=utf-8",
                success: function (result) {
                    $('#PropertiesListSectionAdmin').html(result.responseText);
                },
                error: function (result) {
                    $('#PropertiesListSectionAdmin').html(result.responseText);
                }
            });
        }
    };
    function getSortType() {
        if ($("#sortByPrice").hasClass("active"))
        { var pSortOption = "price_desc"; }
        else
        { var pSortOption = "price_asc"; }
        return pSortOption;
    };
    function getSearchParamenter() {
        var dataParameters = {
            searchTextParam: $('#SearchString').val(),
            idBarrio: $("#ddlBarrio").val(),
            cantBanos: $("#ddlSanitarios").val(),
            idTipoMoneda: $("#ddlTipoMoneda").val(),
            cantAmbientes: $("#ddlAmbientes").val(),
            idTipoAviso: $("#ddlTipoAviso").val(),

            minPrecio: $("#txtPrecioMin").val(),
            maxPrecio: $("#txtPrecioMax").val(),
            metrosCubiertosMax: $("#txtMetrosCubiertosMax").val(),

            conGarage: document.getElementById("conGarage").checked,
            conAptoProf: document.getElementById("conAptoProf").checked,
            conAgua: document.getElementById("conAgua").checked,
            conLuz: document.getElementById("conLuz").checked,
            conGas: document.getElementById("conGas").checked,
            conInternet: document.getElementById("conInternet").checked,
            conSegPriv: document.getElementById("conSeguridadPriv").checked,
            conPorteroElec: document.getElementById("conPorteroElectrico").checked,
            conAireAcon: document.getElementById("conAireAcondicionado").checked
        };
        return dataParameters;
    };
    function getSearchParameterAdmin() {
        var dataParameters = {
            codigoPropiedad: $("#CodigoPropiedad").val(),
            searchTextParam: $('#SearchString').val(),
            idEstadoAviso: $("#ddlEstadoAviso").val(),
            idTipoAviso: $("#ddlTipoAviso").val(),
            esDestacado: document.getElementById("esDestacado").checked
        };
        return dataParameters;
    };

