#!/bin/sh

jq -r ".dependencies | keys | .[]" ./package.json | tr "\n" " "
