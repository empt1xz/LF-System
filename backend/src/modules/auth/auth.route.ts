import { Router } from "express";
import * as useAuthController from "./auth.controller";
import { Middleware } from "../../middleware/middleware";
const useAuth = Router();

useAuth.post("/login", useAuthController.loginController);
useAuth.post("/register", useAuthController.registerController);
useAuth.post("/logout", useAuthController.logoutController);
useAuth.get("/session", Middleware, useAuthController.mySessionController);

export default useAuth;
