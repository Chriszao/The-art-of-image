# ---uploadImage---
resource "aws_appsync_resolver" "uploadImage_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Mutation"
  field       = "uploadImage"
  data_source = aws_appsync_datasource.s3FileUpload_datasource.name
}
