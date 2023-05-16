import logo from './logo.svg';
import './App.css';
// import Admin_Institute from './Dashboards/Institute/admin'
import Router from './config/Router';
import { Provider } from 'react-redux';
import store from './config/redux/store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>


  );
}

export default App;
