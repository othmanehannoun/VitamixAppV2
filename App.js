import React from 'react';
import AppNavigation from './src/navigation/AppRoute'
import { Provider } from 'react-redux';
import store from './src/Redux/store'


const App = () => {
  return (

    <Provider store={store}>
       <AppNavigation />
       {/* <DrowerNavigator /> */}
    </Provider>
     
  );
};


export default App;
