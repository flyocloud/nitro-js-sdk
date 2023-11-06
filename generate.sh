#!/bin/sh
openapi-generator-cli generate -i  https://api.flyo.cloud/nitro/v1/openapi \
    -g javascript \
    -o . \
    --additional-properties=usePromises=true,projectName=@flyo/nitro-js