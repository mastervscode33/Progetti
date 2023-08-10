// Google Maps - API

// Ingredienti:
// Api key, pazienza, impegno e conoscenza
// L'api key si può ricavare dopo vari passaggi nel seguente sito:
// Open Link[CTRL + Click] https://console.cloud.google.com/apis/credentials?hl=it&project=maps-346519

// HTML
    // Creare un div con id = "map";
    // Inserire nell'Html questo script:
        /* <script 
            src=`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&v=${version}`
            defer
            ></script>
        */
        // API_KEY = api key personale segreta
        // callback = impostata alla funzione initMap()
        // version = versione (weekly, beta, alpha, etc.)
        /* 
            attributo script DEFER = 
            L'attributo `defer` fa in modo che il callback venga eseguito dopo l'intero codice HTML
            documento è stato analizzato. Per usi non bloccanti, evitando condizioni di gara,
            e un comportamento coerente tra i browser, prendere in considerazione il caricamento utilizzando Promises.
        */

        // possibili parametri dello script:
        /*
            https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY
            &callback=NOME_FUNZIONE
            &v=VERSIONE
            &libraries="LIBRERIE"
            &language="LINGUA"
            &region="REGIONE"
            &solution_channel="IDENTIFICATORE_DI_SOLUZIONI"
            &auth_referrer_policy="AUTH_REFERRER_POLICY"
        */

// -----------------------------------------------------------------------
    // Una volta passato lo script all'Html, il file Js collegato al file Html
    // (*subito dopo lo script di google maps API)
    // avrà in risposta tutte gli oggetti (metodi e proprietà) di Google Maps
// -----------------------------------------------------------------------

// JAVASCRIPT
    // Creare una funzione InitMap nel file JS:
    // (Ricordo che può avere qualsiasi nome, basta che nello script poi venga inserito il nome corretto della funzione)
    async function initMap(){
    // MAPPA NORMALE
        let map;// Dichiaro la variabile map
        let mapDiv = document.getElementById("map");
        // richiedo il modulo maps da google tramite la funzione asincrona 
            const { Map } = await google.maps.importLibrary("maps");
        // Se vogliamo creare una mappa Google, l'oggetto Map richiede 2 parametri:
            // - in quale oggetto HTML si vuole mostrare l'immagine
            // - proprietà della mappa
        // ESEMPIO MAPPA:
        map = new Map(mapDiv,{
            center: { lat:43.850, lng: 11.100 },// Cordinate del punto in cui voglio focalizzare la Mappa
            zoom: 15,// Zoom della mappa 
            mapTypeId:"satellite",// Modalità di Visualizzazione della mappa ( roadmap, satellite, hybrid, terrain )
            disableDefaultUI: false,// Disabilitare la User Interface di Google messa di Default 
            scaleControl: true,// Scala miglia o metrica
            mapTypeControl: true,// Abilitare la modalità di scelta della Mappa
            // mapTypeControlOptions: {
            //     style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            //     mapTypeIds: ["roadmap", "terrain"],
            //   },// Menu drop per il rilievo della Mappa
        // SE HAI NOTATO PER LO STILE DEGLI OGGETTI CHE COMANDANO LA MAPPA BASTA AGGIUNGERE
        // IL NOME DELLA FUNZIONE + OPTIONS
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_CENTER,
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER,
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP,
            },
            gestureHandling: "cooperative",// Usato per la gestione del pizzico dei 2 diti da mobile
            // è semplicissimo una volta dopo che hai iniziato a capire la sintassi
        });
    // MAPPA CON RESTRIZIONI
        /* 
            const COORDS = {
                north: -34.36,
                south: -47.35,
                west: 166.28,
                east: -175.81
            };
            const CITTA = { lat: -37.06, lng: 174.58 }
                map = new Map(mapDiv,{
                    center: CITTA,
                    restriction: {
                        latLngBounds: COORDS,
                        strictBounds: false
                    },
                    zoom: 7
                })
        */
    }
    initMap();