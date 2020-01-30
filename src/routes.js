import { Router } from "express";
import UserController from "./controllers/UserController";
import SchoolController from "./controllers/SchoolController";
import checkUserExists from "./middlewares/checkUserExists";
import checkUserNotExists from "./middlewares/checkUserNotExists";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/users", UserController.index);
routes.get("/users/:id", checkUserExists, UserController.show);
routes.post("/users", checkUserNotExists, UserController.store);
routes.put("/users/:id", checkUserExists, UserController.update);
routes.delete("/users/:id", checkUserExists, UserController.destroy);

routes.get("/schools", SchoolController.index);
routes.get("/schools/:id", SchoolController.show);
routes.post("/schools", SchoolController.store);
routes.put("/schools/:id", SchoolController.update);
routes.delete("/schools/:id", SchoolController.destroy);

export default routes;
