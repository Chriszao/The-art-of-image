resource "aws_appsync_graphql_api" "appsync" {
  name                = "${var.app}-api-${var.stage}"
  schema              = file("../../frontend/schema.graphql")
  authentication_type = "API_KEY"
}

resource "aws_appsync_api_key" "appsync_api_key" {
  api_id  = aws_appsync_graphql_api.appsync.id
  expires = "2022-08-01T04:00:00Z"
}
