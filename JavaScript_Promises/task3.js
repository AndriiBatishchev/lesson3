// Функція для отримання todo

async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error text:', error);
        throw error;
    }
}
//fetchTodo().then(console.log)

///////
async function fetchAll() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error text:', error);
        throw error;
    }
}

//fetchAll().then(console.log)

async function promisesAllRace() {
    try {
        const promisesAll = await Promise.all([fetchTodo(), fetchAll()]);
        console.log('Promise.all results:', promisesAll);

        const promisesRace = await Promise.race([fetchTodo(), fetchAll()]);
        console.log('Promise.race result:', promisesRace);

    } catch (error) {
        console.error('Error text:', error);
        throw error;
    }
}

promisesAllRace()