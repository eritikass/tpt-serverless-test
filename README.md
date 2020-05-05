## Usage

 - configure aws creditals ( https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html )
 - install node packages ( `npm install` )

run locally: `npm start`

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

