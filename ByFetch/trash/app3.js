const getApi=document.querySelector('.getApi');
const putAlbum=document.querySelector('.putAlbum');
const url='https://lit-fortress-6467.herokuapp.com/object'
const photo1=document.querySelector('#photo1');
const photo2=document.querySelector('#photo2');
const photo3=document.querySelector('#photo3');
let number1 =Math.floor((Math.random() * 5) );
let number2 =Math.floor((Math.random() * 5) );
let number3 =Math.floor((Math.random() * 5) );



fetch(url)
.then(function(req){
  req.json().then(function(data){
    console.log(data.results[0].cover_art)


  photo1.src =`./images/${data.results[number1].cover_art}`;
  photo2.src =`./images/${data.results[number2].cover_art}`;
  photo3.src =`./images/${data.results[number3].cover_art}`;


  })
})
.catch(function(){
  alert("ERROR!")})
