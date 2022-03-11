#!/bin/bash

set -eo pipefail

source ../.env

host="$(hostname -s || echo 'localhost')"
export RABBITMQ_NODENAME="${RABBITMQ_DEFAULT_USER:-"rabbit@$host"}"

if rabbitmqctl status; then
	exit 0
fi

exit 1
