// Your code goes here

let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', function(event){
    console.log(`The header h1!`);
})

let workBtn = document.querySelectorAll('.btn')
workBtn.forEach((element,i) => {
    element[i].addEventListener('dblclick', function(event){
        console.log(`Buttons`);
})
// workBtn[0].addEventListener('dblclick', function(event){
//     console.log(`Buttons`);
// })
// workBtn[1].addEventListener('dblclick', function(event){
//     console.log(`Buttons`);
// })
// workBtn[2].addEventListener('dblclick', function(event){
//     console.log(`Buttons`);
// })

let selectedNavLinks = document.querySelectorAll('nav a');
selectedNavLinks.forEach(function(links, i){

})

let headerImg = document.querySelector('header img');
headerImg.addEventListener('drag', function(event){
    console.log(`Image selected`);
})

let h2selection = document.getElementsByTagName('h2');
h2selection[0].addEventListener('click', function(event){
    console.log(`H2 selected`);
})
h2selection[1].addEventListener('click', function(event){
    console.log(`H2 selected`);
})
h2selection[2].addEventListener('click', function(event){
    console.log(`H2 selected`);
})
h2selection[3].addEventListener('click', function(event){
    console.log(`H2 selected`);
})