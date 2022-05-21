# =============================================================================

# ---S3Policy---

data "aws_iam_policy_document" "s3_policy_document" {
  statement {
    actions = [
      "s3:PutObjectAcl",
      "s3:PutObject",
      "s3:GetObject",
      "s3:ListObject",
      "s3:DeleteObject",
    ]
    effect    = "Allow"
    resources = ["arn:aws:s3:::image-attachments/*", "arn:aws:s3:::image-attachments"]
  }
}


resource "aws_iam_policy" "s3_policy" {
  name   = "${var.app}-s3-policy-${var.stage}"
  policy = data.aws_iam_policy_document.s3_policy_document.json
}

# =============================================================================

# ---CloudWatchPolicy---

data "aws_iam_policy_document" "cloud_watch_policy_document" {
  statement {
    actions = [
      "logs:CreateLogStream",
      "logs:CreateLogGroup",
      "logs:PutLogEvents"
    ]
    effect    = "Allow"
    resources = ["*"]
  }
}

resource "aws_iam_policy" "cloud_watch_policy" {
  name   = "${var.app}-cloud-watch-policy-${var.stage}"
  policy = data.aws_iam_policy_document.cloud_watch_policy_document.json
}

# =============================================================================

# ---AppSyncInvokeLambdaPolicy---

data "aws_iam_policy_document" "appsync_invoke_lambda_policy_document" {
  statement {
    actions   = ["lambda:InvokeFunction"]
    effect    = "Allow"
    resources = ["*"]
  }
}

resource "aws_iam_policy" "appsync_invoke_lambda_policy" {
  name   = "${var.app}-appsync-invoke-lambda-policy-${var.stage}"
  policy = data.aws_iam_policy_document.appsync_invoke_lambda_policy_document.json
}

# =============================================================================
