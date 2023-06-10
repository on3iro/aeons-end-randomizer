#!/bin/bash

helpFunction()
{
   echo "TODO"
   exit 1 # Exit script after printing help
}

while getopts :v: option
do
  case "${option}" in
    v ) VERSION=${OPTARG};;
    ? ) helpFunction ;; # Print help function in case flag is not available
  esac
done

echo "Version: $VERSION"

# TYPES
echo "Upping version of aer-types..."

if [[ $VERSION == "major" || $VERSION == "minor" || $VERSION == "patch"  ]]
then
  (cd ${BASH_SOURCE%/*}/../src/aer-types && yarn version --$VERSION --no-git-tag-version);
else
  (cd ${BASH_SOURCE%/*}/../src/aer-types && yarn version --new-version $VERSION --no-git-tag-version);
fi

echo "Done."

# DATA
echo "Upping version of aer-data..."
if [[ $VERSION == "major" || $VERSION == "minor" || $VERSION == "patch"  ]]
then
  (cd ${BASH_SOURCE%/*}/../src/aer-data && yarn version --$VERSION --no-git-tag-version);
else
  (cd ${BASH_SOURCE%/*}/../src/aer-data && yarn version --new-version $VERSION --no-git-tag-version);
fi
echo "Done."

# App

echo "Staging types and data for commit..."
git add ${BASH_SOURCE%/*}/../src/aer-types
git add ${BASH_SOURCE%/*}/../src/aer-data
echo "Done."

cd ${BASH_SOURCE%/*}/..;

if [[ $VERSION == "major" || $VERSION == "minor" || $VERSION == "patch"  ]]
then
  yarn version --$VERSION;
else
  yarn version --new-version $VERSION;
fi
