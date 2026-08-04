import { Router } from "express";

import { freeClick, getClicks } from "./click.controller.js";

const router = Router();

router.get("/", getClicks);
router.post("/free", freeClick);

export default router;
