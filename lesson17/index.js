// const pTextId = document.getElementById('text');

// console.log(pTextId);

// const pTextClass = document.getElementsByClassName('text');

// console.log(pTextClass);

// const pTextTag = document.getElementsByTagName('p');

// console.log(pTextTag);

// const pTextQuery = document.querySelector('p');

// console.log(pTextQuery);

// const pTextAllQuery = document.querySelectorAll('.text');

// console.log(pTextAllQuery);

// pTextId.innerText = 'new text';
// setTimeout(() => {
//     pTextId.innerText = 'text'
//     pTextId.style.color = 'red';
//     pTextId.style.fontSize = '24px';
// },2000);
// setTimeout(() => {
//     pTextId.textContent = 'New text content'
//     pTextId.classList.add('p-style');
// },4000);
// setTimeout(() => {
//     pTextId.innerHTML = 'new textHTML'
//     pTextId.classList.remove('p-style');
// },6000);


// const helloBtn = document.querySelector('#hello');
// // helloBtn.onclick = () => {
// //     alert('Hello!');
// // };

// helloBtn.addEventListener('click', (event) => {
//     console.log(event.target);
    
// });

// // helloBtn.addEventListener('click', () => {
// //     console.log('Button clicked');
// // });

// const inputText = document.querySelector('#inp-text');

// inputText.addEventListener('change', () => {
//     console.log(inputText.value);
// });

// // window.addEventListener('mousemove', (event) => {
// //     console.log(event.clientX, event.clientY);
    
// // });

// const addMouse = document.querySelector('#add-mouse-move');
// const removeMouse = document.querySelector('#remove-mouse-move');

// addMouse.onclick = () => {
//     window.addEventListener('mousemove', logMousePosition );
// }

// removeMouse.onclick = () => {
//     window.removeEventListener('mousemove', logMousePosition );
// }

// function logMousePosition(event) {
//     console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
// }

// const list = document.querySelector('ul');
// const addItem = document.querySelector('#add-item');
// const removeItem = document.querySelector('#remove-item');

// addItem.onclick = () => {
   
//     const newItem = document.createElement('li');
//     newItem.textContent = 'New item';
//     newItem.classList.add('list-item');

//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Remove';
//     removeBtn.classList.add('remove-btn');
//     newItem.appendChild(removeBtn);
//     removeBtn.addEventListener('click', () => {
//         list.removeChild(newItem);
//     });
//     newItem.appendChild(removeBtn);

//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     newItem.appendChild(input);
//     input.addEventListener('change', () => {
//         newItem.textContent = input.value;
//     });


//     list.appendChild(newItem);

// }

// removeItem.onclick = () => {
//     const lastItem = list.lastElementChild;
//     if (lastItem) {
//         list.removeChild(lastItem);
//     }
// }

// const items = ['item 1', 'item 2', 'item 3'];

// items.forEach(item => {
//     const newItem = document.createElement('li');
//     newItem.innerText = item;
//     list.appendChild(newItem);
// });

