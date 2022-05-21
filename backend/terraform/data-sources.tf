# --- s3FileUpload ---
resource "aws_appsync_datasource" "s3FileUpload_datasource" {
  name             = "s3FileUpload"
  api_id           = aws_appsync_graphql_api.appsync.id
  service_role_arn = aws_iam_role.appsync_role.arn
  type             = "AWS_LAMBDA"
  lambda_config {
    function_arn = aws_lambda_function.s3FileUpload_lambda.arn
  }
}
