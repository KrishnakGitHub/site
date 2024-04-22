 // Get the current URL path
 var currentUrl = window.location.href;
  
 // Get all the links in the navbar
 var links = document.getElementsByTagName('a');

 // Loop through the links
 for (var i = 0; i < links.length; i++) {
   // If the link's href matches the current URL, add the active class
   if (links[i].href === currentUrl) {
     links[i].classList.add('active');
   }
 }