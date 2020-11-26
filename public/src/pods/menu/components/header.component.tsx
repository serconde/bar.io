import React from 'react';
import * as classes from './header.styles';

interface HeaderProps {
  name: string;
  description?: string;
  telephone?: string;
}

export const HeaderComponent: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { name, description, telephone } = props;
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{name}</h1>
      {!!description && <h2 role='heading'>{description}</h2>}
      {!!telephone && (
        <p>
          Teléfono de reservas:&nbsp;
          <span aria-label={telephone.split('').join('.')}>{telephone}</span>
        </p>
      )}
    </div>
  );
};
