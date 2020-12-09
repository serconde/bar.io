import React from 'react';

//Form
import { Formik, Form } from 'formik';
import { formValidation } from './bar-info.validation';

//VM
import { BarInfo } from './bar-info.vm';

//Component
import { TextFieldComponent } from 'common/components';

//Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

//CSS
import * as classes from './bar-info.styles';

interface Props {
  info: BarInfo;
  onSave: (barInfo: BarInfo) => void;
  onCancel: () => void;
}
export const BarInfoComponent: React.FunctionComponent<Props> = (props) => {
  const { info, onSave, onCancel } = props;

  return (
    <Card className={classes.card}>
      <CardHeader title='Bar info' className={classes.title} />
      <CardContent>
        <Formik
          onSubmit={onSave}
          initialValues={info}
          enableReinitialize={true}
          validate={formValidation.validateForm}>
          {() => (
            <Form>
              <div className={classes.form}>
                <TextFieldComponent name='name' label='Name' />
                <TextFieldComponent name='address' label='Address' />
                <TextFieldComponent name='numberPhone' label='Number Phone' type='tel' />

                <Button type='submit' variant='contained' color='primary'>
                  Save
                </Button>

                <Button type='button' variant='contained' color='secondary' onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
