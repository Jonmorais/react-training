window.onload = () => {
  const CHANGE_THEME = 'CHANGE_THEME'; // use to highlight the colors when using the CHANGE_THEME in the cases

  function themeReducer(state = { theme: 'light' }, action) {
    // Booting the state with the light theme
    switch (action.type) {
      case CHANGE_TO_DARK:
        return { ...state, theme: 'dark' };
      case CHANGE_TO_LIGHT:
        return { ...state, theme: 'light' };
      default:
        return state;
    }
  }
};

const store = Redux.createStore(themeReducer);
