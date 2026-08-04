import { Request, Response } from "express";

import { getClickCounts, increaseFreeClick } from "./click.service.js";

export const getClicks = async (_req: Request, res: Response) => {
  const click = await getClickCounts();

  res.status(200).json({
    success: true,
    data: click,
  });
};

export const freeClick = async (_req: Request, res: Response) => {
  const click = await increaseFreeClick();

  res.status(200).json({
    success: true,
    data: click,
  });
};
