# Сайт-визитка

## О проекте

Данный сайт был разработан для представления своих навыков, опыта и квалификациив. Также используя данный сайт является онлайн-резюме для потенциальных работодателей и клиентов и средством для продвижения своих услуг.

## Стек-технологий

Для разработки этого сайта использовались:

- [ReactJS](https://reactjs.org/) - фреймворк для удобной модульности кода
- [Vite](https://vitejs.dev/) - то, что ускорит твою работу на React
- <s>[Tailwindcss](https://tailwindcss.com/) - замена всем стилям и Bootstrap</s>
- [SCSS](https://sass-scss.ru/) - предпроцессор для крутой работы с CSS
- [Visual Studio Code](https://code.visualstudio.com/) - лучная среда разработки в мире
- [Nginx](https://nginx.org/ru/) - какой лучший сервер для собственного хостинга?
- [Docker](https://www.docker.com/) - когда лень 40 раз качать образы и библиотеки

## Установка

<s>Для работы необходим [Node.js](https://nodejs.org/) 16+ версии.</s> Для работы необходимо установить на сервере Docker, а также NGINX для проксирования

1. Скачайте репозиторий

```sh
git clone https://github.com/Animila/card_website.git
cd card_website
```

2. Создайте образ

```sh
docker build -t "card-website"
```

3. Запустите

```sh
docker run -p 9834:9834 card-website
```

4. Создайте конфигурацию для nginx

```nginx
worker_processes auto;
events { worker_connections 1024; }

upstream me_stream {
  server localhost:9834;
}

server {
	if ($host = {WWW-DOMAIN}) {
		return 301 https://$host$request_uri;
	}


	if ($host = {DOMAIN}) {
		return 301 https://$host$request_uri;
	}

	listen 80;
	server_name {DOMAIN} {WWW-DOMAIN};
	return 404;
}



server {
	listen 443 ssl http2;
	client_max_body_size 64M;
	server_name {DOMAIN} {WWW-DOMAIN};
	server_tokens off;

	gzip            on;
	gzip_vary       on;
	gzip_http_version  1.0;
	gzip_comp_level 5;
	gzip_types application/atom+xml application/javascript application/json application/rss+xml application/vnd.ms-fontobject application/x-font-ttf application/x-web-app-manifest+json application/xhtml+xml application/xml font/opentype image/svg+xml image/x-icon text/css text/plain text/x-component;
	gzip_proxied    no-cache no-store private expired auth;
	gzip_min_length 256;
	gunzip          on;

	if ( $host ~* www\.(.*) ) {
		set $host_without_www $1;
		rewrite ^(.*)$ http://$host_without_www$1 permanent;
	}
	location / {
		proxy_pass http://me_stream;
		proxy_set_header X-Forwarded-Proto http;
		proxy_set_header X-Url-Scheme $scheme;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $http_host;
		proxy_redirect off;
		add_header X-Frame-Options SAMEORIGIN;
		proxy_connect_timeout 60;
		proxy_read_timeout 900s;
		add_header X-Content-Type-Options nosniff;
		add_header X-XSS-Protection "1; mode=block";
	}
}

```

## Использование

После установки и запуска локального сервера, вы можете начать изменять файлы на свое усмотрение. Для применения новых обновлений вам надо в запущенной консоли нажать "R", тогда Vite автоматически перезагрузит сервер и выведет ваши изменения.

Во время написания кода помните, что если у вас выходит больше двух компонентов для одного блока, то создавайте отдельные папки в 'components'. Все изображения сохраняйте в 'public/assets'

## Лицензия

GNU

## Todo лист

- Сделать отдельные страницы для портфолио
- Кнопки социальных сетей внизу

## Контакты

- hristoforovila5@gmail.com
