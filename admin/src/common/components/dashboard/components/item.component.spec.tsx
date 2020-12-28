import React from 'react';
import { Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../test/';

//VM
import { DashboardItemProps } from '../dashboard.vm';

//Component
import { ItemComponent, ClassesProps } from './item.component';

//Material ui
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

describe('common/dashboard/components/ItemComponent', () => {
  it('should be render as expected passing required properties', () => {
    // Arrange
    const props = {
      item: {
        icon: PeopleAltIcon,
        title: 'test name',
        linkTo: '/test-link',
      } as DashboardItemProps,
      dataTestId: 'test-item',
    };

    // Act
    const { getByRole } = renderWithRouter(
      <ItemComponent {...props} />,
      <>
        <Route path={props.item.linkTo} component={() => <h1>Test route destination</h1>} />
      </>,
    );

    const element = getByRole('link');

    // Assert
    expect(element).toBeInTheDocument();
  });

  it('should be render as expected passing required and optional properties', () => {
    // Arrange
    const props = {
      item: {
        icon: PeopleAltIcon,
        title: 'test name',
        linkTo: '/test-link',
        subtitle: 'test subtitle',
      } as DashboardItemProps,
      classes: {
        root: 'test-root-class',
        icon: 'test-icon-class',
        title: 'test-name-class',
        subtitle: 'test-subtitle-class',
      } as ClassesProps,
      dataTestId: 'test-item',
    };

    // Act
    const { getByRole } = renderWithRouter(
      <ItemComponent {...props} />,
      <>
        <Route path={props.item.linkTo} component={() => <h1>Test route destination</h1>} />
      </>,
    );

    const element = getByRole('link');
    const title = getByRole('heading', { level: 5 });
    const subTitle = getByRole('heading', { level: 6 });

    // Assert
    expect(element).toHaveClass(props.classes.root);
    expect(title).toHaveClass(props.classes.title);
    expect(subTitle).toHaveClass(props.classes.subtitle);
  });

  it('should navigate to route when click on item component', () => {
    // Arrange
    const props = {
      item: {
        icon: PeopleAltIcon,
        title: 'test name',
        linkTo: '/test-link',
        subtitle: 'test subtitle',
      } as DashboardItemProps,
      classes: {
        root: 'test-root-class',
        icon: 'test-icon-class',
        title: 'test-name-class',
        subtitle: 'test-subtitle-class',
      } as ClassesProps,
      dataTestId: 'test-item',
    };

    // Act
    const { getByRole } = renderWithRouter(
      <ItemComponent {...props} />,
      <>
        <Route path={props.item.linkTo} component={() => <h1>Test route destination</h1>} />
      </>,
    );

    const element = getByRole('link');

    userEvent.click(element);

    const title = getByRole('heading', { level: 1 });

    // Assert
    expect(title).toBeInTheDocument();
  });
});
