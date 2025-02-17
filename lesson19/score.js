const tBody = document.getElementById('tbody');


const score = JSON.parse (localStorage.getItem('score'));
console.log(score);
tBody.innerHTML = '';
score
.sort((a,b) => a.score - b.score)
.slice(0, 10) // ограничение вывода до 10 лучших результатов
.forEach(data => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.innerText = data.name;
    const tdScore = document.createElement('td');
    tdScore.innerText = data.score;
    tr.append(tdName, tdScore);
    tBody.append(tr);
});

