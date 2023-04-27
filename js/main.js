console.log("ciao");
//creo una costante per indicare il mio contenitore
const contentitore = document.getElementById("container");
//creo collegamento con il pulsante
const buttonPlay = document.getElementById("play");

//genero evento per il pulsante richiamando la funzione
buttonPlay.addEventListener("click", function(){

    GeneraCaselleNumerate(document.getElementById("livelloDifficolta").value);

})

//creo variabile di inizializzazione
var inizioGame = false;
//creo una funzione per generare le caselle con all'interno il numero
function GeneraCaselleNumerate (numeroDaGenerare){
    if(inizioGame === false){
        let numeroDiCelleTotali = document.getElementById("livelloDifficolta").value;
        let numeroDiCellePerLato = Math.ceil( Math.sqrt(numeroDiCelleTotali) );
        let dimensione = `calc(100% / ${numeroDiCellePerLato})`;
        for (let i = 1; i <= numeroDaGenerare; i++) {
            
            let box= createElement("div" ,"miniBox100" , i );
            box.style.width = dimensione;
            box.style.height = dimensione;
            
            contentitore.append(box);

            box.addEventListener("click", function() {
            console.log(i);
            this.classList.toggle("bgNuovo");
            });
        } 
        inizioGame=true;
    }else{
        console.log("il gioco è gia iniziato!");
    } 
}



//funzione di creazione elemento
function createElement(tagHtml, classe, contenuto) {
    
    //Creiamo un elemento
    const newBox = document.createElement(tagHtml);
    newBox.classList.add(classe);
    newBox.innerText = contenuto;

    return newBox;
}
