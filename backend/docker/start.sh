#!/bin/sh

echo 'Installing composer dependencies...'

if [ ! -d 'vendor']; then
  composer install
fi

echo 'Waiting for PostgreSQL...'

until nc -z db 5432
do
  sleep 1
done

echo 'Database is ready!'

php artisan migrate --force --no-interaction

php artisan serve --host=0.0.0.0 --port=8000