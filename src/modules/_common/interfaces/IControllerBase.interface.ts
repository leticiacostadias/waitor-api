import { Router } from "express";

interface IControllerBase {
    initRoutes(): any
    router: Router
    path: string
}

export default IControllerBase