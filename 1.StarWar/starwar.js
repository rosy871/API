const starwarBtn = document.querySelector('#starwarBtn');
const starOutput = document.querySelector('#showResult');

const kname=document.querySelector('#karakterName');


function getStarWarKarakter(){
    let people=[];
    /*Skriv din kod här*/
    let name=kname.value;
    fetch(`https://www.swapi.tech/api/people/?name=${name}`)
    .then(res => res.json())
    .then(data =>
    {
    /*Och här*/
    console.log(data.result[0].properties.name);
   
    let s = `Name: ${data.result[0].properties.name},
Height : ${data.result[0].properties.height},
Mass: ${data.result[0].properties.mass},
Gender: ${data.result[0].properties.gender},
Hair Color:  ${data.result[0].properties.hair_color}
Eye Color:${data.result[0].properties.eye_color}
Skin Color:${data.result[0].properties.skin_color}  
    `;
    console.log(s);
    starOutput.innerHTML=s;

    })
    .catch(err => console.log(err))
    }


starwarBtn.addEventListener('click', getStarWarKarakter);



