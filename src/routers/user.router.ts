import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewarces/common.middleware";

const router = Router();

router.get("/", userController.getList);
router.post("/", userController.create);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userID"),
  userController.getById,
);
router.put(
  "/:userId",
  commonMiddleware.isIdValid("userID"),
  userController.updateById,
);
router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userID"),
  userController.deleteById,
);

export const userRouter = router;
