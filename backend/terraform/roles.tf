# =================================================================

# ---S3Role---

data "aws_iam_policy_document" "s3_role_document" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}


resource "aws_iam_role" "s3_role" {
  name               = "s3-role"
  assume_role_policy = data.aws_iam_policy_document.s3_role_document.json
}
