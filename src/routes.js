import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.post("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

export default routes;
