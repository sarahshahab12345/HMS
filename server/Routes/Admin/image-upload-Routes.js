import { Router } from "express";
import multer from "multer";
import handleImageUpload from "../../controllers/Admin/image-upload-Controller.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/upload-image", upload.single("file"), handleImageUpload);

export default router;
