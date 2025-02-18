const addBtn = document.getElementById('addBtn');
const getBtn = document.getElementById('getBtn');
const putBtn = document.getElementById('putBtn');
const delBtn = document.getElementById('delBtn');

addBtn.onclick = () => {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        
    };

    fetch('https://less-85210-default-rtdb.firebaseio.com/user.json',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
};

getBtn.onclick = () => {
    fetch('https://less-85210-default-rtdb.firebaseio.com/user.json')
    .then(response => response.json())
    .then(data => {
        const arr = Object.values(data).map((el, i)=> {
            return {
                ...el,
                id: Object.keys(data)[i],
            };
        });
        console.log(arr);
    })
    .catch(error => console.error('Error:', error));
};


putBtn.onclick = () => {
    const userId = '-OJOz_3Pb2ayDLGj2xZ6';
    const user = {
        firstName: 'Vasyan',
        lastName: 'Doe',
        age: 35,
    };

    fetch(`https://less-85210-default-rtdb.firebaseio.com/user/${userId}.json`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

    delBtn.onclick = () => {
        const userId = '-OJOz_3Pb2ayDLGj2xZ6';
        const user = {
            firstName: 'Vasyan',
            lastName: 'Doe',
            age: 35,
        };
    
        fetch(`https://less-85210-default-rtdb.firebaseio.com/user/${userId}.json`,
            {
            method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
               
            })
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        };

// '-OJOy-VdBPg0rx_kJMxk'