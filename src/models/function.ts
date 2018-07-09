export interface EGFunction {
  functionId: string;
  space: string;
  type: string;
  provider: HTTPProvider | AWSLambdaProvider;
}

export interface HTTPProvider {
  url: string;
}

export interface AWSLambdaProvider {
  arn: string;
  region: string;
  awsAccessKeyId?: string;
  awsSecretAccessKey?: string;
  awsSessionToken?: string;
}
