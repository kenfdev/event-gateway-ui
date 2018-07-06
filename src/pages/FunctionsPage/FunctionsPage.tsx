import Types from 'Types';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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

export interface FunctionsPageProps extends WithStyles<typeof styles> {
  onFetchFunctions: () => any;
}

class FunctionsPage extends React.Component<FunctionsPageProps> {
  componentDidMount() {
    this.handleFetchFunctions();
  }
  handleFetchFunctions = () => {
    this.props.onFetchFunctions();
  };

  render() {
    const { classes } = this.props;

    const NewFunctionLink = (props: any) => (
      <Link to="/functions/new" {...props} />
    );
    return (
      <div className="App">
        <p className="App-intro">Functions</p>
        <Button
          variant="fab"
          className={classes.addButton}
          color="primary"
          component={NewFunctionLink}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: Types.RootState) => ({});

const FunctionsPageConnected = connect(
  mapStateToProps,
  {
    onFetchFunctions: functionsActions.fetchFunctions.request
  }
)(FunctionsPage);

export default withStyles(styles, { withTheme: true })(FunctionsPageConnected);
