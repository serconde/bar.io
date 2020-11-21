import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { formatToEuros } from 'common/utils';
import React from 'react';
import { MenuCategory } from '../menu.vm';

interface MenuListProps {
  categories: Array<MenuCategory>;
}

export const MenuList: React.FunctionComponent<MenuListProps> = (props) => {
  const { categories } = props;
  const [expanded, setExpanded] = React.useState<string | false>('category1');

  const handleChange = (panel: string) => (event: React.ChangeEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {categories.map((category, index) => (
        <Accordion
          square
          expanded={expanded === `category${index}`}
          onChange={handleChange(`category${index}`)}>
          <AccordionSummary
            aria-controls={`category${index}-content`}
            id={`category${index}-header`}>
            <Typography>{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List component='ul' aria-label={category.name}>
              {category.dishes.map((dish) => {
                <ListItem button>
                  <ListItemText primary={dish.name} />
                  <ListItemText primary={formatToEuros(dish.price)} />
                </ListItem>;
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
