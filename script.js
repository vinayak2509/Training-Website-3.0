
const div=document.querySelector('.greet');
const text="Hello! Welcome to My Website!"

function textTypingEffect(element,text,i=0){
  element.textContent+=text[i];
  
  if(i===text.length-1){
    return;
  }
  setTimeout(()=> textTypingEffect(element,text,i+1),50)
}
textTypingEffect(div,text);





let light=document.querySelector('.light');
let img=document.querySelector('.dark-mode-img');
light.addEventListener("click", 
  function() {

    document.querySelector('.tp').classList.toggle('background-none');
    document.querySelector('.about').classList.toggle('background-none');
    document.querySelector('.skills').classList.toggle('background-none');
    document.querySelector('.skill-desc').classList.toggle('background-none');
    document.querySelector('.contact-me').classList.toggle('background-none');
  


    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    }


    if(img.src.includes('mode-light')){
      img.src="Images/moon-dark-theme.svg";
    } else{
      img.src="Images/mode-light.svg";
    }
  }
)



let submit=document.querySelector('.submit-btn')
submit.addEventListener("click", 
  function() {
    let Name=document.querySelector('.name').value;
    let msg=document.querySelector('.msg').value;
    if(Name!=''){
      document.querySelector('.name').classList.remove('is-invalid');
    }
    if(msg!=''){
      document.querySelector('.msg').classList.remove('is-invalid');
    }

    if(Name=='' && msg==''){
      document.querySelector('.name').classList.toggle('is-invalid');
      document.querySelector('.msg').classList.toggle('is-invalid');
    }else if(Name==''){
      document.querySelector('.name').classList.toggle('is-invalid');
    }else if(msg==''){
      document.querySelector('.msg').classList.toggle('is-invalid');
    }
    else{
      msg=`Hi my name is ${Name}. ${msg} `; 
      window.open(`mailto:vinayak2002590@gmail.com?subject=subject&body=${msg}`);

    }
  }
)