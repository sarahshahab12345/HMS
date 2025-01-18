import { imageUploadUtil } from "../../helpers/cloudinary.js";

const handleImageUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = "data:" + req.file.mimetype + ";base64," + b64;
        const result = await imageUploadUtil(url);

        return res.json({
            success: true,
            result,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: "Error occured",
        });
    }
};

export default handleImageUpload;