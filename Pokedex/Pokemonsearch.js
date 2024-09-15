const mainform = document.querySelector(".mainform");
const container = document.querySelector(".main-container");
const spritesp = document.getElementById("spritesp");
const loadingscreen = document.querySelector(".poke-sprite");
const loadingmess = document.querySelector(".loading-text");


mainform.addEventListener("submit", (e) => {
    e.preventDefault();

    const getpokemon = document.getElementById("search").value.toLowerCase();
    const inputElement = document.getElementById("search");

    inputElement.value = "";

//try {
        //const fetchval = await fetch(https://pokeapi.co/api/v2/pokemon/${getpokemon});


setTimeout( ()=>{
    loadingmess.textContent = "";
    loadingscreen.style.display = "none"
    document.main-container.classList.remove("blurred");

    fetch(`https://pokeapi.co/api/v2/pokemon/${getpokemon}`)
    .then(response =>{

        if(response.ok){
            return response.json()
        }

    })

        .then(data =>{
            displayanimals(data);
            enabledAll()

        })

    .catch(error =>{
        const errorcontainer = document.querySelector(".error-container");
        const errormessage = document.querySelector(".error-message");
        errorcontainer.style.display = "block";
        errormessage.textContent = "Error Occurred";


        const errorbtn = document.querySelector(".error-btn")
        errorbtn.addEventListener("click",()=>{
        errorcontainer.style.display = "none";
        enabledAll()


    })
    })

}, 3000)

disabledAll()
loadingmess.textContent = "Relax lang ha"
loadingscreen.style.display = "block"
document.main-container.classList.add("blurred");


        //loadingscreen.style.display = "block"

    //if(fetchval.ok) {

        //const data =  await fetchval.json();
        //console.log(data);
        //displayanimals(data);
        //loadingscreen.style.display = "block"

    //} else {
        //throw new Error("Error");
   // }


   // } catch (error) {
       // const errorcontainer = document.querySelector(".error-container");
        //const errormessage = document.querySelector(".error-message");
        //document.main-container.classList.add("blurred");
        //errorcontainer.style.display = "block";
        //errormessage.textContent = "Error Occurred";
        //disabledAll()

   // const errorbtn = document.querySelector(".error-btn").addEventListener("click", ()=> {
        //errorcontainer.style.display = "none";
        //document.main-container.classList.remove("blurred");
        //enabledAll()
    //});
//}

function displayanimals(data) {
    const abilities = data.abilities;
    const poketype = data.types;
    const pokename = data.name;
    const imageUrl = data.sprites.front_default;
    const pokeIMAGE = document.getElementById("animal-image");
    const name = document.querySelector(".name");
    const typeofpoke = document.querySelector(".typeofpoke");
    const abilityofpoke = document.querySelector(".abilitieofpoke");


    try {

        spritesp.remove()

        typeofpoke.innerHTML = "Types:";
        poketype.forEach((types) => {

        if (types) {
            const typesP = document.createElement("p");
            //gikan index0 + slice(1) meaning ang nabilin na mga letters
            typesP.textContent =`${types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)} `;
            typesP.classList.add("types");
            typeofpoke.appendChild(typesP);
        }
        });



    abilityofpoke.innerHTML = "Ability:";
    abilities.forEach((element) => {

        if (element) {
            const abilityP = document.createElement("p");
            abilityP.textContent = `${element.ability.name.charAt(0).toUpperCase() + element.ability.name.slice(1)} `;
            abilityP.classList.add("ability");
            abilityofpoke.appendChild(abilityP);
        }
        });

        name.innerText =`Name: ${pokename.charAt(0).toUpperCase() + pokename.slice(1)}`;
        pokeIMAGE.src = imageUrl;

    } catch (error) {
        console.log(error);
    }
}


function disabledAll(){
    const disabled = document.querySelectorAll("input");
    const button = document.querySelector('button[type="submit"]');
    button.style.pointerEvents = "none";

    disabled.forEach((element) => {
        element.disabled = true;
    })
}

function enabledAll() {
    const disabledCom = document.querySelectorAll("input");
    const button = document.querySelector('button[type="submit"]');
    button.style.pointerEvents = "auto";

    disabledCom.forEach((components) => {
        components.disabled = false;
    });
}

});