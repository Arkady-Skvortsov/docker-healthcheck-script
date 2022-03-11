#!/bin/bash

count=0;
retries=$1;

while [ "${count}" != "${retries}" ];
do
  docker inspect --format='{{json .State.Health}}' $3;

  count=$((++count));

  if [ "${count}" == "${retries}" ]; then
      echo "Done with $3";

      exit 1;
  fi

  sleep $2;
done
