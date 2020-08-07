import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionControler from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionControler();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
