$(document).ready(function() {
     $(".but").click(function() {
       $(".divsh").toggle();
       $(".divhid").toggle();
     });
   });
   /* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
