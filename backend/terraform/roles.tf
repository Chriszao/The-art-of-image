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
  name               = "${var.app}-s3-role-${var.stage}"
  assume_role_policy = data.aws_iam_policy_document.s3_role_document.json
}

# =================================================================

# ---AppsyncRole---

data "aws_iam_policy_document" "appsync_role_document" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["appsync.amazonaws.com"]
    }
  }
}


resource "aws_iam_role" "appsync_role" {
  name               = "${var.app}-appsync-role-${var.stage}"
  assume_role_policy = data.aws_iam_policy_document.appsync_role_document.json
}
