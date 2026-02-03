let timezone = document.getElementById("timezone");
let btn = document.querySelector("button");
let dateTimeDiv = document.getElementById("currentdatetime");

let xhr = new XMLHttpRequest();
btn.addEventListener("click", () => {
  xhr.onreadystatechange = processResponse;
  xhr.open(
    "GET",
    "https://api.timezonedb.com/v2.1/get-time-zone?key=M6PTIVZNC4MF&format=json&by=zone&zone=" +
      timezone.value,
    true,
  );
  xhr.send(null);
});

let processResponse = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let responseobj = JSON.parse(xhr.responseText);
      let dateTimeStr = responseobj.formatted;
      let today = new Date(dateTimeStr);
      let str = today.toDateString() + ", " + today.toLocaleTimeString();
      dateTimeDiv.innerText = str;
    } else {
      dateTimeDiv.innerHTML =
        "Sorry! Cannot fetch the Date<br>Error Code:" + xhr.status;
    }
  }
};
