import React from 'react';
import * as classes from './header.styles';

interface HeaderProps {
  restaurantName: string;
  restaurantDescription?: string;
  restaurantTelephone?: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { restaurantName, restaurantDescription, restaurantTelephone } = props;
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{restaurantName}</h1>
      {!!restaurantDescription && <h2>{restaurantDescription}</h2>}
      {!!restaurantTelephone && (
        <p>
          Teléfono de reservas:
          <span aria-label={restaurantTelephone.split('').join('.')}>{restaurantTelephone}</span>
        </p>
      )}
    </div>
  );
};
