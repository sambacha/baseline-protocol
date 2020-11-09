#!/bin/bash
truffle-abi --version || npm i -g truffle-abi
truffle compile
truffle-abi -d $PWD/artifacts
