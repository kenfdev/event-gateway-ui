import * as React from 'react';
import {
  reduxForm,
  Field,
  InjectedFormProps,
  formValueSelector
} from 'redux-form';
import { connect } from 'react-redux';

import {
  WithStyles,
  createStyles,
  Theme,
  withStyles
} from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { renderTextField, renderSelectField } from '../ReduxFormMaterial';
import { renderHttpProviderFormFields } from './HttpProviderFormFields';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    formControl: {
      margin: theme.spacing.unit,
      width: '100%',
      minWidth: 120
    }
  });

interface Props extends WithStyles<typeof styles>, InjectedFormProps {
  type: string;
}

const FunctionForm: React.SFC<Props> = props => {
  const { classes, handleSubmit, type } = props;
  const custom = {
    inputProps: {
      name: 'type',
      id: 'type'
    }
  };

  let providerFields = null;
  if (type === 'http') {
    providerFields = renderHttpProviderFormFields(classes.formControl);
  }

  return (
    <Grid container className={classes.root} justify={'center'}>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <Field
                  name="functionId"
                  component={renderTextField}
                  label="Function ID"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Field
                  name="type"
                  {...custom}
                  component={renderSelectField}
                  label="Type"
                >
                  <MenuItem value="http">http</MenuItem>
                </Field>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {providerFields}
          </Grid>
          <Grid container justify={'flex-end'}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

const StyledFunctionForm = withStyles(styles, { withTheme: true })(
  FunctionForm
);

const selector = formValueSelector('functionForm');
const DecoratedStyledFunctionForm = connect(state => {
  return {
    type: selector(state, 'type')
  };
})(StyledFunctionForm);

export default reduxForm({ form: 'functionForm' })(DecoratedStyledFunctionForm);
