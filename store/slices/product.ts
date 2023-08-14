import empty from '@/lib/empty';
import { ProductTypes } from '@/typings/product';
import { createSlice } from '@reduxjs/toolkit';

type Action = {
  payload: {
    parentId: string;
    itemId: string;
  };
  type: string;
};

type State = {
  items: ProductTypes[];
  total: number;
  selectedItems?: ProductTypes[];
  currentID?: string;
};

const initialState = {
  total: 0,
  items: [],
  selectedItems: [],
  currentID: empty,
} as State;

const productSlilce = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.items = action.payload;
    },
    updateCurrentID: (state, action) => {
      if (state.currentID !== action.payload) {
        state.currentID = action.payload;
      } else {
        state.currentID = empty;
      }
    },
    onSelectItems: (state, action) => {
      state.selectedItems?.push(action.payload);
      // const draft = state.selectedItems;
      // if (draft) {
      //   const item = action.payload;
      //   const findItem = draft?.find(
      //     (selectedItem) => selectedItem._id === item.id
      //   );
      //   if (findItem) {
      //     if (findItem?._id === item.id) {
      //       // draft.splice(draft.indexOf(findItem), 1);
      //     } else {
      //       draft.push(item);
      //     }
      //   }
      // }
      // state.selectedItems = action.payload;
    },
    // onCategoryItem: (state, action) => {

    // },
    onItemIncrement: (state: State, action: Action) => {
      const { items } = state;
      if (items) {
        const { itemId, parentId } = action.payload;
        items.forEach((currentItem) => {
          if (currentItem._id === parentId) {
            const innerItem = currentItem.serviceItems.find(
              (currentItem) => currentItem._id === itemId
            );
            if (innerItem) {
              innerItem.quantity += 1;
            }
          }
        });
        state.total = items.reduce(
          (acc, curr) =>
            acc +
            curr.serviceItems.reduce((acc, curr) => acc + curr.quantity, 0),
          0
        );
      }
    },
    onItemDecrement: (state: State, action: Action) => {
      const { items } = state;
      if (items) {
        const { itemId, parentId } = action.payload;
        items.forEach((currentItem) => {
          if (currentItem._id === parentId) {
            const innerItem = currentItem.serviceItems.find(
              (currentItem) => currentItem._id === itemId
            );
            if (innerItem) {
              if (innerItem.quantity > 0) {
                innerItem.quantity -= 1;
              }
            }
          }
        });
        state.total = items.reduce(
          (acc, curr) =>
            acc +
            curr.serviceItems.reduce((acc, curr) => acc + curr.quantity, 0),
          0
        );
      }
    },
  },
});

export default productSlilce;

