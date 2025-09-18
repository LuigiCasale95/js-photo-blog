/* selezione elementi di Output*/
const rowOutput = document.querySelector(".row")
const hoverlay = document.querySelector(".boxHoverlay")
const hoverlayImg = document.querySelector(".hoverlayImg")
const button = document.querySelector(".bottone")

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
            <a class="openCard " href="">
                    <img class="imgPin position-absolute start-50 translate-middle" src="img/pin.svg" alt="crok">

                    <div class="boxImg">
                        <img class="imgCard" src="${elemento.url}" alt="${elemento.url}">
                    </div>

                    <section class="p-2">
                        <span class="dataCard">${elemento.date}</span>
                        <h2 class="titoloCard">${elemento.title}</h2>
                    </section>
            </a>
                </div>
            `
          rowOutput.innerHTML = accumuloCard
        });

        /* Var di accumulo vuota */
         let accumuloHoverlayImg = ""

         /* Var per selezione card */


        /*  ciclo per prendere ogni elemento necessario */
        elementi.forEach(elemento => {
//            console.log(elemento);

          accumuloHoverlayImg += `<img class="imgCard" src="${elemento.url}" alt="${elemento.url}">`
          hoverlayImg.innerHTML = accumuloHoverlayImg

        });

        button.addEventListener("click",
            function() {
                hoverlay.classList.add("d-none")
            }
        )
        const openHoverlay = document.querySelectorAll(".openCard")

        openHoverlay.addEventListener("click", 
            function() {
                hoverlay.classList.remove(".d-none")
            }
        )

    })
/*     .catch(error => {
        console.error(error)
    }) */
