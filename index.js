const button = document.querySelector(".btn");
const image = document.querySelector('.img');


const URL = 'http://aws.random.cat/meow';

async function fetchHandler(){
    try{
        let res = await fetch(URL)  
        let data = await res.json();
        image.src = data.file;
    }catch(error){
        console.log(error);
    }
}

button.addEventListener('click', fetchHandler())