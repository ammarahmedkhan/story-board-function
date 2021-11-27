exports.handler = async (event, context)=>{
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://auth-practice-4b9a7-default-rtdb.firebaseio.com/stories.json?auth=1yovutZkKbzxNzz45YLfnmirBKMy3VIwXeJsjSy0", requestOptions)
  .then(response => response.text())
  .then(result => return {statusCode: 200,body: result}   )
  .catch(error =>  return {statusCode: 200, body: error} );
  };
