window.onload = () => {
  const CHANGE_THEME = 'CHANGE_THEME'; // use to highlight the colors when using the CHANGE_THEME in the cases

  function themeReducer(state = { theme: 'light' }, action) {
    // Booting the state with the light theme
    switch (action.type) {
      // case CHANGE_TO_DARK:
      //   return { ...state, theme: 'dark' };
      // case CHANGE_TO_LIGHT:
      //   return { ...state, theme: 'light' }; This is the first way we think, but...
      case CHANGE_THEME:
        return { ...state, theme: action.payload.theme }; // Payload is a non-official,
      // community accepted naming convention for the property that holds the actual
      // data in a Redux action object.
      default:
        return state;
    }
  }

  const store = Redux.createStore(themeReducer); // The store receives a reducer as a parameter.

  const lightSwitch = document.querySelector('#light-switch');

  lightSwitch.addEventListener('click', () => {
    const { theme } = store.getState(); // Recover the selected theme
    if (theme === 'light') {
      store.dispatch({ type: CHANGE_THEME, payload: { theme: 'dark' } });
    } else {
      store.dispatch({ type: CHANGE_THEME, payload: { theme: 'light' } });
    }
  });

  store.subscribe(() => {
    document.querySelector('#wrapper').className = store.getState().theme;
    document.querySelector('#light-bulb').src = `img/${store.getState().theme}.png`; // Good way of thinking.
  });
};
