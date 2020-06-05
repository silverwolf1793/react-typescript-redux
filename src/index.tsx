import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Components from './components/componentsIndex'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { store } from './redux/store';
import { REGISTER_STUDENT } from './redux/actions/actions';


//test data, I insert some data before everything to have some "database" data to show
store.dispatch({
  type:REGISTER_STUDENT,
  payload:{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa": "4"
}
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Components.menu/>
      <Switch>
        <Route exact path="/register" component={Components.register}/>
        <Route exact path="/student/:id" component={Components.student}/>
        <Route exact path="/consult" component={Components.consult}/>
        <Route exact path="/home" component={Components.home}/>
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Components.footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
