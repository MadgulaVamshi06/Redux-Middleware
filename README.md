React Component (Product):
The Product component is connected to the Redux store using useSelector to access the state and useDispatch to dispatch actions.
The handleClick function dispatches the fetchData action when the button is clicked, triggering the data fetching process.

Redux Store Configuration:
The store is created using legacy_createStore and enhanced with applyMiddleware.
The thunk middleware is applied to handle asynchronous actions, and the logger middleware is used for logging state changes and actions.

Reducer (fetchDataReducer):
The reducer handles three action types: FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, and FETCH_DATA_FAILURE.
It manages the state transitions for loading, data, and error, providing a clear structure for the data fetching lifecycle.

Action Types:
The action types are well-defined constants, which is a good practice for maintainability and avoiding typos.
