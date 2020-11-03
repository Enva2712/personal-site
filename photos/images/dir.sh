#!/usr/bin/env bash

file="$(realpath "$1")"
filename="$(basename "$file")"
newdir="$(dirname "$file")/${filename%.*}"

mkdir "$newdir"
mv "$file" "$newdir/original.jpg"
