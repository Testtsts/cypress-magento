#!/bin/bash

CONTAINER_NAME="cypress-test-container${2}"
IMAGE_NAME="${1}"
OUTPUT_FILE="cypress-resource-usage${2}.txt"

# Start the container
docker run --name "$CONTAINER_NAME" \
  -d "$IMAGE_NAME"\
  npm run cy:run

# docker run --mount type=bind,src="$(pwd)/wdio.conf.js",dst=/app/wdio.conf.js --name "$CONTAINER_NAME" -d "$IMAGE_NAME"\
#   npm run wdio


# Print column headers
echo "Time (s),Container_Name,Container_ID,CPU_Usage,Memory_Usage,Memory_Percent,Net_IO,Block_IO,PIDs" > "$OUTPUT_FILE" 

# Start monitoring loop
# while docker inspect --format '{{.State.Running}}' "$CONTAINER_NAME" &>/dev/null; do

start_time=$(date +%s)

while [ "$(docker inspect --format '{{.State.Running}}' "$CONTAINER_NAME" 2>/dev/null)" = "true" ]; do

  # timestamp=$(date '+%F::%T')
  current_time=$(date +%s)
  timestamp=$((current_time - start_time))

  STATS=$(docker stats --no-stream --format "{{.Name}},{{.ID}},{{.CPUPerc}},{{.MemUsage}},{{.MemPerc}},{{.NetIO}},{{.BlockIO}},{{.PIDs}}" 2>/dev/null | grep "$CONTAINER_NAME")
  # STATS=$(docker stats --no-stream --format "{{.CPUPerc}},{{.MemUsage}},{{.MemPerc}},{{.NetIO}},{{.BlockIO}},{{.PIDs}}" 2>/dev/null | grep "$CONTAINER_NAME")

  if [ -n "$STATS" ]; then
    echo "$timestamp,$STATS" >> "$OUTPUT_FILE"
  else
    echo "$timestamp ERROR timeout or no output" >> "$OUTPUT_FILE"
  fi
  
done
docker container stop $CONTAINER_NAME