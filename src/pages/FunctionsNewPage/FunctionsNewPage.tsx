import Types from 'Types';
import * as React from 'react';
import {connect} from 'react-redux';
import {functionsActions} from '../../features/functions';
import FunctionForm from '../../components/FunctionForm';
import Grid from '@material-ui/core/Grid';

import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import {ViewableEGFunction} from '../../features/functions/models';

const styles = (theme : Theme) => createStyles({
  root: {
    flexGrow: 1
  }
});

export interface FunctionsNewPageProps extends WithStyles < typeof styles > {
  onCreateFunction: (data : ViewableEGFunction) => any;
}

class FunctionsNewPage extends React.Component < FunctionsNewPageProps > {
  handleSubmit = (data : ViewableEGFunction) => {
    this
      .props
      .onCreateFunction(data);
  };

  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root} justify={'center'}>
        <Grid item xs={6}>
          <div className="App">
            <p className="App-intro">New Functions</p>
            <FunctionForm onSubmit={this.handleSubmit}/>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state : Types.RootState) => ({});

const FunctionsNewPageConnected = connect(mapStateToProps, {onCreateFunction: functionsActions.createFunction.request})(FunctionsNewPage);

export default withStyles(styles, {withTheme: true})(FunctionsNewPageConnected);
