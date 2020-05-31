import TableBaseInterface from '../interfaces/TableBase.interface';

class Table implements TableBaseInterface {
    public id: string;
    public restaurantId: string;
    public openedAt: string;

    public clients: string[];
    public clientsCount: number;

    public closedAt?: string;
    public orders?: string[];
    public amount?: number;
    public amountPerClient?: number;

    closeTable () {
        this.closedAt = (new Date()).toString();
        this.amountPerClient = this.amount / this.clientsCount;
    }
}

export default Table;
