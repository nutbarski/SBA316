//load variables
//alert('Javascript loaded');

//for strength
document.addEventListener('DOMContentLoaded', function() {
    let strScore = 0; // Initialize strScore

    // Get the input element and the element to display the modifier
    let strInput = document.getElementById('str_stat');
    let strSaveMod = document.getElementById('strSaveMod');

    // Add an event listener for 'input' event
    strInput.addEventListener('input', function() {
        strScore = parseInt(strInput.value); // Update strScore when input changes
        strSaveMod.innerHTML = strInput.value;
        strSaveMod.style.color = 'white'; //Change color of stat in block

        // Form validation for the score range
        if (strScore > 20 || strScore < 0) {
            alert("Must be a number between 0 & 20");
            // Reset the input to the previous valid value
            strInput.value = strScore > 20 ? 20 : 0;
            // Update the displayed modifier accordingly
            strSaveMod.innerHTML = strInput.value;
        }
        
        console.log("str:" + strScore); // Log the updated strScore to the console
    });
});


//for dexterity
document.addEventListener('DOMContentLoaded', function() {
    let dexScore = 0; // Initialize dexScore

    // Get the input element and the element to display the modifier
    let dexInput = document.getElementById('dex_stat');
    let dexSaveMod = document.getElementById('dexSaveMod');

    // Add an event listener for 'input' event
    dexInput.addEventListener('input', function() {
        dexScore = parseInt(dexInput.value); // Update dexScore when input changes
        dexSaveMod.innerHTML = dexInput.value;
        dexSaveMod.style.color = 'white'; //Change color of stat in block

        // Form validation for the score range
        if (dexScore > 20 || dexScore < 0) {
            alert("Must be a number between 0 & 20");
            // Reset the input to the previous valid value
            dexInput.value = dexScore > 20 ? 20 : 0;
            // Update the displayed modifier accordingly
            dexSaveMod.innerHTML = dexInput.value;
        }
        
        console.log("dex:" + dexScore); // Log the updated dexScore to the console
    });
});

//for constitution
document.addEventListener('DOMContentLoaded', function() {
    let conScore = 0; // Initialize conScore

    // Get the input element and the element to display the modifier
    let conInput = document.getElementById('con_stat');
    let conSaveMod = document.getElementById('conSaveMod');

    // Add an event listener for 'input' event
    conInput.addEventListener('input', function() {
        conScore = parseInt(conInput.value); // Update conScore when input changes
        conSaveMod.innerHTML = conInput.value;
        conSaveMod.style.color = 'white'; //Change color of stat in block

        // Form validation for the score range
        if (conScore > 20 || conScore < 0) {
            alert("Must be a number between 0 & 20");
            // Reset the input to the previous valid value
            conInput.value = conScore > 20 ? 20 : 0;
            // Update the displayed modifier accordingly
            conSaveMod.innerHTML = conInput.value;
        }
        
        console.log("con:" + conScore); // Log the updated conScore to the console
    });
});

//for intelligence
document.addEventListener('DOMContentLoaded', function() {
    let intScore = 0; // Initialize intScore

    // Get the input element and the element to display the modifier
    let intInput = document.getElementById('int_stat');
    let intSaveMod = document.getElementById('intSaveMod');

    // Add an event listener for 'input' event
    intInput.addEventListener('input', function() {
        intScore = parseInt(intInput.value); // Update intScore when input changes
        intSaveMod.innerHTML = intInput.value;
        intSaveMod.style.color = 'white'; //Change color of stat in block

        // Form validation for the score range
        if (intScore > 20 || intScore < 0) {
            alert("Must be a number between 0 & 20");
            // Reset the input to the previous valid value
            intInput.value = intScore > 20 ? 20 : 0;
            // Update the displayed modifier accordingly
            intSaveMod.innerHTML = intInput.value;
        }
        
        console.log("int:" + intScore); // Log the updated intScore to the console
    });
});

//for wisdom
document.addEventListener('DOMContentLoaded', function() {
    let wisScore = 0; // Initialize wisScore

    // Get the input element and the element to display the modifier
    let wisInput = document.getElementById('wis_stat');
    let wisSaveMod = document.getElementById('wisSaveMod');

    // Add an event listener for 'input' event
    wisInput.addEventListener('input', function() {
        wisScore = parseInt(wisInput.value); // Update wisScore when input changes
        wisSaveMod.innerHTML = wisInput.value;
        wisSaveMod.style.color = 'white'; //Change color of stat in block

        // Form validation for the score range
        if (wisScore > 20 || wisScore < 0) {
            alert("Must be a number between 0 & 20");
            // Reset the input to the previous valid value
            wisInput.value = wisScore > 20 ? 20 : 0;
            // Update the displayed modifier accordingly
            wisSaveMod.innerHTML = wisInput.value;
        }
        
        console.log("wis:" + wisScore); // Log the updated wisScore to the console
    });
});

//for charisma
document.addEventListener('DOMContentLoaded', function() {
    let chaScore = 0; // Initialize chaScore

    // Get the input element and the element to display the modifier
    let chaInput = document.getElementById('cha_stat');
    let chaSaveMod = document.getElementById('chaSaveMod');

    // Add an event listener for 'input' event
    chaInput.addEventListener('input', function() {
        chaScore = parseInt(chaInput.value); // Update chaScore when input changes
        chaSaveMod.innerHTML = chaInput.value;
        chaSaveMod.style.color = 'white'; //Change color of stat in block

        // Form validation for the score range
        if (chaScore > 20 || chaScore < 0) {
            alert("Must be a number between 0 & 20");
            // Reset the input to the previous valid value
            chaInput.value = chaScore > 20 ? 20 : 0;
            // Update the displayed modifier accordingly
            chaSaveMod.innerHTML = chaInput.value;
        }
        
        console.log("cha:" + chaScore); // Log the updated chaScore to the console
    });
});