const roleList: number[] = [1, 2, 3, 4, 5];

const multplyRoleWithTwo = (role: number): number => {
    return role * 2;
};
    
const newRoleList = roleList.map((role: number) => {
    return multplyRoleWithTwo(role);
});

// console.log(newRoleList);


const user: {
    name: string;
    age: number;
    married: boolean;
    salary: number;
    addSalary(age: number): number;
    wife?: {
        name: string;
        age: number;
    }
} = {
    name: "Ayon",
    age: 25,
    married: false,
    salary: 20000,
    addSalary( age: number): number{
        return this.salary * age;
    }
}

const myTuple: [string, number] = ["John", 30];
myTuple[1] = 15;
myTuple.shift();

console.log(myTuple) // [15]
