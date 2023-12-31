import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    cb(null, `${__dirname}/../../uploads/`);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    const fileOriginalName = file.originalname.replace(/\.[^.\/]+$/, '').replace(/\s+/g, '').replace(/[^\w\s]/gi, '');
    const extension = path.extname(file.originalname);
    cb(null, fileOriginalName + uniqueSuffix + extension);
  }
});

const upload = multer({
  storage
});

export default upload;
