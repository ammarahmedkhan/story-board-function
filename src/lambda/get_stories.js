const fetch = require('node-fetch').default;

const API_ENDPOINT = 'https://auth-practice-4b9a7-default-rtdb.firebaseio.com/stories.json?auth=1yovutZkKbzxNzz45YLfnmirBKMy3VIwXeJsjSy0'

async function call(api){
    let res = await fetch(api, { // await helps you to wait here to make your code sync
        method: "get" 
    })
    const json = res.json() 
    return json ;                                
}

exports.handler = async (event, context) => {

try {
const response = await call(API_ENDPOINT); //use try catch to catch error
console.log(response);
}
catch (error) {
console.log(`Error ${error}`);
}
}
