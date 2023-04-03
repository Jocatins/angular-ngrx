# Angular Ngrx

Store is RxJS powered global state management for Angular applications, just like Redux is in React.
.
`Key Concepts`

- Actions describe unique events that are dispatched from components and services
- State changes are handled by pure functions called reducers, that take the current state and latest action to return a new state
- Selectors are pure functions used to select, derive and compose pieces of state
- State is accessed with the Store, an observable of state and an observer of actions.
