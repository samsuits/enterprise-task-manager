FROM php:8.2-cli

WORKDIR /var/www

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    netcat-openbsd

RUN docker-php-ext-install pdo pdo_pgsql

COPY . .

CMD ["sh","docker/start.sh"]