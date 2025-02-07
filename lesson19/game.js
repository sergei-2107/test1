const num = document.getElementById('number');
const checkBtn = document.getElementById('check');
const errorMassage = document.getElementById('error');

const random = Math.floor(Math.random() * 10) + 1;
let count = 1;
checkBtn.onclick = () => {
    if (random === +num.value){
        errorMassage.style.display = 'none';
        addScore ();
    }else if (random < +num.value){
        errorMassage.textContent = 'Chislo menshe';
        errorMassage.style.display = 'block';
        
    }else if (random > +num.value) {
        errorMassage.textContent = 'Chislo bolshe';
        errorMassage.style.display = 'block';
    }
    count++;
};

function addScore() {
    const score = localStorage.getItem('score');
    const user = {
            name: sessionStorage.getItem('username'),
            score:count
        };
        const table = [];
        table.push(user);
    if (score) {
        table.push(...JSON.parse(score));
    }
   localStorage.setItem('score', JSON.stringify(table));
   window.location.href = '../score/score.html';
}