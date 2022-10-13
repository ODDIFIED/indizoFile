document.addEventListener('DOMContentLoaded',function(event){
  
    var dataText = ["Offline task🏠" ,"Copywriting 🖊️" ,"Laundry", "Repair 🔧", "Online task💻", "Translations 📚", "Cleaning 🧹" ," Homework 📝"," Boring tasks! 😄 ", "Assembly 🔨","Research 🔍","Web design 💻", "Photography 📷 "];
    
   
    function typeWriter(text, i, fnCallback) {
     
      if (i < (text.length)) {
      
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
     
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 100);
      }
    }
    
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 2000);
       }

      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
     
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });