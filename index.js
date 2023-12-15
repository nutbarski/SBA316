//load variables
let strModifier = document.getElementById('str_stat');
let dexModifier = document.getElementById('dex_stat');
let conModifier = document.getElementById('con_stat');
let intModifier = document.getElementById('int_stat');
let wisModifier = document.getElementById('wis_stat');
let chaModifier = document.getElementById('cha_stat');

// Get the strSavingThrowModifier section
let strSavingThrowModifier = document.querySelector('.strSavingThrowModifier');

// Set the value of str_stat within strSavingThrowModifier section
strSavingThrowModifier.textContent = strModifier;
