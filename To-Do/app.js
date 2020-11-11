// defining Vars
const add = document.querySelector('.btn1');
const clear = document.querySelector('.btn2');
const ui = document.querySelector('.collection');
const ip1 = document.querySelector('.ip1');
const ip2 = document.querySelector('.ip2');
ip2.value='';
// Listeners
add.addEventListener("click",Add);
clear.addEventListener("click",Clear);
ip2.addEventListener("keyup",filter);

// functions
function Add(e){
    const val = ip1.value;
    if(val === '')alert('Add Value First');
    else{
        const li = document.createElement('li');
        const del = document.createElement('i');
        del.className = 'fas fa-trash del'
        const text = document.createTextNode(val);
        li.appendChild(text)
        li.appendChild(del);
        ui.appendChild(li);
        ip1.value='';

        li.addEventListener("click",Del);
    }
}

function Clear(e){
    if(ui.firstElementChild === null)
    {
        alert('No value to clear');
    }
    else{
        if(confirm("Are You Sure You want to delete this??")){
        while(ui.firstElementChild)
        {
            ui.firstElementChild.remove();
        }
    }
    }
}

function filter(e){
    if(ui.firstElementChild === null)alert('Nothing to Filter')
    else{
        const val = ip2.value.toLowerCase();
        const lis = document.querySelectorAll('li');
        lis.forEach(function(list){
            const lower = list.textContent.toLowerCase();
            if(lower.indexOf(val)!== -1){
                list.style.display = "block";
            }else{
                list.style.display = "none";
            }
        })
    }
}

function Del(e){
    if(e.target.className === 'fas fa-trash del')
    {
        e.target.parentElement.remove();
    }
}
