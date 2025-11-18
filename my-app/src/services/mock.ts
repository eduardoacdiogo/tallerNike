export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
}

interface ResponseMock {
  data: {
    transactions: Transaction[];
  };
}

const responseMock: ResponseMock = {
  data: {
    transactions: [
      {
        id: 1,
        date: '2025-01-01',
        description: 'Product 1',
        amount: 100,
      },
      {
        id: 2,
        date: '2025-01-02',
        description: 'Product 2',
        amount: 200,
      },
      {
        id: 3,
        date: '2025-01-03',
        description: 'Product 3',
        amount: -300,
      },
    ],
  },
};

export default responseMock;