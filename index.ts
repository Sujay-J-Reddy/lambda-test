import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from "aws-lambda";

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    const max = 100;
    const response = {
    statusCode: 200,
    body: `The max value: ${max}`,
  };
  return response;
};