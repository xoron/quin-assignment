challenge:

general guide. for more details see scripts in package.json file.  included in the repository is:
- e2e tests with playwrite - yarn playwrite
- unit tests with jest - yarn test
- start frontend - yarn start:ui

you will need to start both frontend and bakcend separately. at the same time for the app to recieve the list of companies from the backend on the UI.

i have included things like code coverage reports so you dont need to generate it.

==========================================================================

improvements that could be done:
    - add pagination
    - make sure all the filters works as they should
    - not using default configs. it is good practice to have a config so all users of the repository are aligned on expectations. a few cofigs that can be added/updated:
        - typescript
        - eslint
        - jest
    - precommit hooks to make sure code user doesnt commit incorrect code.
    - better project structure. in this example it is a monorepo-like structure for the purpose of an easy deliverable. but in a more professional system, i would consider it better to separate into different respositories. it would have a bigger maintainance overhead, but it would be easier to ensure code quality and stability. by making it so changes are easier to track. but the implementation also sould be based around business requirements and having everything as a monorepo could make deliverables faster (which can be a requirement if business demands).
    - more github actions to do common tasks. but this should be discussed with a team. from the onset its clear that ci related tasks should be run in github actions.
        - lint
        - test
        - gitflow automation
    - more unit tests - here is a kind of bad unit testing where the aim was to create 100% code coverage. better would be if there were unit tests for each file. i didnt include it in this work because i considered it out-of-scope for this deliverable, but wanted to show i am capable.
    - add error logging like sentry.io to monitor issues in production
    - add form structure and validation with formik+yup

==========================================================================

todo:
typescript
react
react-router-dom
eslint
prettier
jest
react testing library
playwrite
