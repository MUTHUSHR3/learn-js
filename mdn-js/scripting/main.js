var heading=document.querySelector("h1");

/* Using Local storage*/
if(localStorage.getItem("player")){
	heading.textContent=localStorage.getItem("player");	
	console.log('From local storage');
}
else{
	heading.textContent="Roger Federer!!!";
	localStorage.setItem("player","Roger Federer!!!");
	console.log('Static assigning...');
}