# Docker healtchcheck script

You need to know about you'r containers health! (It's useful in production 😄)

<p align="center"><img src="./assets/docker-healthcheck.png" width="500" /></p>

# About

It's for automatic healthcheck, when you'r containers up; script do few retrais in some secs or min interval

# How to use

(YOU) Build images, play with settings shell script and run it:

```sh
  docker-compose up
```

(⚠) Sometimes would be error with shell script and in console you would seen `unexpected end of file`; If you don't want to see it, save shell script in `LF` mode not `CRLF`

(💻) in VScode it would be here 👉

<p align="center"><img src="./assets/vs-code-screen-1.png" width="400" /></p>

and you need to change param here 👉

<p align="center"><img src="./assets/vs-code-screen-2.png" width="400" /></p>
