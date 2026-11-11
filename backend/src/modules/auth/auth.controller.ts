import * as useService from "./auth.service";
import type { Request, Response } from "express";
import { fromNodeHeaders } from "better-auth/node";

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;
  const response = await useService.loginService(email, password);
  const data = await response.json();
  res.setHeader("Set-Cookie", response.headers.getSetCookie());
  res.status(response.status).json(data);
}

export async function registerController(req: Request, res: Response) {
  const { name, email, password } = req.body;
  const response = await useService.registerService(name, email, password);
  const data = await response.json();
  res.status(response.status).json(data);
}

export async function logoutController(req: Request, res: Response) {
  const headers = fromNodeHeaders(req.headers);
  const response = await useService.logoutService(headers);
  res.setHeader("Set-Cookie", response.headers.getSetCookie());
  res.status(response.status).json(await response.json());
}

export async function mySessionController(req: Request, res: Response) {
  const headers = fromNodeHeaders(req.headers);
  const session = await useService.mySessionService(headers);
  res.status(200).json(session || {message: "Você não tem sessão ativa"});
}
