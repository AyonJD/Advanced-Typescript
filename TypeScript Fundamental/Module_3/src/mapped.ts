// Map is used for ignoring rewrite same code again and again
type IFriend ={
    friend1: string;
    friend2: string;
    friend3: string;
}

const friendList: IFriend = {
    friend1: 'John',
    friend2: 'Doe',
    friend3: 'Smith'
}

// Make another tye for readonly. So here we should rewrite the IFriend interface again. So we can use Map

type IFriend2 = { 
    readonly [key in keyof IFriend]: IFriend[key];
}
// Here keyof IFriend will return friend1, friend2, friend3. So it will be like this readonly [key in 'friend1' | 'friend2' | 'friend3']: IFriend[key];
// key will be friend1, friend2, friend3 and IFriend[key] will be string as the value of friend1, friend2, friend3 is string