import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListCell } from './list-cell.component';
import notFoundImage from 'assets/notFoundImage.png';

describe('list-cell.component specs', () => {
  it('should render the component ', () => {
    // Arrange
    const props = {
      image: '',
      name: 'test',
      code: 'test 123',
      index: 1,
    };

    // Act
    render(<ListCell {...props} />);
    // Assert
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/test 123/)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'test' }).getAttribute('src')).toEqual(
      notFoundImage.toString(),
    );
  });
});
