fetch('http://api.kanye.rest/')
.then(response=> response.json())
// .then(data => console.log(data.quote))
.then(data => document.getElementById("quote").innerHTML = "\"" + data.quote + ".\"")

// document.getElementById("quote").innerHTML = data; //data is not defined at this point