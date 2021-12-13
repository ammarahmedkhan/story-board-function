const fetch = require('node-fetch').default;

const checkStatus = (res) => {
  if (res.ok) { // res.status >= 200 && res.status < 300
      return res.json()
  } else {
      throw new Error(res.statusText);
  }
}
const API_ENDPOINT = 'https://auth-practice-4b9a7-default-rtdb.firebaseio.com/stories.json?auth=1yovutZkKbzxNzz45YLfnmirBKMy3VIwXeJsjSy0'

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await checkStatus(response)
    callback(null, {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  } catch (error) {
    callback(error)
  }

}
