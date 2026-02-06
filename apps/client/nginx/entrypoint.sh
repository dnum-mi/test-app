#!/bin/sh

ROOT_DIR=/opt/bitnami/nginx/html

populate () {
  sed -i 's|'$1'|'$(eval "echo \${$1}")'|g' $2
}


echo "Replacing env constants in JS"
for file in $ROOT_DIR/assets/*.js; do
  echo "Processing $file ...";

  populate VITE_API_URL $file
done

nginx -g 'daemon off;'
