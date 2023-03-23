const nbres = document.querySelectorAll('.container-fluid .nombre')
// let nbres = $('.container-fluid').find('.nombre')
$(document).ready(function () {
  $('.navbar-nav li a').click(function (){
  
      
    var testClass=$(this).hasClass('purple')

    if (testClass===true){
     return false
    } else {
        $(this).parent().siblings().children().removeClass('purple')
          $(this).addClass('purple') 
    }

  
  });

  

  $('.modal-body').find('button').click(function (e) { 
    // e.preventDefault();
    $('.modal-body').find('input').select()
    document.excecCommand('copy')
    // console.log($('.modal-body').find('input').select().val());
 });

 
  // $(window).load(function () { 
  //   e.preventDefault();
  //   // let loupe= $()
        
  //       $('nav input').html('<i class="fa-solid fa-magnifying-glass"></i>')
  //   // setInterval(()=>{
  //   //   // $('.nombre').text(`${}`)
  //   // },1000)
    
  // })
  
  $('form').submit(function (e) { 
    e.preventDefault();
    if($('form').find('input').val()==''){
      $('form input').addClass('is-invalid')
      $('form input').css('borderColor','blue')
      
    }
    // console.log($('form').find('input').val());
    // if($('form input').val()=="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$") 
    else {
     
        
      $('div .alert').removeClass('hidden')
      $('div .alert').addClass('show')
      $('.alert span').text(`${$('form input').val()}`)
      $('form input').removeClass('is-invalid')
      
        
    }
    
    $('form input').val('')
  })
  $('form input').removeClass('is-invalid')
     
       
     

  
  sum=0
  $('.card-body').find('button').click(function (e) { 
    // e.preventDefault();
    if ($(this).text()===' Add To Card'){
      sum = sum+1
      $(this).html('<i class="fa-solid fa-cart-shopping"></i> Remove To Card')
       
    }else if($(this).text()===' Remove To Card') {
      sum=sum-1
      $(this).html('<i class="fa-solid fa-cart-shopping"></i> Add To Card')
    }
    $('.collapse').find('span').text(`${sum}`)
  });

  $('.card-img-overlay').find('.btn-outline-warning').mouseenter(function () { 
    $('.btn-outline-warning .fa-arrow-right').addClass('fa-2x').animate({'right':'5%'},2000)
    $('.btn-outline-warning').css('width','auto')
  })
  
  $('.card-img-overlay').find('.btn-outline-warning').mouseleave(function () { 
    $('.btn-outline-warning .fa-arrow-right').removeClass('fa-2x')
  })
    

});


function aleatoire(el) {
// // 	// el.text(`${Math.floor(Math.random()*el.data('value'))}`)

	el.innerText = `${Math.floor(Math.random()*el.dataset.value)}`
}

$(window).on('load',function(e){
  // let val1 = $('section').find('.nombre').eq(0).text()
  
 
  // $('section').children().forEach(item => {
	  setInterval(()=>{
      // for (let i = 0; i <=val1; i++) {
        // console.log(i);
      //  console.log($('.container-fluid').find('.nombre').eq(0).text(`${i}`));
        // $('section').find('.nombre').eq(0).text(`${i}`)
        nbres.forEach(nb => {
          // aleatoire(nb);
          const valeur = [aleatoire(nb)]
          
          // console.log(valeur);
      })
    }, 1000)
    // valeur.sort((a,b)=> b-a)
   })
		// 
      
    //   // do {
    //     
    //   // } while (aleatoire(nb).innerText()===nbres.dataset.value)
    
        
    // })


  

  



   

  // setInterval(()=>{
	// 	nbres.forEach(nb =>
  //     if(nb.innerText()==aleatoire(nb)) {
  //       break
  //     } else {
  //       return aleatoire(nb).sort
  //     }
  //   )
      


// })
    // $('.container-fluid').find('.nombre').text(`${Math.floor(Math.random()*$('.nombre').text())}`)
   
    //   item.children().eq(2).text(`${Math.floor(Math.random()*$(this).text())}`)
    // });
    // $.each($(this).children(), function (index, item) { 
      
    //  if (item.children().eq(2)==item.children().eq(2).tet()) {
      
    //  } else {
      
    //  }
   //  });
    // if ($('.container-fluid').find('.nombre').text()==data('value')) {
    //   e.Stoppro
    // }
    
       $('.container-fluid').find('.nombre').text().remove
      // console.log(Math.floor(Math.random()*$('.nombre').text()));
  
 
    // console.log(Math.random());
  // console.log($('section').children().$.each($(this).children(), function (index, item) { 
     
  // });(child => {
  //   child.eq(2) .text());
  // })
  

  var nombre=document.querySelector('')

  nombre.addEventListener('click',()=>{

  })
