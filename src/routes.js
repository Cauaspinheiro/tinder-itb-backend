import { Router } from "express";
import UserController from "./controllers/UserController";
import SchoolController from "./controllers/SchoolController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.post("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.get("/schools", SchoolController.index);
routes.get("/schools/:id", SchoolController.show);
routes.post("/schools", SchoolController.store);
routes.post("/schools/:id", SchoolController.update);
routes.delete("/schools/:id", SchoolController.destroy);

export default routes;
