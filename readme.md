# s3signed

Generate a temporary signed URL for a private object on S3.

## Installation

```
npm install s3signed -g
```

## Usage

First, confirm that your shell is configured with appropriate AWS credentials.

```
s3signed <s3 url> [seconds until expires]
```

- `s3url` must be of the form `s3://my-bucket/my/private/file`
- Max duration is linked to your current AWS CLI credentials. For maximum duration, re-auth before generating a signed URL
- Default duration is 10 min if unspecified

## Example

```
# Copy the signed URL to the clipboard on OSX
$ s3signed s3://my-bucket/my/private/file 3600 | pbcopy
```
