const userName = document.getElementById('name');
const startGameBtn = document.getElementById('btn');

startGameBtn.onclick = event => {
    event.preventDefault();
    if (userName.value) {  
        sessionStorage.setItem('userName', userName.value);
        window.location.href = './game/game.html';
    }
};
