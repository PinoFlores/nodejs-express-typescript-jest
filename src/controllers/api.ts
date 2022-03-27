import { Application, Request, Response } from "express";

export const healthCheck = (app: Application): void => {
  app.get("/status", (req: Request, res: Response) => {
    return res.status(200).send({ message: "Server OK" });
  });
};
