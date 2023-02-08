#!/bin/sh
openapi-generator-cli generate -i  https://api.flyo.cloud/nitro/openapi \
    -g javascript \
    --additional-properties=usePromises=true,projectName=nitrocms