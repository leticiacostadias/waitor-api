import bodyParser from "body-parser";

import App from "./modules/_common/classes/App.class";

import TablesController from './modules/table/Tables.controller';

const app = new App({
  controllers: [
    new TablesController()
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
  ],
});

app.listen();
