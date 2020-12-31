import { render, screen } from "@testing-library/react";
import { formatToEuros } from "common";
import React from "react";
import { ProductComponent } from "./product.component";

describe('ProductComponent tests', () => {
    it('should render the product name and the prices when passing a valid product', () => {
        //Arrange
        const props = {
            productIndex: '1-1',
            product: {
                name: 'Jamón ibérico',
                portions: [
                    {
                        name: 'Tapa',
                        price: formatToEuros(3.5),
                    },
                    {
                        name: 'Media',
                        price: formatToEuros(6.5),
                    },                    
                    {
                        name: 'Ración',
                        price: formatToEuros(12),
                    },
                ],
            }};
        //Act
        render(<ProductComponent {...props} />);        

        //Assert
        const name = screen.getByText(props.product.name);
        expect(name).toBeInTheDocument();
        const tapa = screen.getByText(props.product.portions[0].name);
        expect(tapa).toBeInTheDocument();
        const tapaPrice = screen.getByText(/3,50 €/);
        expect(tapaPrice).toBeInTheDocument();
        const media = screen.getByText(props.product.portions[1].name);
        expect(media).toBeInTheDocument();
        const mediaPrice = screen.getByText(/6,50 €/);
        expect(mediaPrice).toBeInTheDocument();   
        const racion = screen.getByText(props.product.portions[2].name);
        expect(racion).toBeInTheDocument();
        const racionPrice = screen.getByText(/12,00 €/);
        expect(racionPrice).toBeInTheDocument();   

    });
});