const items = [
  {
    _id: '634d137b1c7eda7dfa7b1397',
    serviceCode: '1731',
    serviceName: 'ELECTRICAL CONTRACTORS',
    status: 'Active',
    serviceItems: [
      {
        itemName: 'Apprentice Electrician',
        itemDescription: 'Apprentice Electrician',
        status: 'Active',
        _id: '634d14011c7eda7dfa7b13a7',
      },
      {
        itemName: 'Journeyman Electrician',
        itemDescription: 'Journeyman Electrician',
        status: 'Active',
        _id: '634d206d1c7eda7dfa7b13b1',
      },
      {
        itemName: 'Estimator',
        itemDescription: 'Estimator',
        status: 'Active',
        _id: '634d20871c7eda7dfa7b13b9',
      },
      {
        itemName: 'Project Supervisor',
        itemDescription: 'Project Supervisor',
        status: 'Active',
        _id: '634d209e1c7eda7dfa7b13c3',
      },
    ],
    __v: 0,
  },
  {
    _id: '634d13aa1c7eda7dfa7b139b',
    serviceCode: '4215',
    serviceName: 'COURIER SERVICES AIR OR GROUND AND FREIGHT FORWARD',
    status: 'Active',
    serviceItems: [
      {
        itemName: 'Airfreight service',
        itemDescription: 'Airfreight service',
        status: 'Active',
        _id: '634d20d51c7eda7dfa7b13cf',
      },
      {
        itemName: 'Land freight service',
        itemDescription: 'Land freight service',
        status: 'Active',
        _id: '634d20fa1c7eda7dfa7b13d9',
      },
      {
        itemName: 'Motorcycle courier service',
        itemDescription: 'Motorcycle courier service',
        status: 'Active',
        _id: '634d21281c7eda7dfa7b13e5',
      },
      {
        itemName: 'Ocean freight service',
        itemDescription: 'Ocean freight service',
        status: 'Active',
        _id: '634d214f1c7eda7dfa7b13f3',
      },
    ],
    __v: 0,
  },
  {
    _id: '634d13bf1c7eda7dfa7b139f',
    serviceCode: '4722',
    serviceName: 'TRAVEL AGENCIES AND TOUR OPERATORS',
    status: 'Active',
    serviceItems: [
      {
        itemName: 'Independent travel agents',
        itemDescription: 'Independent travel agents',
        status: 'Active',
        _id: '634d21751c7eda7dfa7b1403',
      },
      {
        itemName: 'Online travel agents',
        itemDescription: 'Online travel agents',
        status: 'Active',
        _id: '634d21991c7eda7dfa7b1411',
      },
      {
        itemName: 'Visitor information centers',
        itemDescription: 'Visitor information centers',
        status: 'Active',
        _id: '634d21c21c7eda7dfa7b1421',
      },
      {
        itemName: 'Inbound tour operators',
        itemDescription: 'Inbound tour operators',
        status: 'Active',
        _id: '634d21db1c7eda7dfa7b1433',
      },
    ],
    __v: 0,
  },
  {
    _id: '634d13dd1c7eda7dfa7b13a3',
    serviceCode: '4812',
    serviceName: 'TELECOMMUNICATIONS EQUIPMENT AND TELEPHONE SALES',
    status: 'Active',
    serviceItems: [
      {
        itemName: 'Public switching equipment',
        itemDescription: 'Public switching equipment',
        status: 'Active',
        _id: '634d22101c7eda7dfa7b1447',
      },
      {
        itemName: 'Transmission equipment',
        itemDescription: 'Transmission equipment',
        status: 'Active',
        _id: '634d223a1c7eda7dfa7b1459',
      },
      {
        itemName: 'Customer premises equipment',
        itemDescription: 'Customer premises equipment',
        status: 'Active',
        _id: '634d22641c7eda7dfa7b146d',
      },
    ],
    __v: 0,
  },
  {
    _id: '634d5ce11c7eda7dfa7b15f8',
    serviceCode: '4816',
    serviceName: 'COMPUTER NETWORK AND INFORMATION SERVICES',
    status: 'Active',
    serviceItems: [
      {
        itemName: 'PAN',
        itemDescription: 'PAN(Personal Area Network)',
        status: 'Active',
        _id: '634d5cf81c7eda7dfa7b160b',
      },
      {
        itemName: 'LAN',
        itemDescription: 'LAN(Local Area Network)',
        status: 'Active',
        _id: '634d5d0f1c7eda7dfa7b1620',
      },
      {
        itemName: 'CAN',
        itemDescription: 'CAN(Campus area network)',
        status: 'Active',
        _id: '634d5d1f1c7eda7dfa7b1637',
      },
      {
        itemName: 'WAN',
        itemDescription: 'WAN(Wide area network)',
        status: 'Active',
        _id: '634d5d321c7eda7dfa7b1650',
      },
      {
        itemName: 'MAN',
        itemDescription: 'MAN(Metropolitan area network)',
        status: 'Active',
        _id: '634d5d431c7eda7dfa7b166b',
      },
    ],
    __v: 0,
  },
  {
    _id: '634d5d551c7eda7dfa7b1688',
    serviceCode: '5013',
    serviceName: 'MOTOR VEHICLE SUPPLIES AND NEW PARTS',
    status: 'Active',
    serviceItems: [
      {
        itemName: 'steel frame',
        itemDescription: 'steel frame',
        status: 'Active',
        _id: '634d5e001c7eda7dfa7b16b7',
      },
      {
        itemName: 'transmission system',
        itemDescription: 'transmission system',
        status: 'Active',
        _id: '634d5e361c7eda7dfa7b16d1',
      },
      {
        itemName: 'steering system, wheels',
        itemDescription: 'steering system, wheels',
        status: 'Active',
        _id: '634d5e491c7eda7dfa7b16ed',
      },
      {
        itemName: 'tyres and brakes',
        itemDescription: 'tyres and brakes',
        status: 'Active',
        _id: '634d5e5b1c7eda7dfa7b170b',
      },
    ],
    __v: 0,
  },
  {
    _id: '634d5e751c7eda7dfa7b172b',
    serviceCode: '5021',
    serviceName: 'OFFICE AND COMMERCIAL FURNITURE',
    status: 'Active',
    serviceItems: [
      {
        itemName: 'wooden',
        itemDescription: 'Wooden Furniture',
        status: 'Active',
        _id: '634d5e951c7eda7dfa7b1747',
      },
      {
        itemName: 'Bamboo',
        itemDescription: 'Bamboo Furniture',
        status: 'Active',
        _id: '634d5ea81c7eda7dfa7b1765',
      },
      {
        itemName: 'Metal',
        itemDescription: 'Metal Furniture',
        status: 'Active',
        _id: '634d5eb61c7eda7dfa7b1785',
      },
      {
        itemName: 'Plastic',
        itemDescription: 'Plastic Furniture',
        status: 'Active',
        _id: '634d5eca1c7eda7dfa7b17a7',
      },
    ],
    __v: 0,
  },
  {
    _id: '64b7840c8dca3f5ef61d9954',
    serviceCode: '12345',
    serviceName: 'police',
    status: 'Active',
    serviceItems: [],
    __v: 0,
  },
];
