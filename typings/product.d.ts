export type ItemTypes = {
  _id: any;
  id: string;
  price: number;
  quantity: number;
  itemName: string;
  itemDescription: string;
  status: string;
};

export type ProductTypes = {
  _id: any;
  id: string;
  serviceCode: string;
  serviceName: string;
  status: string;
  serviceItems: ItemTypes[];
};
