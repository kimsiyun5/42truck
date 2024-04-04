import express from 'express';
import { getOrder, postOrder } from '../controllers/orderController';

const router = express.Router();

router.route("/").get(getOrder).post(postOrder);

export default router;