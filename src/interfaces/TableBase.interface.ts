interface TableBaseInterface {
    readonly id: string; // primary key
    readonly restaurantId: string; // foreign key
    readonly openedAt: string;

    clients: string[]; // array of foreign key
    clientsCount: number;

    closedAt?: string;
    orders?: string[]; // array of foreign key
    amount?: number;
    amountPerClient?: number;
}

export default TableBaseInterface;