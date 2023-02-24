#!/bin/sh
openapi-generator-cli generate -i  https://edgeapi.flyo.cloud/nitro/openapi \
    -g javascript \
    -o . \
    --additional-properties=usePromises=true,projectName=nitrocms