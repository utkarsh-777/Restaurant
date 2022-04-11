import express from "express";
import menuController from "../controllers/menuController.js";
import requireLogin from "../middlewares/requireLogin.js";

const router = express.Router();

router.post("/add-category", requireLogin, menuController.addCategory);
router.patch("/edit-category/:categoryId", requireLogin, menuController.editCategory);
router.delete("/remove-category/:categoryId", requireLogin, menuController.removeCategory);
router.post("/add-item/:categoryId", requireLogin, menuController.addMenuItem);
router.patch("/edit-item/:itemId", requireLogin, menuController.editMenuItem);
router.delete("/remove-item/:itemId", requireLogin, menuController.removeMenuItem);
// router.delete("/removeItems", requireLogin, menuController.removeBulkItems);

export default router;
