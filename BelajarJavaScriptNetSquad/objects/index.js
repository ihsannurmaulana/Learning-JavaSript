// Number 1
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],

    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo() {
    return `Account Information:
Name: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome()}
Total Expenses: ${this.totalExpense()}
Account Balance: ${this.accountBalance()}`;
    },

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Adding incomes and expenses
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelance", 2000);
personAccount.addExpense("Rent", 1500);
personAccount.addExpense("Groceries", 200);

console.log(personAccount.accountInfo());

// Number 2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

// Imagine you are getting the above users collection from a MongoDB database
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username) {
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return "User already has an account.";
    } else {
        users.push({ username });
        return "Sign up successful!";
    }
}

console.log(signUp("Alex")); // Sign up successful!
console.log(signUp("Alex")); // User already has an account.
console.log(signUp(users)); 

// b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        if(existingUser.password === password){
            return existingUser.isLoggedIn = true;
        }
    } else {
        return "User not found.";
    }
}

console.log(signIn("Alex", "123123")); // Sign in successful!

// Number 3
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
function rateProduct(productName, userId, rate) {
    let product = products.find(product => product.name === productName);
    if (product) {
        product.ratings.push({ userId, rate });
    }
    else {
        return "Product not found";
    }
}

rateProduct("mobile phone", "eefamr", 5);
rateProduct("TV", "eefamr", 4);
console.log(products);

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productName) {
    let product = products.find(product => product.name === productName);
    if (product) {
        return product.ratings.reduce((a, b) => a + b.rate, 0) / product.ratings.length;
    }
    else {
        return "Product not found";
    }
}

console.log(averageRating("mobile phone"));
console.log(averageRating("TV"));

// Number 4
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked
function likeProduct(productName, userId) {
    let product = products.find(product => product.name === productName);
    if (product) {
        if (product.likes.includes(userId)) {
            product.likes = product.likes.filter(user => user !== userId);
        } else {
            product.likes.push(userId);
        }
    }
    else {
        return "Product not found";
    }
}

likeProduct("mobile phone", "eefamr");
likeProduct("TV", "eefamr");
likeProduct("TV", "eefamr");
console.log(products);






