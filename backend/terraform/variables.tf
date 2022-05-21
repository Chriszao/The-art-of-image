variable "credentials" {
  description = "AWS credentials"

  type    = string
  default = "default"
}

variable "region" {
  description = "AWS region"

  type    = string
  default = "us-east-1"
}

variable "app" {
  description = "APP name"

  type    = string
  default = "taoi"
}

variable "stage" {
  description = "Development stage"

  type    = string
  default = "dev"
}
