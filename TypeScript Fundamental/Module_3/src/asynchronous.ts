const makePromise = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) 
            setTimeout(() => {
                resolve('Hello World');
            }, 2000);
        else 
            reject(new Error('Something went wrong'));
    });
}

const getPromise = async (): Promise<void> => {
    const result = await makePromise();
    console.log(result);
}

getPromise();

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

const todoList = async (): Promise<void> => {
    const todo = await getTodo();
    console.log(todo);
}

todoList();