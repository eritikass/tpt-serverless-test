# serverless Albert

Live at https://6fq1iharw4.execute-api.us-east-1.amazonaws.com/dev/

```sh
cd client
npm run build
cd ..
cd Backend
npm i
npm run start
```

now you can do a request on 
http://localhost:3000/dev/index.html to get the client page
or do a POST on http://localhost:3000/dev/image with an Base54 encoded image (an example image is in ./Backend/imgexample.txt)


https://serverless.com/

## Usage 

 - configure aws creditals ( https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html )
 - install node packages ( `npm install` )

run locally: `npm start`

deploy to aws: `npm run deploy`
remove from aws: `npm run remove`

show logs from aws:
```
npm run serverless -- logs -f app -t
```

get logs in aws ui:
  `CloudWatch` -> `Logs` -> `Insights` and select correct log group.
