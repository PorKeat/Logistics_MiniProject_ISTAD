#!/bin/bash

# Get current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Fetch all branches from origin
git fetch origin

# Loop through all remote branches except current and main
for branch in $(git branch -r | grep 'origin/' | grep -v 'origin/main' | grep -v "origin/$current_branch" | sed 's|origin/||'); do
  echo "Merging $branch into $current_branch..."
  git merge origin/$branch --no-edit
done

echo "✅ All branches merged into $current_branch (except main)."
