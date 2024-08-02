1. Установка
Работаем через nerdctl/docker:

```shell
nerdctl build -t self .
```

```shell
nerdctl run -d -p 3000:3000 --name my-next-app self 
```