// let data = new Date();
// console.log(data);
// // visualizzo giorno
// console.log('Giorno:'+data.getDate());
// // visuallizzo anno
// console.log('Anno:'+data.getFullYear());
// // visuallizzo mese
//  console.log('Mese:'+data.getMonth());

// formatto data si usa set

// data.setDate(5);
// console.log('Nuovo giorno:',data);
// // setto anno
// data.setFullYear(2000)
// console.log('Nuovo anno:',data);

// // creazione data con stringa

// let dataStringa = new Date('16 mar 1986');
// console.log('Data nascita:',dataStringa);

// // creazione data con numeri

// let dataNumeri = new Date(1986,16,06);
// console.log('Data in numeri:',dataNumeri);


function dataDiOggi(){
let data= new Date();
 let ris= document.getElementById('risultato');
 let now= data;
 ris.innerHTML= now;
}


// funzione visualizza giorno
function giorno(){
    let data= new Date();
    let giorno= data.getDate();
    let ris=document.getElementById('display');
    ris.innerHTML=giorno;
    }



// let month=['jenuary','february','march','april','may','june','july','august','september','october','november','december'];
function mese(){
let data= new Date();
let monthNow= data.getMonth();
let arrayMonth=['jenuary','february','march','april','may','june','july','august','september','october','november','december'];
let months = arrayMonth[monthNow];
let ris = document.getElementById('result');
ris.innerHTML = months;
}


function anno(){
let data= new Date();
let year=data.getFullYear();
let ris= document.getElementById('res');
ris.innerHTML= year;
}

function dataItalia(){
    let dateTime= new Date();
    let dateIT= dateTime.toLocaleDateString('it-IT');
    let stringToPrint=` data: ${dateIT}`;
    document.getElementById('test').innerHTML= stringToPrint;

}
