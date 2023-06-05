if [ "$#" -ne 2 ]; then
  echo "File name and trial number are required"
  exit 1
fi

FILE_NAME="$1"
TRIAL_NUMBER="$2"

cd /home/gabbie/smartwatts-evaluation/smartwatts || exit

# a command that takes the file results and moves them to measurements
echo  $sudoPassword| sudo -S docker exec -it smartwatts-power-api-smartwatts-1 bash -c "cd ..; chmod -R 777 powerapi/;exit;"
# sudo -S docker cp smartwatts-power-api-smartwatts-1:/opt/powerapi/ $(pwd)/measurements$TRIAL_NUMBER/$FILE_NAME  > /dev/null 2>&1 & sleep 10
echo $sudoPassword | sudo -S docker cp smartwatts-power-api-smartwatts-1:/opt/powerapi/cpu-train-ticketing-system-ts-notification-service-1 $(pwd)/measurements/$TRIAL_NUMBER/$FILE_NAME  > /dev/null 2>&1 & sleep 10
# kill tmux session
echo "Stopping smartwatts session"
tmux kill-session -t smartwatts
echo "smartwatts session stopped"
