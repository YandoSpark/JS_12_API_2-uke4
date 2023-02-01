// const url = "https://api.openweathermap.org/data/2.5/weather?q=lier,no&units=metric&lang=no&appid=959eca3981034fd0148c7ce5e2ca7408"

var btn = document.querySelector("#btn").addEventListener("click", function () {
    const input = document.querySelector("#input").value
  const city = input;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},no&units=metric&lang=no&appid=959eca3981034fd0148c7ce5e2ca7408`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#location").innerHTML = data.name;
        document.querySelector(".varme").innerHTML = data.main.temp;
        document.querySelector(".description").innerHTML = data.weather[0].description;
        var res = (data.main.temp_max + " / " + data.main.temp_min);
        document.querySelector(".minMax").innerHTML = res
    
    });

  

});
