const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
}
const input = form.elements.searchInput;
/*
//input.value = `Search here`;
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

*/
input.addEventListener('focus', () => false);
input.addEventListener('blur', () => false);
//input.addEventListener('change', () => alert('changed'), false);
