let xhr = new XMLHttpRequest;
let btn = document.querySelector("button");
let div = document.querySelector("#currentdatetime");
btn.addEventListener("click", ()=>{
    xhr.onreadystatechange=processRequest;
    xhr.open("GET","https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata",true);
    xhr.send(null);
});
const processRequest = function() {
    if(xhr.readyState===4){
        if(xhr.status===200){
            let Json = JSON.parse(xhr.responseText);
            let str = Json.dateTime;
            let dt = new Date(str);
            let ans = dt.toDateString()+","+dt.toTimeString();
            div.innerText=ans;

        }
        else {
			div.innerHTML =
				"Sorry! Cannot fetch the Date<br>Error Code:" + xhr.status;
		}
    }
}
