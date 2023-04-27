console.log("ciao");
//creo una costante per indicare il mio contenitore
const contentitore = document.getElementById("container");
//creo collegamento con il pulsante
const buttonPlay = document.getElementById("play");

const numeroDiCelleTotali = document.getElementById("livelloDifficolta").value;

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
        
        let numeroDiCellePerLato = Math.ceil( Math.sqrt(numeroDiCelleTotali) );
        let dimensione = `calc(100% / ${numeroDiCellePerLato})`;

        for (let i = 1; i <= numeroDaGenerare; i++) {
            

            const box= createElement("div" ,"miniBox100" , i );
            box.style.width = dimensione;
            box.style.height = dimensione;
            contentitore.append(box);


            box.addEventListener("click", function() {    
            //dichiaro la bomba
               let Bomba= false;
                for(let c=0; c<= bombArray.length; c++){
                    const bombs = bombArray[c];
                    if(bombs == i){
                        Bomba=true;
                    }
                }
                if(Bomba){
                    this.classList.toggle("bgBomba");
                    console.log("i numeri sono uguali",i);
                }else{
                    this.classList.toggle("bgNuovo");
                    console.log("i numeri sono diversi", i);
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

