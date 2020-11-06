import React, { FC, memo } from 'react';
import Typography from '@material-ui/core/Typography';
import { Variant } from '@material-ui/core/styles/createTypography';

interface TitleProps {
  className?: string;
  variant: Variant;
}

// eslint-disable-next-line react/display-name
export const TitleComponent: FC<TitleProps> = memo((props) => {
  const { children, className, variant } = props;
  return (
    <Typography variant={variant} className={className}>
      {children}
    </Typography>
  );
});

TitleComponent.defaultProps = {
  className: '',
};
