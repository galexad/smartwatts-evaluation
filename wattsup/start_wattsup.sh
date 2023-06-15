#!/bin/bash

if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

if [ "$#" -ne 3 ]; then
  echo "Host name, file name and run number are required"
  exit 1
fi

HOST_NAME="$1"
FILE_NAME_SUFFIX="$2"
RUN_NUMBER="$3"

if [ "$HOST_NAME" = "GL2" ]; then
  USB_NUMBER=0
elif [ "$HOST_NAME" = "GL3" ]; then
  USB_NUMBER=2
else
  echo "Invalid HOST_NAME. Please provide either GL2 or GL3."
  exit 1
fi

cd /home/gabbie/wattsuppro_logger/ || exit
echo $sudoPass  | sudo -S mkdir -p train-ticket/$HOST_NAME/$RUN_NUMBER/

echo "Creating tmux session..."

tmux new -s wattsup-$USB_NUMBER -d "cd /home/gabbie/wattsuppro_logger;
echo $sudoPass | sudo -S python3 WattsupPro.py -t 50000000000000 -l -p /dev/ttyUSB$USB_NUMBER -o train-ticket/$HOST_NAME/$RUN_NUMBER/sample-$(date "+%Y.%m.%d-%H.%M.%S")-$FILE_NAME_SUFFIX.log >> logfile.log 2>&1"
echo "WattsupPro started"
