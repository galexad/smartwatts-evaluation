#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "File name and trial number are required"
  exit 1
fi

FILE_NAME="$1"
TRIAL_NUMBER="$2"

echo "Starting smartwatts logging"
cd ~/smartwatts-evaluation/smartwatts || exit
mkdir -p measurements/$TRIAL_NUMBER

echo "Creating smartwatts session..."
tmux new -s smartwatts -d "echo $sudoPassword | sudo -S docker-compose up"
