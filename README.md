static-resource-handling-demo
=============================
This app demonstrates static web resource handling for a Single page application with a Spring-Boot based application.

Javascript based application have extremely capable build systems through gulp, grunt and other available toolchains.
Spring recommendation is leverage those toolchains where it makes sense, in this specific instance to build the UI using angularjs.

Building the application:
=========================

Just run:

    mvn install

This should build the client build chain consisting of:
    1. Running `npm install` to install bower, gulp
    2. Running `bower install` to download all the UI required dependent libraries
    3. Running `gulp install` to run the UI build - minifying js, inlining bower dependencies in html.
    4. Jar'ing the client


Now, cd to server folder and run the command to start up the spring-boot app:

    cd server
    mvn spring-boot:run


