#!/bin/bash

# Get current BRANCH name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Fetch all BRANCHes from origin
git fetch origin

# Loop through all remote BRANCHes except current and main
for BRANCH in $(git BRANCH -r | grep 'origin/' | grep -v 'origin/main' | grep -v "origin/$CURRENT_BRANCH" | sed 's|origin/||'); do
  echo "Merging $BRANCH into $CURRENT_BRANCH..."
  git merge origin/$BRANCH --no-edit
done

echo "✅ All BRANCHes merged into $CURRENT_BRANCH (except main)."
