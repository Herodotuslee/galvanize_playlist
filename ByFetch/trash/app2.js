const cleanBtn=document.querySelector('.cleanBtn');
const binBtn=document.querySelector('.binBtn');
const intro = document.querySelector('.intro');
const list = document.querySelector('.list');
const url='https://lit-fortress-6467.herokuapp.com/object'
const url2='https://lit-fortress-6467.herokuapp.com/post'
let postData;




const getApi=document.querySelector('.getApi');
const putAlbum=document.querySelector('.putAlbum');
const photo1=document.querySelector('#photo1');
const photo2=document.querySelector('#photo2');
const photo3=document.querySelector('#photo3');
let number1 =Math.floor((Math.random() * 5) );
let number2 =Math.floor((Math.random() * 5) );
let number3 =Math.floor((Math.random() * 5) );



fetch(url)
.then(function(req){
  req.json().then(function(data){

  photo1.src =`./images/${data.results[number1].cover_art}`;
  photo2.src =`./images/${data.results[number2].cover_art}`;
  photo3.src =`./images/${data.results[number3].cover_art}`;


  })
})
.catch(function(){
  alert("ERROR!")})







fetch(url)
.then(function(req){
  req.json().then((data)=>{
    // console.log('hi')
    function addTheName(){
      // console.log(this.id)
    postData =document.querySelector(".intro").innerHTML +=`${this.id}<br>`
  }

    for(let i=0;i<data.results.length;i++){
    let newImg = document.createElement('img')
      newImg.src ="images/"+data.results[i].cover_art
      newImg.style.width = '9vw';
      newImg.style.height = '9hw';
      newImg.style.margin = '10px';
      newImg.id=  data.results[i].artist+": "+ data.results[i].title
      // newImg.setAttribute('id', data.results[i].id)
      newImg.addEventListener('click', addTheName)
      list.appendChild(newImg)

      // let picUrl =`./images/${data.results[i].cover_art}`
      // let title = `${data.results[i].title}`
      // let artist = `${data.results[i].artist}`
      // let id = `${data.results[i].id}`
      // let newImg= `<img id=${id} class='box' src=${picUrl} alt="Smiley face" height="70" width="70">`;
      // newImg.addEventListener('click', addToMiddle)
      // console.log(newImg)
      // document.querySelector(".list").innerHTML +=newImg
    // document.querySelector(".intro").innerHTML +=`${title}:${artist}<br>`
    }


  });
}).catch(()=>{alert("ERROR!")})

cleanBtn.addEventListener("click", ()=>{
      document.querySelector(".intro").innerHTML=''
    });


// binBtn.addEventListener("click", function(){
//
//   fetch(url2, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   }).then(res => console.log(res.json()))
//   .catch(error => console.error('Error:', error))
//   .then(response => console.log('Success:', response));
//     })
//
// let submitButton = document.querySelector('.submitBin')
binBtn.addEventListener('click', function(){
  let httpRequest = new XMLHttpRequest()
  httpRequest.open('POST', url2, true);
  httpRequest.send(postData);
  httpRequest.onreadystatechange = function()
    {
        if (httpRequest.readyState == 4)
            if (httpRequest.status == 200)
            console.log(httpRequest)
    };

})


    // const box=document.querySelectorAll('.box');
    // box.addEventListener('click', function(){return console.log('hi')})

    //
    // const box=document.querySelectorAll('.box');
    // buttons.addEventListener('click', function(){return console.log('hi')})
    // buttons.addEventListener('click', function(){
    //  // event.target.innerHTML
    //  alert('his')
    // box.addEventListener("click", function(){})
    //
    //
    // var el = document.getElementById("outside");
    // box.innerHTML='hi'
    // box.addEventListener("click", () => { modifyText("four"); }, false);

        //
        // box.addEventListener("click", function(){
        //           // document.querySelector(".intro").innerHTML +=`yo`
        //                 })

        // })
      // })
