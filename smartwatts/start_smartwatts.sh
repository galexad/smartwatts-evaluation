#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "File name and trial number are required"
  exit 1
fi

FILE_NAME="$1"
RUN_NUMBER="$2"

echo "Starting smartwatts logging"
cd /home/gabbie/smartwatts-evaluation/smartwatts || exit
mkdir -p measurements/$RUN_NUMBER

echo "Creating smartwatts session..."
tmux new -s smartwatts -d "echo $sudoPass | sudo -S docker-compose up"

