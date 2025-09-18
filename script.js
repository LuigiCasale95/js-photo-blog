/* selezione elementi di Output*/
const rowOutput = document.querySelector(".row")
const imgOverlay = document.getElementById('img-overlay')
const button = document.querySelector(".bottone")
const main = document.querySelector(".main")
const boxHoverlay = document.querySelector('.boxHoverlay');

/* selezione  variabili di endpoint*/
const apiRef = "https://lanciweb.github.io/demo/api/pictures/";

 /* chiamata ajax all'api */
 axios.get(apiRef)
    .then((response) => {
        console.log(response);
        /* elaborazione dati */
        const elementi = response.data;
        console.log(elementi);

        /*  ciclo per prendere ogni elemento necessario */
        elementi.forEach(elemento => {
//            console.log(elemento);

            const cardElement = document.createElement('div');
            cardElement.classList.add('cardContainer','position-relative','m-4','col-sm-12','col-md-6','col-lg-4');

            const accumuloCard = `
            <a class="openHoverlay" href="#">
                <img class="imgPin position-absolute start-50 translate-middle" src="img/pin.svg" alt="crok">

                <div class="boxImg">
                    <img class="imgCard" src="${elemento.url}" alt="${elemento.url}">
                </div>

                <section class="p-2">
                    <span class="dataCard">${elemento.date}</span>
                    <h2 class="titoloCard">${elemento.title}</h2>
                </section>
            </a>
            `

            cardElement.innerHTML = accumuloCard;
            console.log(cardElement);
            cardElement.addEventListener("click", 
            function() {
                console.log('ciao');
                boxHoverlay.classList.remove("d-none")
                boxHoverlay.classList.add("d-flex")
                main.classList.add("sfocatura")

                imgOverlay.src = elemento.url;

            })
            rowOutput.appendChild(cardElement);

        });

        
        button.addEventListener("click",
            function() {
                boxHoverlay.classList.remove("d-flex")
                boxHoverlay.classList.add("d-none")
                main.classList.remove("sfocatura")
            }
        )

    })
/*     .catch(error => {
        console.error(error)
    }) */
        /* VARIABILE */
/*         const openHoverlay = document.querySelector(".openHoverlay")

            openHoverlay.addEventListener("click", 
                function() {
                    hoverlay.classList.remove(".d-none")
                }
            ) */