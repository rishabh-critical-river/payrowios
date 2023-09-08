export type ItemTypes = {
  selected: boolean;
  _id: string;
  price: number;
  quantity: number;
  itemName: string;
  status: string;
  itemDescription: string;
};

export type ProductTypes = {
  _id: string;
  serviceCode: string;
  serviceName: string;
  status: string;
  serviceItems: ItemTypes[];
};
