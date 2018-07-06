import Types from 'Types';
import * as React from 'react';
import { connect } from 'react-redux';
import { functionsActions } from '../../features/functions';
import FunctionForm from '../../components/FunctionForm';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import { ViewableEGFunction } from '../../features/functions/models';

const styles = (theme: Theme) =>
  createStyles({
    addButton: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    }
  });

export interface FunctionsNewPageProps extends WithStyles<typeof styles> {
  onCreateFunction: (data: ViewableEGFunction) => any;
}

class FunctionsNewPage extends React.Component<FunctionsNewPageProps> {
  handleSubmit = (data: ViewableEGFunction) => {
    this.props.onCreateFunction(data);
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">New Functions</p>
        <FunctionForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state: Types.RootState) => ({});

const FunctionsNewPageConnected = connect(
  mapStateToProps,
  {
    onCreateFunction: functionsActions.createFunction.request
  }
)(FunctionsNewPage);

export default withStyles(styles, { withTheme: true })(
  FunctionsNewPageConnected
);
