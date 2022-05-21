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

    resources = ["arn:aws:s3:::image-attachments/*", "arn:aws:s3:::image-attachments"]
  }
}


resource "aws_iam_policy" "s3_policy" {
  name   = "s3-policy"
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

    resources = ["*"]
  }
}

resource "aws_iam_policy" "cloud_watch_policy" {
  name   = "cloud-watch-policy"
  policy = data.aws_iam_policy_document.cloud_watch_policy_document.json
}

# =============================================================================
