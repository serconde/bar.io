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

interface MenuListProps {
  categories: Array<MenuCategory>;
}

export const MenuList: React.FunctionComponent<MenuListProps> = (props) => {
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
              <List component='div' className={classes.category}>
                {!!category.dishes &&
                  category.dishes.map((dish) => (
                    <ListItem
                      key={`dish-${dish.id}`}
                      aria-label={`${dish.name} ${dish.price}`}
                      button>
                      <div className={classes.name}>{dish.name}</div>
                      <div className={classes.price}>{dish.price}</div>
                    </ListItem>
                  ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};
