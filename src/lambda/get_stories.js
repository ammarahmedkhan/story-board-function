const fetch = require('node-fetch')

const API_ENDPOINT = 'https://auth-practice-4b9a7-default-rtdb.firebaseio.com/stories.json?auth=1yovutZkKbzxNzz45YLfnmirBKMy3VIwXeJsjSy0'

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(API_ENDPOINT)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}
