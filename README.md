# Code examples: List / Detail View
**Algonquin College MTM6430 - Web Applications**

This repo shows several examples of the solution to Assignment #1 (List/Detail View) using AngularJS and Bootstrap.

The "controller-logic" branch shows the simplest solution buiding on previous in-class examples. All the logic is in a single app.js file with the data access functions duplicated in each controller.

The "movie-db-service" branch shows how we can extract the data access logic into a service object that can then be injected into the controllers as needed. This gives us a single place to maintain the implementation logic for accessing our datasource.  This is much cleaner to read and maintain.

The "master" branch and "dev" branch have merged the code from the "custom-components" branch and shows the final version where we implemented custom components and more closly follow the code organization of a larger project. This becomes a good reference template.

You will find that this final version is heavily documented throughout the code to explain what each function and angular directive is doing.
