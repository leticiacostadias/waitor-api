import express from "express";

import { PORT } from "../../../config";

class App {
  public app: express.Application;
  public port: number;

  constructor(appInit: { middleWares: any; controllers: any }) {
    this.app = express();
    this.port = PORT;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      // tslint:disable-next-line:no-console
      console.log(`server started at http://localhost:${this.port}`);
    });
  }
}

export default App;
