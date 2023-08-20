import api from '@/apis/config';

type Payload = {
  userId: string;
  typeOfComplaint: string;
  briefCompliant?: string;
  customerName: string;
  contact: number;
  email: string;
  remarks: {
    msg: string;
    key: string;
  }[];
  complaintNum: string;
  merchantId: string;
  complaintDate: string;
  complaintTime: string;
  delay: number;
  status: string;
};

type Response = {
  success: boolean;
  message: string;
};

/**
 * For Complaints
 */
const createComplaints = async (payload: Payload, token: string) => {
  const response = await api.post<Response>(`/api/complaints`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export default createComplaints;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} api/complaints For Complaints
 */

// const xx=userId: {
//   type: String,
// },
// typeOfComplaint: {
//   type: String,
//   required: true,
// },
// briefCompliant: {
//   type: String,
// },
// customerName: {
//   type: String,
// },
// contact: {
//   type: Number,
// },
// email: {
//   type: String,
// },
// remarks: [
//   {
//     key: { type: String },
//     msg: { type: String },
//     remarksDate: {
//       type: Date,
//       default: new Date().toLocaleDateString("en-US")
//     }
//   }
// ],

// complaintNum: {
//   type: String,
// },
// merchantId: {
//   type: String
// },
// complaintDate: {
//   type: Date,
// },
// complaintTime: {
//   type: Date,
// },
// delay: {
//   type: Number,
// },
// status: {
//   type: String,
//   default: "Open"
// },
// });

// const payload = {
//   userId: '5f9f1b1b1c9d440000d1b0a1',
//   typeOfComplaint: 'Payment',
//   briefCompliant: 'Payment',
//   customerName: 'Customer',
//   contact: 1234567890,
//   email: '',
//   remarks: [
//     {
//       msg: 'test',
//       key: 'test',
//     },
//   ],
//   complaintNum: '1234567890',
//   merchantId: '5f9f1b1b1c9d440000d1b0a1',
//   complaintDate: '2020-11-02T00:00:00.000Z',
//   complaintTime: '2020-11-02T00:00:00.000Z',
//   delay: 0,
//   status: 'Open',
// };
