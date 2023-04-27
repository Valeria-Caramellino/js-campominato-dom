//console.log("ciao");
//creo una costante per indicare il mio contenitore
const contentitore = document.getElementById("container");
//creo collegamento con il pulsante
const buttonPlay = document.getElementById("play");
//tiengo il punteggio
let punti =0;
//dichiaro numero di celle totali riportando il value
let numeroDiCelleTotali = document.getElementById("livelloDifficolta").value;
// genera l'array di bombe
const bombArray = [];
 while (bombArray.length < 16) {
     let bombNum = Math.floor(Math.random() * numeroDiCelleTotali) + 1;
     if (bombArray.includes(bombNum) == false) {
     bombArray.push(bombNum);
     }
 }
 console.log(bombArray);

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
            
            //creo elemento div tramite funzione
            const box= createElement("div" ,"miniBox100" , i );
            box.style.width = dimensione;
            box.style.height = dimensione;
            //appendo l'elemento
            contentitore.append(box);

            //al click del piccolo contenitore div precedentemente creato
            box.addEventListener("click", function() {    
            //dichiaro la bomba falsa per poi farla diventare vera solo se le due variabili sono uguali
               let Bomba= false;
                for(let c=0; c<= bombArray.length; c++){
                    //costante che mi dichiara bombArray precedentemente creato
                    const bombs = bombArray[c];
                    //uso la costante dichiarata per confrontarla con il contenuto del mio elemento
                    if(bombs == i){
                        //dichiaro bomba attiva
                        Bomba=true;
                    }
                }
                //se bomba è attiva
                if(Bomba){
                    //genero bgBomba x cambiarli colore
                    this.classList.toggle("bgBomba");
                    console.log("i numeri sono uguali",i);
                    //Genero testo di scritta in html 
                    document.getElementById("TestoSconfitta").innerText= `Hai perso sei caduto su una bomba! Numero di mosse giuste ${punti}`;
                }else{//altrimenti vado avanti
                    //ogni casella che schiaccio diventa di questo colore
                    this.classList.toggle("bgNuovo");
                    //metto console.log per sicurezza
                    console.log("i numeri sono diversi", i);
                    //aumento i punti ad ogni click
                    punti += 1;
                    console.log(punti);
                }
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

