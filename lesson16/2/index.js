// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);

// function fetchData() {
//     return new Promise((resolve, reject ) => {
//         setTimeout(() => {
//             const data = {name: 'Alice', age: 25};
//             resolve(data);
//         }, 1000);
//     });
// }

// fetchData()
//     .then(data => {
//         console.log(data);
        
//     })
//     .catch(error => {
//         console.error(error);
//     });

    // function fetchData() {
    //     return new Promise((resolve, reject ) => {
    //         setTimeout(() => {
    //             const data = {name: 'Alice', age: 25};
    //             const error = {
    //                 message: 'Server error',
    //                 status: 500,
    //             }
    //             reject(error);
    //         }, 1000);
    //     });
    // }
    
    // fetchData()
    //     .then(data => {
    //         console.log(data);
            
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });


    // async function fetchData() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             const data = {name: 'Alice', age: 25};
    //             resolve(data);
    //         }, 1000);
    //     });
    // }

    // async function main() {
    //     try {
    //         const data = await fetchData();
    //         console.log(data);
    //     }
    //     catch (error) {
    //         console.error(error);
    //     } 
    //     finally {
    //         console.log('Finally block');
    //         console.log('End of the script');
    //     }
    // }

    // main();

    // async function fetchUserData() {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const user = await response.json();
    //         console.log(user);
            
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // }   

    // fetchUserData();


    // async function postData() {
    //     const data = {
    //      title: 'foo',
    //      body: 'bar',
    //      userId: 1,
    //     };
       
    //     try {
    //      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //       method: 'POST', // Метод запроса
    //       headers: {
    //        'Content-Type': 'application/json', // Указываем тип содержимого
    //       },
    //       body: JSON.stringify(data), // Преобразуем объект в JSON
    //      });
       
    //      if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //      }
       
    //      const result = await response.json();
    //      console.log('Success:', result);
    //     } catch (error) {
    //      console.error('Error:', error);
    //     }
    //    }
       
    //    postData();

    async function getInfo () {
        const response = await fetch ('https://jsonplaceholder.typicode.com/photos/5')
           .then(res => res.json())
           .then(data => console.log(data));
           }

           getInfo();
   