// Your code goes here

let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', function(event){
    console.log(`The header h1!`);
})

let workBtn = document.querySelectorAll('.btn')
workBtn.forEach(function(item, idx){
    item.addEventListener('toggle', function(){
        console.log(`buttons`);
        event.target.style.backgroundColor = 'pink';
    });
});
function backgroundItem(e){
    const item = document.querySelector()
    item.toggleAttribute('hidden');
}

let selectedNavLinks = document.querySelectorAll('nav a');
selectedNavLinks.forEach(function(item, idx){
    item.addEventListener('click', function(){
        console.log('nav links!');
        event.target.style.backgroundColor = 'red';
        event.preventDefault();
    });
});

let headerImg = document.querySelector('header img');
headerImg.addEventListener('drag', function(event){
    console.log(`Image selected`);
    event.target.style.display = 'none';
})

let h2selection = document.querySelectorAll('h2');
h2selection.forEach(function(item, idx){
    item.addEventListener('mouseover', function(){
        console.log(`H2!`);
        event.target.style.color = 'red';
    });

});

// h2selection[0].addEventListener('click', function(event){
//     console.log(`H2 selected`);
//     event.target.style.fontsize = '2rem';
// })
// h2selection[1].addEventListener('click', function(event){
//     console.log(`H2 selected`);
// })
// h2selection[2].addEventListener('click', function(event){
//     console.log(`H2 selected`);
// })
// h2selection[3].addEventListener('click', function(event){
//     console.log(`H2 selected`);
// })

// const homeContainer = document.querySelector('.container home');
// homeContainer.addEventListener('click', function(event){
//     console.log(`scrolling in the ${event.target}`)
// })
// const container = document.querySelector('.container')[1]
// container.addEventListener('click', event => {
//   console.log('Clicked', event.target, event.screenX, event.screenY)
// })


window.addEventListener('load', (event) => {
    console.log(`page is fully loaded`);
});

let textHighlight = document.querySelectorAll('p')
textHighlight.forEach(function(item, idx){
    item.addEventListener('copy', function(){
        console.log(`text`);
        event.target.style.fontSize = '3rem';
    });

});

// let imageZoom = document.querySelector('.img-fluid')
// imageZoom.addEventListener('click', function(event){
//     console.log(`image!`)
// })
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.img-fluid');
  el.onwheel = zoom;