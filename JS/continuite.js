$(document).ready(function () {
    $('div .accordion-item').click(function (e) { 
        e.preventDefault();
        // $('div iframe').animate({height:'30%'}).slideDown();(1000);
        $('div iframe').css('height','auto').togg
    });
    // $('div .accordion-item').mouseleave(function (e) { 
    //     e.preventDefault();
    //     // $('div iframe').animate({height:'30%'}).slideDown();(1000);
    //     $('div iframe').css('height','450px')
    // });
    // $('div iframe').css('height',)
    
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
        })
    }
    
    $('.modal-body').find('p').click(function (e) { 
        // console.log($(this).data('response'));
        e.preventDefault();
        if ($(this).data('response')=='true') {
            // $('.toast-container').removeclass('d-none').addClass('show');
            $('.modal-body').find('p').eq(0).attr('id', liveToastBtn)
            $('.toast .toast-body').text('Mes felecitations')
        } 
        else if($(this).data('response')=='false'){
            setTimeout(()=>{
                $('.modal-body').find('p').eq(1).attr('id',liveToastBtn)
                $('.modal-body').find('p').eq(2).attr('id',liveToastBtn)
                // $('.toast-container').removeclass('d-none').addClass('show');
                $('.toast-body').text('Il vous reste un essai')
            },10000)
        }
        
        // console.log($('.modal-body').find('p').eq(0).attr('id'));
        // console.log($('.toast .toast-body').text());
    });
    
});
