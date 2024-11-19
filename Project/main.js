// console.log(window);

// window.alert(1)

// Single element

// console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form');
// console.log(document.querySelector('h1'));
// console.log(form);


// Multiple element

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('item'));

// const item = document.querySelectorAll('.item');

// item.forEach((item) => console.log(item)) ;

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'John';
// ul.lastElementChild.innerHTML = '<h1> Yahallo </h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) => {
//     // console.log('click');
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Yahallo</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)    {
    e.preventDefault();

    // console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '')   {
        // alert('Please enter fields :3');
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields :3';
        
        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('Yatta!');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
        
    }
    
}



