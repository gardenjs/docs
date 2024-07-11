# Hooks

Sometimes you need to setup the environment in a specific state, so that the component will rendered correctly. E.g. you have a store object for a user, a session-cookie or you want to check if a value is read from the localStorage.

Gardenjs provides hook-functions which will be executed before or after rendering and after unmounting a component.

| location               | hook      | executed                                                                                                                                                                                  |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*.das.hook.js         | beforeAll | executed before any component inside the directory or below is rendered. When selecting another example or another component in same hierarchy, this function will not be executed again. |
| \*.das.hook.js         | before    | executed always when component a new component or example is selected                                                                                                                     |
| \*.das.hook.js         | after     | executed after component is umounted/destroyed                                                                                                                                            |
| \*.das.hook.js         | afterAll  | executed after component is unmounted/destroyed and another component outside of the hierarchy is selected                                                                                |
| component description  | beforeAll | executed before component is rendered. When selecting another example, this function will not be executed again.                                                                          |
| component description  | before    | executed always when another example of same component is selected                                                                                                                        |
| component description  | after     | executed after component is umounted/destroyed                                                                                                                                            |
| component description  | afterAll  | executed after component is unmounted/destroyed and another component is selected                                                                                                         |
| in example description | before    | executed when the example is selected after component was updated                                                                                                                         |
| in example description | after     | executed when another example or component is selected                                                                                                                                    |

If you want to share the same setup for all examples of one component use the hooks inside the component description
If you want to share the same setup for all components or a group of components then use hook files ( `*.das.hook.js` or `*.das.hook.ts` )

## Executing order

The order of executing the hooks is as:

- beforeAll hooks
- before hooks

And the order inside beforeAll hooks is

- hook file
- component description
- then example description.

The after hooks are executed in reverse order: first after hooks then afterAll hooks.

### Example

Given the following projectstructur:

```
folder A
  glob1.das.hook.js
  comp1.das.js
  comp2.das.js
folder B
  glob2.das.hook.js
  comp3.das.js
```

glob1.das.hook.js and glob2.das.hook:

```js
export default {
  ...
  beforeAll: glob1BeforeAll
  afterAll: glob1AfterAll
  before: glob1Before
  after: glob1After
  ...
```

comp1.das.js and comp2.das.js

```js
export default {
  ...
  beforeAll: comp1BeforeAll
  afterAll: comp1AfterAll
  before: comp1Before
  after: comp1After
  ...
  examples: [
    ...
    {title: ..., before: example1Before, after: example1After}
    {title: ..., before: example2Before, after: example2After}
    ...
  ]
}
```

- selecting a component first:

  1. glob1BeforeAll
  2. comp1BeforeAll
  3. glob1Before
  4. comp1Before
  5. example1Before

- selecting another example of same component

  1. example1After
  2. comp1After
  3. glob1After
  4. glob1Before
  5. comp1Before
  6. example2Before

- selecting another component in same hierarchy

  1. example2After
  2. comp1After
  3. glob1After
  4. comp1AfterAll
  5. comp2BeforeAll
  6. glob1Before
  7. comp2Before
  8. example1Before

- selecting another component in another hierarchy

  1. example1After
  2. comp2After
  3. glob1After
  4. comp1AfterAll
  5. glob1AfterAll
  6. glob2BeforeAll
  7. comp3BeforeAll
  8. glob2Before
  9. comp3Before
  10. exampleBefore
