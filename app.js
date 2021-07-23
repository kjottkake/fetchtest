fetch('http://api.kanye.rest/')
.then(response=> response.json())
// .then(data => console.log(data.quote))
.then(data => document.getElementById("quote").innerHTML = "\"" + data.quote + ".\"");

// document.getElementById("quote").innerHTML = data; //data is not defined at this point

//doesn't work at the moment
const img = document.getElementById("image")

// img.setAttribute("src", )

// let imageData = []

fetch('https://picsum.photos/v2/list')
.then(response=> response.json())
// .then(data => console.log(data[0].download_url))
.then(data => img.setAttribute("src", data[0].download_url))
// .then(data => imageData = data)

// console.log(imageData)
// .then(data => img.setAttribute("src", ""+data[0].url+""));

