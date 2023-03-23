

$(document).ready(function () {
    // var texte=JQuery(select option:selected).text()
    $('div select').change(function (e) { 
        e.preventDefault();


        // if($('div select').val()==='1') {
        //     $('.container').find('.row').eq(1).load("tout.html")
        // }
        
    
        if ($('div select').val()==='1') {
            $('.container').find('.row').eq(1).load("infographie.html")
            $('.container').find('.row').eq(2).remove()
            $('.container').find('.row').eq(3).remove()
            // $('.container').eq(1).find('section').remove()
            $('.container').find('.row').eq(1).remove()
            
        }
        
        else if($('div select').val()==='2') {
            $('.container').find('.row').eq(1).load("reseau.html")
             $('.container').find('.row').eq(2).remove()
             $('.container').find('.row').eq(3).remove()
        }
        
        else if($('div select').val()==='3') {
            $('.container').find('.row').eq(1).load("compta.html")
             $('.container').find('.row').eq(2).remove()
             $('.container').find('.row').eq(3).remove()
        }

        else if ($('div select').val()==='4') {
            
            $('.container').find('.row').eq(1).load("prog.html")
            $('.container').find('.row').eq(2).remove()
            $('.container').find('.row').eq(3).remove()
        }
        
        else{
            $('.container').find('.row').eq(1).load("tout.html")
        }
        console.log($('div select').val());
        
    });
    $('.container').find('.row').eq(1).css('height','auto')
});