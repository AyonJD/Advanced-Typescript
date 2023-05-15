// Make a common class for all the interfaces---------------------
class CommonPerson {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}


// Make a class for boys-------------
class Boys extends CommonPerson {
    attitude: string;
    constructor(name: string, age: number, attitudeProp: string) {
        super(name, age);
        this.attitude = attitudeProp;
    }
};

// Make a class for girls-------------
class Girls extends CommonPerson{
    isMad: boolean;
    constructor(name: string, age: number, isMadProp: boolean) {
        super(name, age);
        this.isMad = isMadProp;
    }
}

// Instences for Boys-----------------
const boys = new Boys('Ayon', 25, 'Cool');
// console.log(boys);

// Instences for Girls-----------------
const girls = new Girls('Joeta', 20, true);
// console.log(girls)