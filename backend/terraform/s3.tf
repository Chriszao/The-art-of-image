resource "aws_s3_bucket" "image_attachment_bucket" {
  bucket = "${var.app}-images"

}

resource "aws_s3_bucket_acl" "image_attachment_bucket_acl" {
  bucket = aws_s3_bucket.image_attachment_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_cors_configuration" "image_attachment_bucket_cors" {
  bucket = aws_s3_bucket.image_attachment_bucket.bucket

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["POST", "GET", "DELETE"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}
