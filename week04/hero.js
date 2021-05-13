const form = document.forms['hero'];
//form.addEventListener('submit',validate,false);
form.addEventListener('submit', makeHero, false);
form.heroName.addEventListener('keyup', disableSubmit, false);

/*
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
*/
const msg = document.getElementById('heroName');
msg.addEventListener('keyup', validateInline, false);
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; // create a real name property based on the input field's value
    hero.age = form.age.value; 
    form.city; 
    form.powers; // access powers as an html collection
    form.category; // access the radio button category of what type of hero you are
    hero.origin = form.origin.value; // assign the value of the textarea (origin property) to our hero object
    hero.city = form.city.value; // assign the value of the city property to our hero object
    hero.category = form.category.value; // assign a category property to our hero object
    /*
    hero.powers = [];  
    for(let i = 0; i < form.powers.length; i++) {  
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    */
   // this is a more succinct way of doing the same code as above
   hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
   /* 
   This uses the spread operator (...) to turn the node list into an array. 
   This then allows us to use the filter() method that returns an array 
   containing only the check boxes that were checked (this is because 
   their 'checked' property will be truthy). We then chain the map() method 
   to the end, which replaces each checkbox in the array with its 'value' property. 
   This array is then returned and stored in the hero.powers variable.
   */
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
