import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

interface Props extends WithStyles<typeof styles> {}

const FunctionsLink = (props: any) => <Link to="/functions" {...props} />;
const EventTypesLink = (props: any) => <Link to="/eventtypes" {...props} />;
const SubscriptionsLink = (props: any) => (
  <Link to="/subscriptions" {...props} />
);

const ButtonAppBar: React.SFC<Props> = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Event Gateway
          </Typography>
          <div className={classes.flex} />
          <Button component={FunctionsLink}>Functions</Button>
          <Button component={EventTypesLink}>Event Types</Button>
          <Button component={SubscriptionsLink}>Subscriptions</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(ButtonAppBar);
