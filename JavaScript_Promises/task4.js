// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.


class ClassFetchTodo {
    async fetchTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error text:', error);
            throw error;
        }
    }
}

class ClassFetchUser {
    async fetchAll() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error text:', error);
            throw error;
        }
    }
}

async function promisesAllRace() {
    const classFetchTodo = new ClassFetchTodo();
    const classFetchUser = new ClassFetchUser();

    try {
        const promisesAll = await Promise.all([classFetchTodo.fetchTodo(), classFetchUser.fetchAll()]);
        console.log('Promise.all results:', promisesAll);

        const promisesRace = await Promise.race([classFetchTodo.fetchTodo(), classFetchUser.fetchAll()]);
        console.log('Promise.race result:', promisesRace);

    } catch (error) {
        console.error('Error text:', error);
        throw error;
    }
};

promisesAllRace();