#!/usr/bin/env bash

set -eu

usage () { echo "$0 ...IMAGEFILE"; }
convert_args="-auto-orient -quality 80"

if [[ $# -eq 0 ]]; then
	usage; exit
fi

for path in "$@"; do
	original="$(realpath "$path")"
	dir="$(dirname "$original")"

	if [[ ! -f "$original" ]]; then
		echo "No such file"
		exit 1
	fi

	echo "Resizing $path"

	permutations=(
		"$convert_args -resize x500 $dir/small.jpg"
		"$convert_args -resize x500 $dir/small.jp2"
		"$convert_args -resize x500 $dir/small.webp"
		"$convert_args -resize x720 $dir/medium.jpg"
		"$convert_args -resize x720 $dir/medium.jp2"
		"$convert_args -resize x720 $dir/medium.webp"
		"$convert_args -resize x1280 $dir/large.jpg"
		"$convert_args -resize x1280 $dir/large.jp2"
		"$convert_args -resize x1280 $dir/large.webp"
	)

	for args in "${permutations[@]}"; do
		# disable shellcheck to allow word expansion
		# shellcheck disable=SC2086
		convert "$original" $args
	done
done
