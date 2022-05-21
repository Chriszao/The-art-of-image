# ----------------------------------------------------------------

# ---s3FileUpload---
data "archive_file" "s3FileUpload_lambda_zip" {
  type        = "zip"
  source_dir  = "../functions/__compiled__/s3FileUpload"
  output_path = "../functions/__zip__/s3FileUpload.zip"
}

resource "aws_lambda_function" "s3FileUpload_lambda" {
  function_name    = "${var.app}-s3FileUpload-${var.stage}"
  filename         = data.archive_file.s3FileUpload_lambda_zip.output_path
  source_code_hash = data.archive_file.s3FileUpload_lambda_zip.output_base64sha256
  role             = aws_iam_role.s3_role.arn
  runtime          = "nodejs14.x"
  handler          = "index.handler"
}

# ----------------------------------------------------------------	
