# Heroku Django React through Webpack Starter Template

An utterly fantastic project starter template for Django 1.10.

Moreover I added a standard configuration in order to use [React](https://facebook.github.io/react/) on Django through [Webpack](https://webpack.github.io/).

## Features

- Production-ready configuration for Static Files, Database Settings, Gunicorn, etc.
- Preconfigurated bundler for your React' JSX code using Webpack.
- Enhancements to Django's static file serving functionality via WhiteNoise.
- Latest Python 3.6 runtime environment. 

## How to Use

To use this project, follow these steps:

1. Create your working environment (using [*virtualenv*](https://virtualenv.pypa.io/en/stable/)).
2. Install Django (`$ pip install django`)
3. Run (`$ npm install`)
4. Create a new project using this template


## Creating Your Project

Using this template to create a new Django-React app is easy::

    $ django-admin.py startproject --template=https://github.com/darioskal/herokudjangoreact-template/archive/master.zip --name=Procfile helloworld

(If this doesn't work on windows, replace `django-admin.py` with `django-admin`)

You can replace ``helloworld`` with your desired project name.

## Deployment to Heroku

    $ git init
    $ git add -A
    $ git commit -m "Initial commit"

    $ heroku create
    $ git push heroku master

    $ heroku run python manage.py migrate

See also, a [ready-made application](https://github.com/heroku/python-getting-started), ready to deploy.

## Using Python 2.7?

Just update `runtime.txt` to `python-2.7.13` (no trailing spaces or newlines!).


## License: MIT

## Further Reading

- [Gunicorn](https://warehouse.python.org/project/gunicorn/)
- [WhiteNoise](https://warehouse.python.org/project/whitenoise/)
- [dj-database-url](https://warehouse.python.org/project/dj-database-url/)
- [React](https://facebook.github.io/react/)
- [npm](https://www.npmjs.com/)
- [Webpack](https://webpack.github.io/)
- [JSX](https://jsx.github.io/)
