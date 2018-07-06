import Types from 'Types';
import * as React from 'react';
import { connect } from 'react-redux';

import { functionsActions } from '../../features/functions';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    addButton: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    }
  });

export interface FunctionsNewPageProps extends WithStyles<typeof styles> {
  onFetchFunctions: () => any;
}

class FunctionsNewPage extends React.Component<FunctionsNewPageProps> {
  componentDidMount() {
    this.handleFetchFunctions();
  }
  handleFetchFunctions = () => {
    this.props.onFetchFunctions();
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">New Functions</p>
      </div>
    );
  }
}

const mapStateToProps = (state: Types.RootState) => ({});

const FunctionsNewPageConnected = connect(
  mapStateToProps,
  {
    onFetchFunctions: functionsActions.fetchFunctions.request
  }
)(FunctionsNewPage);

export default withStyles(styles, { withTheme: true })(FunctionsNewPageConnected);
