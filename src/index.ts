import bodyParser from "body-parser";

import App from "./App";

import TablesController from './controllers/tables.controller';

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
