# serverless example

https://serverless.com/

## Usage 

 - configure aws creditals ( https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html )
 - install node packages ( `npm install` )

run locally: `npm start`

deploy to aws: `npm run deploy`
remove from aws: `npm run remove`

show logs from aws:
```
npm run serverless -- logs -f handler -t
```

get logs in aws ui:
  `CloudWatch` -> `Logs` -> `Insights` and select correct log group.