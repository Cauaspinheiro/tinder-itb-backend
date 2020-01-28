import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

export default routes;
