interface ListCellSimpleVm {
  colProduct: string;
  unitPrice: string;
  unitCurrency: string;
  currency: string;
}

interface ListCellVm {
  productImage: string;
  productDescription: string;
  productCode: string;
  colProduct: string;
}

export type PartialListSimpleCellVm = Partial<ListCellSimpleVm>;
export type PartialListCellVm = Partial<ListCellVm>;
