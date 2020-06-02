import express from 'express'
import { Request, Response } from 'express'

import IControllerBase from '../_common/interfaces/IControllerBase.interface'

class TablesController implements IControllerBase {
    public path = '/tables';
    public router = express.Router();

    constructor () {
        this.initRoutes();
    }

    public initRoutes() {
        this.router
            .get('/', this.getAll);
    }

    getAll = (req: Request, res: Response) => {
        const tables = [{
            id: 1,
            number: 10,
            clientsCount: 3
        }];

        res.send(tables);
    }
}

export default TablesController