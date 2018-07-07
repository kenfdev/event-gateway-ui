import Types from 'Types';
import * as React from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles
} from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ViewableEGFunction } from '../../features/functions/models';

import { functionsActions, functionsSelectors } from '../../features/functions';
import { DeleteRequest } from '../../features/functions/actions';

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
  onDeleteFunction(data: DeleteRequest): any;
}

interface State {
  anchorEl: HTMLElement | undefined;
}

class FunctionList extends React.Component<Props, State> {
  readonly state: State = {
    anchorEl: undefined
  };

  handleToggle = (f: ViewableEGFunction) => (e: any) => {
    this.props.onSelectFunction(f.functionId);
  };

  handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.setState({ anchorEl: e.currentTarget });
  };

  handleDelete = (f: ViewableEGFunction) => () => {
    this.props.onDeleteFunction({
      functionId: f.functionId,
      space: f.space
    });
    this.handleClose();
  };

  handleClose = () => {
    this.setState({ anchorEl: undefined });
  };

  render() {
    const options = ['Delete'];
    const { classes, functions } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <List>
          {functions.map(f => (
            <ListItem
              key={f.functionId}
              role={undefined}
              dense
              button
              className={classes.listItem}
            >
              <Checkbox
                checked={f.selected}
                tabIndex={-1}
                disableRipple
                onClick={this.handleToggle(f)}
              />
              <ListItemText primary={`${f.space}/${f.functionId}`} />
              <ListItemSecondaryAction>
                <IconButton onClick={this.handleOpen}>
                  <MoreVertIcon />
                </IconButton>
              </ListItemSecondaryAction>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    width: 200
                  }
                }}
              >
                {options.map(option => (
                  <MenuItem key={option} onClick={this.handleDelete(f)}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state: Types.RootState) => ({
  functions: functionsSelectors.getViewableFunctions(state.functions)
});

const FunctionListConnected = connect(
  mapStateToProps,
  {
    onSelectFunction: functionsActions.selectFunction,
    onDeleteFunction: functionsActions.deleteFunction.request
  }
)(FunctionList);

export default withStyles(styles)(FunctionListConnected);
