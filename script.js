searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
}	
	
	
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
	loginForm.classList.toggle('active');
}












window.onscroll = () =>{
	searchForm.classList.remove('active');
	
	if(window.scrollY >80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}	
	
}	


	

document.querySelector('#close-login-btn').onclick =() =>{
	loginForm.classList.remove('active');
}









window.onload =()=>{
	if(window.scrollY >80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}	
	
}	
  
 

 