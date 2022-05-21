# =================================================================

# ---S3Role x S3Policy---

resource "aws_iam_role_policy_attachment" "lambda_attachment_s3" {
  role       = aws_iam_role.s3_role.name
  policy_arn = aws_iam_policy.s3_policy.arn
}

# =================================================================

# ---S3Role x CloudWatchPolicy---

resource "aws_iam_role_policy_attachment" "lambda_attachment_cloud_watch" {
  role       = aws_iam_role.s3_role.name
  policy_arn = aws_iam_policy.cloud_watch_policy.arn
}

# =================================================================


