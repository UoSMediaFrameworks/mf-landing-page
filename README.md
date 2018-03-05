# [Start Bootstrap - Creative](https://startbootstrap.com/template-overviews/creative/)

[Creative](http://startbootstrap.com/template-overviews/creative/) is a one page creative theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Server Setup

In this order:

- `npm install`
- `gulp rebuild` rebuild page_source
- `gulp copy` copy public files from page_source
- `gulp start` start nodemon to run the express server

Note that by default the server will run on port 3000, add enviroment variable to change this.

## Azure Deployment

After running Server Setup locally

bash 

`zip -r myAppFiles.zip .`

PowerShell

`Compress-Archive -Path * -DestinationPath myAppFiles.zip`
   
### Deploying the zip
   
- visit https://<app name>.scm.azurewebsites.net/ZipDeploy

- app name = uos-sceneeditor

- Upload the zip

- web.config required for iis to handover requests to express and nodejs when running in Azure

#### Caveats

- Ensure to match nodejs and npm version
- npm 3+ flatten node_module deps - this is key for reduces the file path length problem that occurs on Azure

## Preview

[![Creative Preview](preview.JPG#1)](https://blackrockdigital.github.io/startbootstrap-creative/)

**[View Live Preview](https://blackrockdigital.github.io/startbootstrap-creative/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-creative/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-creative.svg)](https://www.npmjs.com/package/startbootstrap-creative)
[![Build Status](https://travis-ci.org/BlackrockDigital/startbootstrap-creative.svg?branch=master)](https://travis-ci.org/BlackrockDigital/startbootstrap-creative)
[![dependencies Status](https://david-dm.org/BlackrockDigital/startbootstrap-creative/status.svg)](https://david-dm.org/BlackrockDigital/startbootstrap-creative)
[![devDependencies Status](https://david-dm.org/BlackrockDigital/startbootstrap-creative/dev-status.svg)](https://david-dm.org/BlackrockDigital/startbootstrap-creative?type=dev)

## Download and Installation

To begin using this template, choose one of the following options to get started:
* [Download the latest release on Start Bootstrap](https://startbootstrap.com/template-overviews/creative/)
* Install via npm: `npm i startbootstrap-creative`
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-creative.git`
* [Fork, Clone, or Download on GitHub](https://github.com/BlackrockDigital/startbootstrap-creative)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

After installation, run `npm install` and then run `gulp dev` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

#### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp dev` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp sass` compiles SCSS files into CSS
- `gulp minify-css` minifies the compiled CSS file
- `gulp minify-js` minifies the themes JS file
- `gulp copy` copies dependencies from node_modules to the vendor directory

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/BlackrockDigital/startbootstrap-creative/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/creative/).

## Custom Builds

You can hire Start Bootstrap to create a custom build of any template, or create something from scratch using Bootstrap. For more information, visit the **[custom design services page](https://startbootstrap.com/bootstrap-design-services/)**.

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* https://startbootstrap.com
* https://twitter.com/SBootstrap

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* http://davidmiller.io
* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2018 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-creative/blob/gh-pages/LICENSE) license.
