import express from "express";
import { home } from "../controllers/rootController";

const router = express.Router();

router.get("/", home);

export default router;
