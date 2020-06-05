# Calculator Serverless App

AWS **Serverless** Application with **eslint**, **nightwatch**, **jest** testing and **CI** deployment.

You can see my **deployed application at**: [`link`](https://lm92mqzaqh.execute-api.us-east-1.amazonaws.com/dev/calc).

## Usage

 - Configure aws creditals ( https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html )
 - Install node packages ( `npm install` )

Run serverless locally: `npm start`

NB! Before deploying make sure you have correct tokens in ~/.aws/credentials and /config...
deploy to aws: `npm run deploy`
remove from aws: `npm run remove`

show logs from aws:
```
npm run serverless -- logs -f hello -t
```

## Homework:

### For testing...
Run eslint:
```
npm run lint
```

Run all tests (unit-tests and visual-tests):
```
npm run tests
```

Run tests individually:
```
npm run jest
npm run nightwatch
```

### For CI Deployment i used Travis CI: `https://travis-ci.org/`

