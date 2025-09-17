/* selezione elementi di Output*/
const data = document.querySelector(".dataCard")
const titolo = document.querySelector(".dataCard")
const img = document.querySelector(".imgCard")
const rowOutput = document.querySelector(".row")

/* selezione  variabili di endpoint*/
const apiRef = "https://lanciweb.github.io/demo/api/pictures/";

 /* chiamata ajax all'api */
 axios.get(apiRef)
    .then((response) => {
        console.log(response);
        /* elaborazione dati */
        const elementi = response.data;
        console.log(elementi);

        /* Var di accumulo vuota */
        let accumuloCard = ""
        /*  ciclo per prendere ogni elemento necessario */
        elementi.forEach(elemento => {
//            console.log(elemento);
            accumuloCard += `
            <div class="cardContainer position-relative m-4 col-sm-12 col-md-6 col-lg-4">
                    <img class="imgPin position-absolute start-50 translate-middle" src="img/pin.svg" alt="crok">

                    <div class="boxImg">
                        <img class="imgCard" src="${elemento.url}" alt="${elemento.url}">
                    </div>

                    <section class="p-2">
                        <span class="dataCard">${elemento.date}</span>
                        <h2 class="titoloCard">${elemento.title}</h2>
                    </section>
                </div>
            `
          rowOutput.innerHTML = accumuloCard
        });
        
        
    }) 
    .catch(error => {
        /* in caso di errore*/
        console.error(error)
    })
    