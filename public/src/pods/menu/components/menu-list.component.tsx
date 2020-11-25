import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { MenuCategory } from '../menu.vm';
import * as classes from './menu-list.styles';
import { SubmenuCategoryComponent } from './submenu-category.component';

interface MenuListProps {
  categories: Array<MenuCategory>;
}

export const MenuListComponent: React.FunctionComponent<MenuListProps> = (props) => {
  const { categories } = props;
  const [expanded, setExpanded] = React.useState<string | false>('category0');

  const handleChange = (panel: string) => (event: React.ChangeEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {!!categories &&
        categories.map((category, index) => (
          <Accordion
            key={category.name.toLowerCase().split(' ').join('_')}
            square
            expanded={expanded === `category${index}`}
            onChange={handleChange(`category${index}`)}>
            <AccordionSummary
              aria-controls={`category${index}-content`}
              id={`category${index}-header`}>
              <Typography>{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SubmenuCategoryComponent dishes={category.dishes} />
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};
