// Button
const btn = document.querySelector('button');
const Root = document.querySelector('.root');
btn.addEventListener("click",api);

async function api(){
    const url = 'https://api.github.com';
    const p = await fetch(url);
    const d = await p.json();
    console.log(d);
    const data = await fetch(d.events_url);
    const req  = await data.json();
    console.log(req);
}

