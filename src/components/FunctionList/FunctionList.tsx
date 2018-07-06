import Types from 'Types';
import * as React from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { ViewableEGFunction } from '../../features/functions/models';

import { functionsActions, functionsSelectors } from '../../features/functions';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    listItem: {}
  });

interface Props extends WithStyles<typeof styles> {
  functions: ViewableEGFunction[];
  onSelectFunction(functionId: string): any;
}

const FunctionList: React.SFC<Props> = props => {
  const { classes, functions, onSelectFunction } = props;

  const handleToggle = (f: ViewableEGFunction) => (e: any) => {
    onSelectFunction(f.functionId);
  };

  return (
    <div className={classes.root}>
      <List>
        {functions.map(f => (
          <ListItem
            key={f.functionId}
            role={undefined}
            dense
            button
            onClick={handleToggle(f)}
            className={classes.listItem}
          >
            <Checkbox checked={f.selected} tabIndex={-1} disableRipple />
            <ListItemText primary={`${f.space}/${f.functionId}`} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state: Types.RootState) => ({
  functions: functionsSelectors.getViewableFunctions(state.functions)
});

const FunctionListConnected = connect(
  mapStateToProps,
  {
    onSelectFunction: functionsActions.selectFunction
  }
)(FunctionList);

export default withStyles(styles)(FunctionListConnected);
