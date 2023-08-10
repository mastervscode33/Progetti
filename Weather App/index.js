// Chiave della API
    let api_key = "";

let form_weather = document.getElementById("form_weather");
let citta_input = document.getElementById("citta");
form_weather.addEventListener("submit", ()=> weather(citta_input.value));
let response_div = document.querySelector(".response");
// Fetch della API
function weather(citta){
    let api_call = `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${api_key}&units=metric`;// parametro units = metric perchè l'API lo riconosce gradi Celsius
    // per Fahrenheit units = imperial
    // per Kelvin è di default quindi non di aggiunge il parametro units
    fetch(api_call)
        .then(res => {
            if(!res.ok){
                // Se la risposta da parte dell'Api del Weather non è OK
                throw new Error("Errore nella richiesta: "+ res.status);
            }
            return res.json();// qui si crea la Promessa
        })
        // Se la promessa è mantenuto(=> se i dati ci sono) allora passa al then successivo
        .then(data => {
            // qui la promessa del RETURN RES.JSON() è la variabile data
            let tempo_string = data.weather[0].main.toLowerCase();
            let citta = data.name;
            let lat_ = data.coord.lat;
            let lon_ = data.coord.lon;
            let umidita = data.main.humidity + "%";
            let coord_ = ["Lat: "+lat_+"° "," Lon: "+lon_+"°"];
            let temperatura = data.main.temp + "°";
            response_div.style.display = "flex"
            document.querySelector("#error").innerHTML="";
            response_div.querySelector("#citta_display").innerHTML=citta;
            response_div.querySelector("#coordinate").innerHTML=coord_
            var img_src;
            switch(tempo_string){
                    case "clouds":
                        img_src = "clouds"
                    break;
                    case "rain":
                        img_src = "rain"
                    break;
                    case "mist":
                        img_src = "mist"
                    break;
                    case "snow":
                        img_src = "snow"
                    break;
                    case "clear":
                        img_src = "clear"
                    break;
                    default:
                        img_src = "404";
                        break;
            }
            response_div.querySelector("#weather").src="./img/"+img_src+".png";
            response_div.querySelector("#gradi").innerHTML = temperatura
            response_div.querySelector("#umidita").innerHTML = umidita

        })
        .catch(error => {
            response_div.style.display = "none"
            document.querySelector("#error").innerHTML="Città non trovata";

        })
}
document.querySelectorAll("img").forEach((img) => {
    img.draggable=false
} )
