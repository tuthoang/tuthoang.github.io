var aboutPos = $('#about').offset().top;
var proPos = $('#projects').offset().top;
var contactPos = $('#contact').offset().top;

  // This is a functions that scrolls to #{blah}link
function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

$("nav > div> > ul > li > a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll(this.id);           
});
