const {
  ScanCommand,
  GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} = require('@aws-sdk/client-dynamodb');

const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');
const uuid = require('uuid');

const db = require('./db');

const getAllUsers = async event => {
  const response = { statusCode: 200 };

  try {
    const { Items } = await db.send(new ScanCommand({ TableName: process.env.DYNAMODB_TABLE_NAME }));

    response.body = JSON.stringify({
      message: 'Successfully retrieved all users! :)',
      data: Items.map(item => unmarshall(item)),
      rawData: Items,
    });
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: 'Failed to retrieve users. :(',
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }
  return response;
};

const getUser = async event => {
  const response = { statusCode: 200 };

  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Key: marshall({ userId: event.pathParameters.userId }),
    };
    const { Item } = await db.send(new GetItemCommand(params));
    
    response.body = JSON.stringify({
      message: 'Successfully retrieved the user! :)',
      data: Item ? unmarshall(Item) : {},
      rawData: Item,
    });
  } catch (error) {
    console.log(error);

    response.statusCode = 500;
    response.body = JSON.stringify({
      message: 'Failed to get the user. :(',
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }

  return response;
};

const createUser = async event => {
  const response = { statusCode: 200 };

  try {
    const body = JSON.parse(event.body);
    body.userId = uuid.v4();
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: marshall(body),
    };
    const createResult = await db.send(new PutItemCommand(params));

    response.body = JSON.stringify({
      message: 'The user was successfully created! :)',
      createResult,
    });
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: 'Failed to create a user. :(',
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }
  return response;
};

const updateUser = async event => {
  const response = { statusCode: 200 };

  try {
    const body = JSON.parse(event.body);
    const objKeys = Object.keys(body);
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Key: marshall({ userId: event.pathParameters.userId }),
      UpdateExpression: `SET ${objKeys.map((key, index) => `#key${index} = :value${index}`).join(', ')}`,
      ExpressionAttributeNames: objKeys.reduce(
        (acc, key, index) => ({
          ...acc,
          [`#key${index}`]: key,
        }),
        {}
      ),
      ExpressionAttributeValues: marshall(
        objKeys.reduce(
          (acc, key, index) => ({
            ...acc,
            [`:value${index}`]: body[key],
          }),
          {}
        )
      ),
    };
    const updatedResult = await db.send(new UpdateItemCommand(params));

    response.body = JSON.stringify({
      message: 'The user was successfully updated! :)',
      updatedResult,
    });
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: 'Failed to update the user. :(',
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }
  return response;
};

const deleteUser = async event => {
  const response = { statusCode: 200 };

  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Key: marshall({ userId: event.pathParameters.userId }),
    };
    const deleteResult = await db.send(new DeleteItemCommand(params));

    response.body = JSON.stringify({
      message: 'The user was successfully deleted! :)',
      deleteResult,
    });
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: 'Failed to delete the user. :(',
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }
  return response;
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
