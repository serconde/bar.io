import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlertSnackbarComponent, HorizontalPosition, Severity, VerticalPosition } from '.';

describe('AlertSnackbarComponent tests', () => {
  it('should be hidden when not opened yet', () => {
    // Arrange
    const props = {
      open: false,
      onClose: jest.fn(),
      severity: Severity.ERROR,
      message: 'This is a message',
      autoHideDuration: 3000,
      vertical: VerticalPosition.TOP,
      horizontal: HorizontalPosition.CENTER,
    };

    // Act
    const { container } = render(<AlertSnackbarComponent {...props} />);

    // Assert

    expect(container).toBeEmptyDOMElement();
  });

  it('should show and alert with the expected message when opened', () => {
    // Arrange
    const props = {
      open: true,
      onClose: jest.fn(),
      severity: Severity.ERROR,
      message: 'This is a message',
      autoHideDuration: 3000,
      vertical: VerticalPosition.TOP,
      horizontal: HorizontalPosition.CENTER,
    };

    // Act
    render(<AlertSnackbarComponent {...props} />);
    const alert = screen.getByRole('alert');

    // Assert

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(props.message);
  });

  it('should call onClose when clicking the close button', () => {
    // Arrange
    const props = {
      open: true,
      onClose: jest.fn(),
      severity: Severity.ERROR,
      message: 'This is a message',
      autoHideDuration: 3000,
      vertical: VerticalPosition.TOP,
      horizontal: HorizontalPosition.CENTER,
    };

    // Act
    render(<AlertSnackbarComponent {...props} />);
    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);

    // Assert

    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
