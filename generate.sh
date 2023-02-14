#!/bin/sh
openapi-generator-cli generate -i  https://api.flyo.cloud/nitro/openapi \
    -g javascript \
    -o . \
    --additional-properties=usePromises=true,projectName=nitrocms \
    --skip-validate-spec