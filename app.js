fetch('http://api.kanye.rest/')
.then(response=> response.json())
.then(data => console.log(data))