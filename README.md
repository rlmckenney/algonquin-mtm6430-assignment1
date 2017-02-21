# Code examples: List / Detail View
**Algonquin College MTM6430 - Web Applications**

This repo shows several examples of the solution to Assignment #1 (List/Detail View) using AngularJS and Bootstrap.

The [controller-logic](https://github.com/rlmckenney/algonquin-mtm6430-assignment1/tree/controller-logic) branch shows the simplest solution building on previous in-class examples. All the logic is in a single `app.js` file with the data access functions duplicated in each controller.

The [movie-db-service](https://github.com/rlmckenney/algonquin-mtm6430-assignment1/tree/movie-db-service) branch shows how we can extract the data access logic into a service object that can then be injected into the controllers as needed. This gives us a single place to maintain the implementation logic for accessing our datasource.  This is much cleaner to read and maintain.

The [custom-components](https://github.com/rlmckenney/algonquin-mtm6430-assignment1/tree/custom-components) branch shows the final version (which has been merged into the main `dev` and `master` branches) where we implemented custom components and more closely follow the best practices for code organization in a larger project. This becomes a good reference template.

You will find that this final version is heavily documented throughout the code to explain what each function and angular directive is doing. Notice that the movieDb service has been moved under the `core` module.

For further reading on creating custom components, see the [angular documentation](https://docs.angularjs.org/guide/component) and also this [step-by-step tutorial](https://docs.angularjs.org/tutorial).
