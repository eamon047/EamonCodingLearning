#!/bin/bash

while getopts "n:" opt; do
  case $opt in
    n)
      USERNAME="$OPTARG"
      ;;
    *)
      echo "Usage: $0 -n <username>"
      exit 1
      ;;
  esac
done

if [ -z "$USERNAME" ]; then
  echo "Error: Missing -n option for username."
  echo "Usage: $0 -n <username>"
  exit 1
fi

echo "Username: $USERNAME"

mkdir -p archive

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_PATH=archive/engineering_internship_2025_${USERNAME}_${TIMESTAMP}.zip

zip -r "$ARCHIVE_PATH" . -x .git/\* .github/\* node_modules/\* archive/\*
echo "Archive created: archive/${ARCHIVE_PATH}"
