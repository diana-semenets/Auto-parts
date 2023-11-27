let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');



menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    //document.body.style.overflow = 'hidden';

   if (menuBtn.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
   }else {
        document.body.style.overflow = '';
   }
})

menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');  
        document.body.style.overflow = '';              
    }
});

let accordion = document.querySelector('.faq__card');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.accordion__title');

function toggleAccordion() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    } 
    // otherwise, remove the open class
    item.classList.remove('active');
  });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));