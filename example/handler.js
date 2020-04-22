
const _ = require('lodash');

module.exports.hello = async (event) => {
  /*
  let { queryStringParameters } = event;
  if (!queryStringParameters){
    queryStringParameters = {};
  }

  const a = parseInt(event.queryStringParameters.a, 10) || 0;
  const b = parseInt(event.queryStringParameters.b, 10) || 0;
  */

  const name = (event.queryStringParameters || {}).name || '';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `${name ? `<h1>Hello ${_.escape(name)}!</h1>` : ''}<form action="/dev/hello" method="GET">
    input: <input type="text" name="name" value="${_.escape(name)}"/>
    <input type="submit"/>
    </form>
    `,
    /*
    body: JSON.stringify(
      {
        a,
        b,
        sum: a + b,
        //message: 'Go Serverless v1.0! Your function executed successfully!',
        //input: event,
      },
      null,
      2
    ),
    */
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
