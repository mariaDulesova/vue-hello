// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.


var app = new Vue({
    el: "#app",
    data: {
        message: "Welcome to Vue!", 
        image: "https://www.travelfar.it/wp-content/uploads/pi%C3%B9-belle-spiagge-della-Corsica-Palombaggia.jpg"
    },

    methods: {
        changeImage: function () {
            if (this.image == "https://www.travelfar.it/wp-content/uploads/pi%C3%B9-belle-spiagge-della-Corsica-Palombaggia.jpg") {
                this.image = "https://siviaggia.it/wp-content/uploads/sites/2/2020/09/milano-bosco-verticale-garibaldi-isola-design.jpg"
            } else {
                this.image ="https://www.travelfar.it/wp-content/uploads/pi%C3%B9-belle-spiagge-della-Corsica-Palombaggia.jpg"
            }
        }
    }
    
})



