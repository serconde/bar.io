import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BarInfoComponent, Props } from './bar-info.component';

describe('pods/bar-info/bar-info.component specs', () => {
  it('should display bar info when it feeds with some info', () => {
    // Arrange
    const props: Props = {
      info: { name: 'My name', address: 'My address', numberPhone: 666666666 },
      onSave: jest.fn(),
      onCancel: jest.fn(),
    };

    // Act
    render(<BarInfoComponent {...props} />);

    const inputElements = screen.getAllByRole('textbox');

    // Assert
    expect(inputElements[0]).toHaveValue('My name');
    expect(inputElements[1]).toHaveValue('My address');
    expect(inputElements[2]).toHaveValue('666666666');
  });

  it('should call onSave property when it click on "Save" button', async () => {
    // Arrange
    const props: Props = {
      info: { name: 'My name', address: 'My address', numberPhone: 666666666 },
      onSave: jest.fn(),
      onCancel: jest.fn(),
    };

    // Act
    render(<BarInfoComponent {...props} />);

    const buttonList = screen.getAllByRole('button');

    userEvent.click(buttonList[0]);

    // Assert
    waitFor(() => {
      expect(props.onSave).toHaveBeenCalled();
    });
  });

  it('should call onCancel property when it click on "Cancel" button', () => {
    // Arrange
    const props: Props = {
      info: { name: 'My name', address: 'My address', numberPhone: 666666666 },
      onSave: jest.fn(),
      onCancel: jest.fn(),
    };

    // Act
    render(<BarInfoComponent {...props} />);

    const buttonList = screen.getAllByRole('button');

    userEvent.click(buttonList[1]);

    // Assert
    expect(props.onCancel).toHaveBeenCalled();
  });
});
