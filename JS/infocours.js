
$(document).ready(function () {
    // console.log($('.row').find('button'));
    $('.row').find('button').click(function (e) { 
        e.preventDefault();
    //     // $('p span').toggle()
        if ( $(this).text()===' Lire Plus'){
            
            $(this).html('<i class="fa-solid fa-minus"></i> Cacher')
            $('.row').find('span').removeClass('d-none');
            $('.row').find('span').addClass('show');
            $('.col-md-12').css('height','auto')
           
        } else if($(this).text()===' Cacher') {
            
            $(this).html('<i class="fa-solid fa-plus"></i> Lire Plus')
            $('.row').find('span').removeClass('show');
            $('.row').find('span').addClass('d-none');
            $('.col-md-12').css('height','auto')
        }

    });
   
});