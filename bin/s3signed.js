#!/usr/bin/env node

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var url = require('url');

var args = process.argv.slice(2);
if (args.length < 1) {
  console.log('Usage: signed <s3url> [seconds until expire]');
  process.exit(1);
}

var uri = url.parse(args[0]);
if (uri.protocol !== 's3:') {
  console.error('Error: provide a valid S3 url');
  process.exit(1);
}
var params = {
  Bucket: uri.hostname,
  Key: uri.pathname.slice(1),
  Expires: Number(args[1]) || 600
};

s3.getSignedUrl('getObject', params, function(err, signedUrl) {
  if (err) return console.error(err);
  process.stdout.write(signedUrl);
});
