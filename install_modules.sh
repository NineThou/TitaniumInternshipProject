#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

FRONTEND_DIR=$(pwd)
BACKEND_DIR=$(pwd)/server

cd "$FRONTEND_DIR"
npm install
cd "$BACKEND_DIR"
npm install