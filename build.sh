#!/bin/bash

git config --global user.email "bot@truecharts.org"
git config --global user.name "TrueCharts-Bot"

## AutoUpdate Website BUilder using Git
updater(){
echo -e "${BWhite}Checking for updates...${Color_Off}"
git remote set-url origin "https://github.com/truecharts/website.git"
BRANCH=$(git rev-parse --abbrev-ref HEAD)
git fetch -q
git update-index -q --refresh
if [[ $(git status --branch --porcelain) == *"behind"* ]]; then
  echo -e "${IPurple}Websuite Builder requires update${Color_Off}"
  git reset --hard -q
  git checkout -q "${BRANCH}"
  git pull -q
  echo "script updated"
  if [[ "$CHANGED" == "true" ]]; then
    echo "LOOP DETECTED, exiting"
    exit 1
  else
    echo "restarting script after update..."
    export CHANGED="true"
    . "/data/build.sh" "$@"
    exit
  fi
else
  echo -e "${IGreen}script up-to-date${Color_Off}"
  export CHANGED="false"
fi
echo ""
}
export -f updater

updater

yarn install --frozen-lockfile

yarn deploy
