const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// File filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    allowedTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error("Invalid file type"));
};

const upload = multer({ storage, fileFilter });

module.exports = upload;