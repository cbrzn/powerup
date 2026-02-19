#!/usr/bin/env bash

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <plan_file_path>" >&2
  exit 1
fi

plan_file="$1"

if ! command -v codex >/dev/null 2>&1; then
  echo "Error: 'codex' is not available in this environment." >&2
  exit 1
fi

if [[ ! -f "$plan_file" ]]; then
  echo "Error: plan file not found: $plan_file" >&2
  exit 1
fi

if [[ ! -r "$plan_file" ]]; then
  echo "Error: plan file is not readable: $plan_file" >&2
  exit 1
fi

prompt=$(
  cat <<EOF
You're a senior software developer. This is a plan for executing a task; the entire description and how to do it is there. Read it and give any feedback if needed. If it is okay, say exactly: 'No feedback to give. This is perfect.'

Plan file path: $plan_file
EOF
)

response="$(codex exec "$prompt")"
printf '%s\n' "$response"
