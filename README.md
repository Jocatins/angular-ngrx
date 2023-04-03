# Angular Ngrx

Store is RxJS powered global state management for Angular applications, just like Redux is in React.
.
`Key Concepts`

- Actions describe unique events that are dispatched from components and services
- State changes are handled by pure functions called reducers, that take the current state and latest action to return a new state
- Selectors are pure functions used to select, derive and compose pieces of state
- State is accessed with the Store, an observable of state and an observer of actions.

# Steps

- create a file named counter.actions.ts
- define a reducer function to handle changes in the counter
- import the StoreModule and reducer file in the app.module file
- Add the StoreModule.forRoot func in the imports array, with an object containing the countReducer
- create a new component, where the buttons and the state of the counter goes in.
- inject the new created component in the declarations
- Inject store in the new component, and implement dispatch actions to the store

That is it!!!
