// $(document).ready(function () {
//     $(".nav-link").hover(
//       function () {
//         $("#testin").addClass("red");
//       },
//     );
//   });

// document.getElementById("select").addEventListener("mouseover", function() {
//     document.getElementById("testin").style.color = "green";
//             // document.getElementById("testin").addClass("red");

// });
    
// document.getElementById("select").addEventListener("mouseout", function() {
//     document.getElementById("testin").style.color = "red";
//         // document.getElementById("testin").addClass('red');

// });

// element.classList.add("mystyle");

$(document).ready(function() {   
    
    // change element
    $('#selected, .nav-link').hover(function(){     
        $('#testin').addClass('red' , 160, "swing");   
        $('#select').addClass('blur', 160, "swing");   

        // $('#testin').addClass('red', 500, "easeInQuad");    
 
    },     
    function(){    
        $('#testin').removeClass('red');  
        $('#select').removeClass('blur');   

   
    });

    $('#selected, .nav-link').hover(function(){     
        $('body').addClass('black');    
    },     
    function(){    
        $('body').removeClass('black');  
   
    });

// reveal element
  $('#testin').hover(function(){     
        $('.pop').addClass('reveal', 110, "swing");   

    },     
    function(){    
        $('.pop').removeClass('reveal');  

    });

    // https://codepen.io/zenadesign/pen/bevJRP

    $(function() {
        $('li').mouseover(function(){
          $(this).addClass('active');
        }); 
        $('li').mouseout(function(){
          $(this).removeClass('active');
        }); 
      });
      



});   



// $(function() {
//     $('.press').mouseenter(function() {
//       $('#grid-header').addClass("blue");
//     }).mouseleave(function () {
//       $('#grid-header').removeClass("blue");
//     });
//   });

// var timeout = null;

// function addClass() {
//   $('.issue').addClass('recently-updated');
//   if (timeout) {
//     clearTimeout(timeout);
//     timeout = null;
//   }
//   timeout = setTimeout(function () {
//     $('.issue').removeClass('recently-updated');
//   }, 1000);
// }

// $("#selected").mouseenter(function () {
//     $("#testin").addClass('blue')
// }).mouseleave(function () {
//     $("#testin").addClass('red')
// });

// $('#selected').mouseenter(function () {
//     $('#testin').addClass('blue')
// }).mouseleave(function () {
//     $('#testin').addClass('blue')
// });

// const selected = document.getElementById('selected');

// selected.addEventListener('mouseenter', (e) => {
//     // selected.style.border = '5px dotted orange';
//     selected.addClass('blue');

// });

// selected.addEventListener('mouseleave', (e) => {
//     selected.style.border = '1px solid #333';
// });

// https://codepen.io/daveredfern/pen/zBGBJV
$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 4);
   
    
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        // $body.removeClass(function (index, css) {
        //   return (css.match (/(^|\s)color-\S+/g) || []).join(' '); 
        // }, 10, "linear");
         
        $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' '); 
          });

        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });  
    
    
    
  }).scroll();