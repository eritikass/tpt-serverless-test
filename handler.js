'use strict';

module.exports.hello = async event => {
  let { queryStringParameters } = event;
  if (!queryStringParameters) {
    queryStringParameters = {};
  }
  const a = parseInt(queryStringParameters.a, 10) || 0;
  const b = parseInt(queryStringParameters.b, 10) || 0;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        a,
        b,
        sum: a + b,
        // message: 'Go Serverless v1.0! Your function executed successfully!',
        // input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
