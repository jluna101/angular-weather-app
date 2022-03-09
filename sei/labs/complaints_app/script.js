// console.log("Hello from script.js");


/* === Variables === */
const inputVal = $('#complaints').val();

/* === API URL === */

const url = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json';

// const complaintsNum = $('#complaints').val();

/* === API === */




/* === Event Listeners === */ 



$('#brooklyn').on('click', function(){
    event.preventDefault();
    const inputVal = $('#complaints').val();
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {   
        console.log(data);
        for (let i = 0; i <= inputVal; i++){
            if (data[i].agency === 'NYPD'){
                if (data[i].borough === 'BROOKLYN'){
                    $('#list').append('<li></li>', data[i].complaint_type,'<button id="complaint">WHAT DID THE POLICE DO?</button>');
                }}}
                })
    .catch((err) => {
        console.log(err)
    })})

    

/*

(data[i].borough === 'BROOKLYN'){
                $('#list').append('<li></li>', data[i].complaint_type, '<button id="bulletButton">WHAT DID THE POLICE DO?</button>')
            }

*/





$('#manhattan').on('click', function(){
    console.log("clicked Manhattan");
})
$('#queens').on('click', function(){
    console.log("clicked Queens");
})
$('#bronx').on('click', function(){
    console.log("clicked Bronx");
})
$('#statenIsland').on('click', function(){
    console.log("clicked Staten Island");
})


/*
$('#brooklyn').on('click', function(){
    event.preventDefault();
    // console.log("clicked Brooklyn");
    const complaintsNum = $('#complaints').val();
    let complaintsListed = 0;

    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {                            
        // console.log(data);
        for (let i = complaintsListed; i < data.length; i++){
        if (complaintsListed === complaintsNum){
            return;
        } else {
            if (data[i].borough === 'BROOKLYN'){
            $('#list').append('<li></li>', data[i].complaint_type, '<button id="bulletButton">WHAT DID THE POLICE DO?</button>')
            
            }}}
        })
    .catch((err) => {
        console.log(err)
    })}

*/















/*

$('#brooklyn').on('click', function(){
    console.log("clicked Brooklyn");
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {                            
        console.log(data);
        for (let i = 0; i < data.length; i++){
        if (data[i].borough === 'BROOKLYN'){
            $('#list').append('<li></li>', data[i].complaint_type, '<button id="bulletButton">WHAT DID THE POLICE DO?</button>')
            }}})
    .catch((err) => {
        console.log(err)
    })});

*/



/*
$('#bulletButton').on('click', function(){
                console.log("clicked bulletButton");
        })

*/


/*
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {                            
        console.log(data);
        // $('#list').append(data[1].complaint_type;
    })
    .catch((err) => {
        console.log(err)
    });
*/

// data[1].