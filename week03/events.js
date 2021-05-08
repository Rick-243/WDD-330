const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

addEventListener('keydown',highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

// this code is for bubbling 
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => 
console.log('Clicked on ul') );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );

ulElement.addEventListener('click', highlight);

/*
// for capturing you must set the value of the 3rd parameter to true as shown below

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
*/

/*
// for both use this code

// capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);

// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );
*/

/*
The bubble phase can be stopped from occurring by adding the event.stopPropagation() method 
into the callback function. In the following example, the event will fail to propagate as the 
third argument is false , which stops capturing, and the event.stopPropagation() method is called, 
which stops bubbling:

liElement.addEventListener('click', (event) => {
console.log('clicked on li');
event.stopPropagation(); }, false);

Be very wary of using the stopPropagation() method to stop the bubble phase occurring. 
There may be other event listeners attached to elements further up the chain that won’t fire 
as a result.

*/