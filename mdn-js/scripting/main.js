var heading=document.querySelector("h1");
heading.textContent="Roger Federer";

/* Adding elements dynamically */
var spanElement=document.createElement('span');
spanElement.textContent='Dynamic span...';
spanElement.setAttribute('class','span-text');
document.querySelector('body').appendChild(spanElement);

/* Using Local storage */
if(localStorage.getItem("player")){
	heading.textContent=localStorage.getItem("player");	
	console.log('From local storage...');
}
else{
	heading.textContent="Roger Federer!!!";
	localStorage.setItem("player","Roger Federer!!!");
	console.log('Static assigning...');
}
(function(){
  var a = b = 3;
  //var c=55;
})();

var test=function(){
	var c=55;
};
test();
//console.log("c defined? " + c);
if(true){
	var d=55;
}
console.log("d defined? " + d);


for(let i=0;i<5;i++){
	setTimeout(function(){
      alert(""+i);
	},2000);   
}

console.log(""+parseInt("dfd"));