let date_text = document.getElementById('date_text');

let clock = document.getElementById('clock');
clock.addEventListener('click',()=>{
    clock.style.backgroundColor = clock.style.backgroundColor == 'green' ? 'red' : 'green'
})

let chngDateFunc = ()=>{
    let date = new Date();
    let hours = date.getHours() > 12 ? date.getHours()-12 : date.getHours();
    date_text.innerHTML = hours + " : " + date.getMinutes()+ " : " + date.getSeconds();
}
setInterval(chngDateFunc,1000);

let body = document.getElementsByTagName('body');
body.addEventListener()