let setUp = document.querySelector("#joke-setup");
let punchLine = document.querySelector("#joke-punchline");
let btn = document.querySelector("#get-joke-btn");
let xhr = new XMLHttpRequest;
btn.addEventListener("click",()=>{
    xhr.onreadystatechange=processRequest;
    xhr.open("GET","https://official-joke-api.appspot.com/jokes/programming/random",true);
    xhr.send(null);
});

const processRequest = ()=>{
    if(xhr.readyState===4){
        if(xhr.status===200){
            let jokeArr=JSON.parse(xhr.responseText);
            let jokeObj = jokeArr[0];
            setUp.innerText=jokeObj.setup;
            punchLine.innerText=jokeObj.punchline;
        }else{
            document.write("Sorry! Data is not Fectched");
        }
    }
};