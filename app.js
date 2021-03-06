fetch('https://api.kanye.rest/')
.then(response=> response.json())
// .then(data => console.log(data.quote)) //console.logs quote from kanye
.then(data => document.getElementById("quote").innerHTML = "\"" + data.quote + ".\"");


const img = document.getElementById("image")  //dom selects image element and saves it to variable

const imageSelect = Math.floor(Math.random() * 30);

fetch('https://picsum.photos/v2/list')
.then(response=> response.json())
.then(data => img.setAttribute("src", data[imageSelect].download_url)) //sets image attribute to data[0].download_url
