searchVisible = 0;
transparent = true;

function validateFirstStep() {

    var v_txtTitulo = document.getElementById('txtTituloAviso');
    var v_txtPrecio = document.getElementById('txtPrecio');
    var v_errorTitulo = "";
    var v_errorPrecio = "";

    if ($.trim(v_txtTitulo.value) == "") {
        v_errorTitulo = "Por favor, complete el campo Nombre del Aviso";
    }
    if ($.trim(v_txtPrecio.value) == "") {
        v_errorPrecio = "Por favor, complete el campo Precio";
    }
    
    if (v_errorTitulo != "" || v_errorPrecio != "") {
        $("#lblCampo1").text(v_errorTitulo);
        $("#lblCampo2").text(v_errorPrecio);
        var v_modal = document.getElementById('myModal');
        $(v_modal).modal('show');

        $('html,body').scrollTop(0);

        return false;
    }

    $('html,body').scrollTop(0);
    return true;
}

//function validateSecondStep() { $('html,body').scrollTop(0); return true; }
//function validateThirdStep() { $('html,body').scrollTop(0); return true; }
//function validateFourthStep() { $('html,body').scrollTop(0); return true; }
//function validateFifthStep() { return true; }



$(document).ready(function () {
    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();

    $('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',
        onInit: function (tab, navigation, index) {

            //check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            $width = 100 / $total;

            $display_width = $(document).width();

            if ($display_width < 600 && $total > 3) {
                $width = 50;
            }

            navigation.find('li').css('width', $width + '%');

        },
        onNext: function (tab, navigation, index) {
            // return true;
            if (index == 1) {
                return validateFirstStep();
            }
            //else if (index == 2) {
            //    return validateSecondStep();
            //} else if (index == 3) {
            //    return validateThirdStep();
            //} else if (index == 4) {
            //    return validateFourthStep();
            //} 
            //else if (index == 5) {
            //    return validateFifthStep();
            //}
            $('html,body').scrollTop(0);
            return true;
        },
        onTabClick: function (tab, navigation, index) {
            // Disable the posibility to click on tabs
            return false;
        },
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var wizard = navigation.closest('.wizard-card');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $(wizard).find('.btn-next').hide();
                $(wizard).find('.btn-finish').show();
            } else {
                $(wizard).find('.btn-next').show();
                $(wizard).find('.btn-finish').hide();
            }
        }
    });

    // Prepare the preview for profile picture
    $("#wizard-picture").change(function () {
        readURL(this);
    });

    $("#imagen1").change(function () {
        readURL_imagen1(this, '#imagen1');
    });

    $("#imagen2").change(function () {
        readURL_imagen2(this, '#imagen2');
    });

    $("#imagen3").change(function () {
        readURL_imagen3(this, '#imagen3');
    });

    $("#imagen4").change(function () {
        readURL_imagen4(this, '#imagen4');
    });

    $("#imagen5").change(function () {
        readURL_imagen5(this, '#imagen5');
    });

    $("#imagen6").change(function () {
        readURL_imagen6(this, '#imagen6');
    });

    $("#imagen7").change(function () {
        readURL_imagen7(this, '#imagen7');
    });

    $("#imagen8").change(function () {
        readURL_imagen8(this, '#imagen8');
    });

    $("#imagen9").change(function () {
        readURL_imagen9(this, '#imagen9');
    });

    $("#imagen10").change(function () {
        readURL_imagen10(this, '#imagen10');
    });

    $("#imagen11").change(function () {
        readURL_imagen11(this, '#imagen11');
    });

    $("#imagen12").change(function () {
        readURL_imagen12(this, '#imagen12');
    });

    $('[data-toggle="wizard-radio"]').click(function () {
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked', 'true');
        }
    });

    $height = $(document).height();
    $('.set-full-height').css('height', $height);


});



function validateSecondStep() {

    //code here for second step
    $(".wizard-card form").validate({
        rules: {
        },
        messages: {
        }
    });

    if (!$(".wizard-card form").valid()) {
        console.log('invalid');
        return false;
    }
    return true;

}

function validateThirdStep() {
    //code here for third step


}

//Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function readURL_imagen1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen1Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen2Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen3Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen4Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen5(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen5Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen6(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen6Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function readURL_imagen7(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen7Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen8(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen8Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function readURL_imagen9(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen9Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen10(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen10Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function readURL_imagen11(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen11Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL_imagen12(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen12Preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}



