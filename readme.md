## Summary
A scalable boilerplate for AngularJS 1.x

### Purpose
Websites can be anything from a few pages to large scale sites with hundreds of different pages and radically different subsections.  For example, a website's "shop" and "support" sections may not have any functionality that is the same. This boilerplate is designed to facilitate being able to scale from the smallest to the largest websites.

### How it works
There is a base set of files that are loaded to initialize your app. Shared services, directives, setup, etc. Subsections are a self-contained set of files which can be plugged in, moved, renamed, or include their own subsections. This allows for ease of file management and separation of content and functionality between sections.

The site is built up by chaining "include" files using [RequireJS](http://requirejs.org/).

There are some basic comments within the files explaining what things are doing and where to make changes. Of course, this is just an example of what can be done.  Everyone has their own preferences for file structure and site organization. If you look through the code for a few minutes, it should become fairly self-explanatory as to the basic principle of how to modularize your site for ease of management. From there, you can use it as a guide to set things up however you prefer.

### Structure
The root is `/public/`.
 - `index.html` is the basic shell for the app
 - `main.js` has the configuration for `requirejs` and initializes the app.
 - `/css/` contains the CSS files. This setup only uses client-side technologies only, so change as needed for using Less/Sass.
 - `/views/` all of the .html snippets used in the global views
 - `/js/` has all of the global js files
   - `/js/app.js` the initial setup for your angular application `angular.module(...)`
   - `/js/inc.js` includes all of the "global" files and links to the include files for each of the subsections. When you add files, remember to add them here.
   - `/js/routes.js` the initial routing declarations
   - `/js/controllers/`, `/js/services/`, `/js/directives/` have all of your "global" application files
 - `/libs/` where plugins and utilities are installed.

For a small site, that is all you need.

To add subsections, you can add in one or more folders with all of the files for that subsection.  In this example, it uses `/section1/` and `/section2/`, however you can structure things however you like.

The subsection structure

 - `/section/inc.js` used to require all of the JS files for the subsection.
 - `/section/routes.js` all of the routing for this section.
 - `/section/views/`, `/section/controllers/`, `/section/services/`, `/section/directives/` the .js and .html files specific to this subsection.


The `inc.js` files are the key to keeping everything modular. When you add a new section, you just add a line pointing to its "include" file in the parent include file. If you move/add a section or change the folder name, you simply modify the parent `inc.js` to point to the location of the `inc.js` for the module.  You can continue to chain subsections by adding them the same way but within the section folder and including it's `inc.js` in the parent `inc.js`. Anything that is added/moved/renamed only requires a single line change in the parent `inc.js` (or 2 of moving from one parent structure to another).

In the top-level `main.js` there is a path definition for the subsections.  This is not required, but is convenient for allowing each section to have a base path for reference. That way if the folder structure is changed, you only have to modify the line for the section in `main.js` to update the base path, instead of having to modify each line in the `inc.js` to reflect the new folder structure.


### Plugins

The following are the angular plugins and other utilities included with the package for convenience. Technically, none of them are required other than angularjs and requirejs.

 - [RequireJS](http://requirejs.org/)
 - [AngularJS](https://angularjs.org/)
 - [Angular UI Router](https://ui-router.github.io/)
 - [Angular UI Router Helper](https://github.com/marklagendijk/ui-router.stateHelper)
 - [Angular UI Animate](https://docs.angularjs.org/api/ngAnimate)
 - [Bootstrap](http://getbootstrap.com/)
 - [Angular UI Bootstrap](https://angular-ui.github.io/bootstrap/)
 - [jQuery](http://jquery.com/)
 - [Lodash](https://lodash.com/)
 - [Font-Awesome](http://fontawesome.io/) added in `index.html`. Very useful set of icons.


### Installing

#### GitHub
[https://github.com/bartmelton/angular-scalable-boilerplate](https://github.com/bartmelton/angular-scalable-boilerplate)


#### NPM
 ```
  npm install angular-scalable-boilerplate
 ```
NPM should run `bower install` when it is complete.  If not, run it manually.
