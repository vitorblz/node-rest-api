#!/bin/bash
curl http://localhost:3001/upload/file -X POST -v \
-H "Content-type: application/octet-stream" \
-H "filename: image2.png" \
--data-binary @files/image.png;

