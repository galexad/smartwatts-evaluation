#!/bin/bash

if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

if [ "$#" -ne 1 ]; then
  echo "Host name is required"
  exit 1
fi

HOST_NAME="$1"

if [ "$HOST_NAME" = "GL2" ]; then
  USB_NUMBER=0
elif [ "$HOST_NAME" = "GL3" ]; then
  USB_NUMBER=2
else
  echo "Invalid HOST_NAME. Please provide either GL2 or GL3."
  exit 1
fi

tmux kill-session -t wattsup-$USB_NUMBER
