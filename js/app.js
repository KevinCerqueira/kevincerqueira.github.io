window.location.href = "http://kevincerqueira.com/";
$('a').click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
    return false;
});
// $(document).ready(function () {
//     Swal.fire({
//         title: '<strong>ATENÇÃO</strong>',
//         icon: 'warning',
//         html:
//           'Este site ainda está em fase de ' +
//           '<strong>construção</strong>! ' +
//           'Então é possível encontrar algumas '+
//           'coisas que ainda não estão 100% desenvolvidas.',
//         showCloseButton: false,
//         focusConfirm: false,
//         confirmButtonText:
//           '<i class="fa fa-thumbs-up"></i> Entendi!',
//         confirmButtonAriaLabel: ''
//       });
// });
