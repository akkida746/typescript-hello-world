import packageJson from '@aws-sdk/client-s3/package.json' with { type: 'json' };

export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
