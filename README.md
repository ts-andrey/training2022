# training2022

# 15-nodejs-rest task:

### In order to use serverless dynamodb rest API you should prepare your environment (you can find required steps below):

- install java `sdk`;
- install `serverless`, `serverless-offline`, `serverless-dynamodb-local` (globally);
- check whether you have or not `.dynamodb` folder in the project;folder, if not then you should run `sls dynamodb install` command to be able to work with dynamodb locally;
- you also need to install required dependencies with help of `npm install` command.

### to test current api you have to use postman application where you can send following requests:

- GET `http://localhost:3000/dev/users` - get all users;
- GET `http://localhost:3000/dev/users/{userId}` - get specific users;
- POST `http://localhost:3000/dev/users` - create new user. You also should provide valid user data;
- PUT `http://localhost:3000/dev/users/{userId}` - update specific. You also should provide valid user data;
- DELETE `http://localhost:3000/dev/users/{userId}` - delete specific user.