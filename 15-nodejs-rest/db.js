const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');

const dbClient = new DynamoDBClient({
  region: 'us-east-1',
  accessKeyId: 'access_key_id',
  secretAccessKeyId: 'secret_access_key_id',
  endpoint: 'http://localhost:8000',
});

module.exports = dbClient;
