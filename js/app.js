$('a').click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
    return false;
});
$(document).ready(function () {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    let idade = ano - 2000;
    if(mes <= 3){
        if(dia <= 24){
            let idade = ano - 2001;
        }
    }
    $("#subtitulo-info").text("Brasileiro, " + idade + " anos. Bahia, Brasil.");
    // Swal.fire({
    //     title: '<strong>ATENÇÃO</strong>',
    //     icon: 'warning',
    //     html:
    //       'Este site ainda está em fase de ' +
    //       '<strong>construção</strong>! ' +
    //       'Então é possível encontrar algumas '+
    //       'coisas que ainda não estão 100% desenvolvidas.',
    //     showCloseButton: false,
    //     focusConfirm: false,
    //     confirmButtonText:
    //       '<i class="fa fa-thumbs-up"></i> Entendi!',
    //     confirmButtonAriaLabel: ''
    //   });
});