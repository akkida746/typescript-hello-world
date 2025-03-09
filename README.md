# What is TypeScript?
TypeScript is an open-source programming language developed by Microsoft. It is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript adds optional static typing, classes, and interfaces, making it ideal for large-scale applications and improving developer productivity.

## Install aws-skd dependencies:
npm install aws-sdk @types/aws-lambda

## Run application:
node helloworld.js

## Zip application code to deploy on AWS lambda:
zip -r function.zip .

## Deploy the zip file in AWS lambda function.
function.zip