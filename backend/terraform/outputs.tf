output "aws_region" {
  description = "AWS region"
  value       = var.region
  sensitive   = true
}

output "graphql_api_url" {
  description = "AppSync API URL"
  value       = aws_appsync_graphql_api.appsync.uris.GRAPHQL
  sensitive   = true
}

output "graphql_api_id" {
  description = "AppSync API ID"
  value       = aws_appsync_graphql_api.appsync.id
  sensitive   = true
}

output "graphql_auth_type" {
  description = "AppSync API ID"
  value       = aws_appsync_graphql_api.appsync.authentication_type
  sensitive   = true
}

output "graphql_api_key" {
  description = "AppSync API Key"
  value       = aws_appsync_api_key.appsync_api_key.key
  sensitive   = true
}
