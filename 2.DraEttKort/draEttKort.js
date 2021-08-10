const Btn = document.querySelector('#kortBtn');
const Output = document.querySelector('#showResult');



function drawCard(){
    
    /*Skriv din kod här*/
    Output.innerHTML='';
    
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(res => res.json())
    .then(data =>
    {
    /*Och här*/
    console.log(data.cards[0].image);
    console.log(data);
    
    let imgurl=data.cards[0].image;
    console.log(imgurl);

    let img=document.createElement('img');
    img.src=imgurl;
    img.setAttribute('class', 'imgclass');

   Output.appendChild(img);
   
    

    })
    .catch(err => console.log(err))
    }


Btn.addEventListener('click', drawCard);



