import * as React from 'react';
import { Field } from 'redux-form';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

import { renderTextField } from '../ReduxFormMaterial';

export const renderHttpProviderFormFields = (formControlClass: any) => (
  <Grid container>
    <Grid item xs={12}>
      <FormControl className={formControlClass}>
        <Field
          name="provider.url"
          component={renderTextField}
          label="Provider URL"
        />
      </FormControl>
    </Grid>
  </Grid>
);
