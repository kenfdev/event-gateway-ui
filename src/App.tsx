import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NavBar from './components/NavBar/NavBar';
import DashboardPage from './pages/DashboardPage';
import FunctionsPage from './pages/FunctionsPage';
import FunctionsNewPage from './pages/FunctionsNewPage';
import EventTypesPage from './pages/EventTypesPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" exact component={DashboardPage} />
              <Route path="/functions" exact component={FunctionsPage} />
              <Route path="/functions/new" exact component={FunctionsNewPage} />
              <Route path="/eventtypes" exact component={EventTypesPage} />
              <Route
                path="/subscriptions"
                exact
                component={SubscriptionsPage}
              />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
