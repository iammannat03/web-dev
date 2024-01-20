const {v4:uuidv4}= require("uuid");

users=[
    {
        id: uuidv4(),
        username:"iammannat03",
        password:"xyz",
        followers:"",
        following:"",
        posts:{},
    },
    {
        id: uuidv4(),
        username:"pihu",
        password:"meow",
        followers:"",
        following:"",
        posts:{},
    },
    {
        id: uuidv4(),
        username:"ashu",
        password:"123",
        followers:"",
        following:"",
        posts:{},
    },
    {
        id: uuidv4(),
        username:"arushi",
        password:"abc",
        followers:"",
        following:"",
        posts:{},
    },
];

module.exports = users;