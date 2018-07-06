interface EGFunction {
  functionId: string;
  space: string;
  type: string;
  provider: HTTPProvider | AWSLambdaProvider;
}

interface HTTPProvider {
  url: string;
}

interface AWSLambdaProvider {
  arn: string;
  region: string;
  awsAccessKeyId?: string;
  awsSecretAccessKey?: string;
  awsSessionToken?: string;
}
