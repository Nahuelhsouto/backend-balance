import { Router } from "express";
import {
  createTran,
  deleteTran,
  getTran,
  getTranCount,
  getTrans,
  updateTran,
} from "../controllers/transac";
const router = Router();
/**
 * @swagger
 *  tags:
 *   name: Transactions
 *   description: Transactions Endpoints
 */
/**
 * @swagger
 * /transaction:
 *  get:
 *   summary: Get all transactions
 *   tags: [Transactions]
 */
router.get("/transac", getTrans);
/**
 * @swagger
 * /transaction:
 *  get:
 *   summary: Get the amount of transactions
 *   tags: [Transactions]
 */
router.get("/transac/count", getTranCount);
/**
 * @swagger
 * /transaction:
 *  get:
 *   summary: Get transaction by id
 *   tags: [Transactions]
 */
router.get("/transac/:id", getTran);
/**
 * @swagger
 * /transaction:
 *  post:
 *   summary: save new transaction
 *   tags: [Transactions]
 */
router.post("/transac", createTran);
/**
 * @swagger
 * /transaction:
 *  put:
 *   summary: update transaction by id
 *   tags: [Transactions]
 */
router.put("/transac/:id", updateTran);
/**
 * @swagger
 * /transaction:
 *  delete:
 *   summary: delete transaction by id
 *   tags: [Transactions]
 */
router.delete("/transac/:id", deleteTran);

export default router;
