if [ "$#" -ne 2 ]; then
  echo "File name and trial number are required"
  exit 1
fi

FILE_NAME="$1"
RUN_NUMBER="$2"

cd /home/gabbie/smartwatts-evaluation/smartwatts || exit

# a command that takes the file results and moves them to measurements
echo  $sudoPass | sudo -S docker exec -i smartwatts-power-api-smartwatts-1 bash -c "cd ..; chmod -R 777 powerapi/;exit;"
echo  $sudoPass | sudo -S docker cp smartwatts-power-api-smartwatts-1:/opt/powerapi/ $(pwd)/measurements/$RUN_NUMBER/$FILE_NAME  & > /dev/null 2>&1  & sleep 10

# kill tmux session
echo "Stopping smartwatts session"
tmux kill-session -t smartwatts
echo "smartwatts session stopped"
