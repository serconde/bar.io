import React from 'react';
import { screen, render } from '@testing-library/react';
import { DropDownComponent } from './dropdown.component';
import { Field, Form, Formik } from 'formik';
import userEvent from '@testing-library/user-event';

describe('DropDownComponent tests', () => {
  it('show show a dropdown list show a dropdown no selected option when passing a list of items and an empty value ', () => {
    //Arrange
    const props = {
      name: 'dropdown',
      labelId: 'dropdownLabel',
      label: 'Test',
      onChange: () => {
        return;
      },
      onBlur: () => {
        return;
      },
      value: '',
    };

    //Act
    render(
      <Formik
        initialValues={{ dropdown: props.value }}
        onSubmit={() => {
          return;
        }}>
        <Form>
          <DropDownComponent {...props}>
            <li value='1'>Item I</li>
            <li value='2'>Item II</li>
            <li value='3'>Item III</li>
          </DropDownComponent>
        </Form>
      </Formik>,
    );

    //Assert
    const label = screen.getByText('Test');
    expect(label).toBeInTheDocument();
    const option1 = screen.queryByText('Item I');
    expect(option1).not.toBeInTheDocument();
    const option2 = screen.queryByText('Item II');
    expect(option2).not.toBeInTheDocument();
    const option3 = screen.queryByText('Item III');
    expect(option3).not.toBeInTheDocument();
  });
  it('show show a dropdown list with the selected option when passing a list of items and a valid value', () => {
    //Arrange
    const props = {
      name: 'dropdown',
      labelId: 'dropdownLabel',
      label: 'Test',
      onChange: () => {
        return;
      },
      onBlur: () => {
        return;
      },
      value: 2,
    };

    //Act
    render(
      <Formik
        initialValues={{ dropdown: props.value }}
        onSubmit={() => {
          return;
        }}>
        <Form>
          <DropDownComponent {...props}>
            <li value='1'>Item I</li>
            <li value='2'>Item II</li>
            <li value='3'>Item III</li>
          </DropDownComponent>
        </Form>
      </Formik>,
    );

    //Assert
    const label = screen.getByText('Test');
    expect(label).toBeInTheDocument();
    const selectedOption = screen.getByRole('button');
    expect(selectedOption).toHaveTextContent('Item II');
  });
  it('show call onChange when selecting anothe list item', async () => {
    //Arrange
    const props = {
      name: 'dropdown',
      labelId: 'dropdownLabel',
      label: 'Test',
      onChange: jest.fn(),
      onBlur: () => {
        return;
      },
      value: 2,
    };

    //Act
    render(
      <Formik
        initialValues={{ dropdown: props.value }}
        onSubmit={() => {
          return;
        }}>
        <Form>
          <DropDownComponent {...props}>
            <li value='1'>Item I</li>
            <li value='2'>Item II</li>
            <li value='3'>Item III</li>
          </DropDownComponent>
        </Form>
      </Formik>,
    );

    const selectedOption = screen.getByRole('button');
    userEvent.click(selectedOption);
    const newOption = await screen.findByText('Item I');
    userEvent.click(newOption);

    //Assert
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
