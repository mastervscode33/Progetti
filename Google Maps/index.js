// FILE INIZILMENTO USATO
let map;
async function initMap() {
    let { Map } = await google.maps.importLibrary("maps");
    let coord = { lat:43.85917888012009, lng: 11.100172777555398 }
    let mapDiv = document.getElementById("map")
    map = new Map(mapDiv, {
        center: coord,
        zoom: 15,
        mapTypeId:"satellite"
    });
    let marker = new google.maps.Marker({map,position:coord});
    let infowindow = new google.maps.InfoWindow({
        content: "<p>Marker Location:" + marker.getPosition() + "</p>",
      });
    
      google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
        map.setZoom(21)
      });
    //   Aggiungere un marcatore onclick
    //   map.addListener("click",function(e){
    //     addMarker(e.latLng, map);
    //   })
    //   function addMarker(latLng,map){
    //     new google.maps.Marker({
    //         position:latLng,
    //         map:map
    //     });
    //     map.panTo(latLng);
    //   }
      map.addListener("click",function(point){
        infowindow.close();
        infowindow = new google.maps.InfoWindow({
            position:point.latLng
        });
        infowindow.setContent(
            JSON.stringify(point.latLng.toJSON(), null, 2)
        );
        infowindow.open(map)
      })

    //   DOM Event
    // map.addDomListener(document.getElementById("map"), evento, arrow function)
    google.maps.event.addDomListener(mapDiv,"click",function(){
        alert("NICCO BUHO")
    })

}

initMap();

  let key_api = "AIzaSyAGuTRqwzCbFcILhQtPBMoLqTUrzK8Lsws";