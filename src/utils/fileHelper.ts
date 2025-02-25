import multer, { StorageEngine } from "multer";
import { Request } from "express";
import fs from "fs";

import { SERVER_URL } from "@/constants/env";
import { LOGUI } from "@/constants/logs";

interface File {
  filename: string;
  path: string;
}

const createStorage = (destinationPath: string): StorageEngine => {
  return multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, destination: string) => void
    ) => {
      cb(null, destinationPath);
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, filename: string) => void
    ) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
};

const uploadFile = (destinationPath: string) => {
  if (!destinationPath) {
    throw new Error("Destination path is required");
  }
  if (!fs.existsSync(destinationPath)) {
    console.log(
      LOGUI.FgYellow,
      `${destinationPath} path does not exist. Creating one...`
    );
    fs.mkdirSync(destinationPath, { recursive: true });
  }
  return multer({ storage: createStorage(destinationPath) });
};

// ============ Delete File   =============
const deleteFile = (path: string) => {
  if (path) {
    const filePath = path.replace(`${SERVER_URL}/`, "");
    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
    });
  } else {
    console.log(
      LOGUI.FgYellow,
      "No file to delete. File path is not available."
    );
  }
};

// const deleteMultipleFileHelper = (dir, req) => {
//   const files = req.body;
//   dir.map(async (location) => {
//     // const path = `./Uploads/${location}`;
//     const fileExist = files?.attachments?.find((name) => name === location);
//     !fileExist && (await AWSBucketDeleteImage(location));
//     // fs.unlink(path, (err) => {
//     //   if (err) console.log(err);
//     //   else console.log(path, 'File Deleted successfully.');
//     // });
//   });
// };

const getFileUrl = async (file: File): Promise<string> => {
  let s3_img: string = "";
  if (file) {
    const { filename, path } = file;
    s3_img = `${SERVER_URL}/${path}`;
  }
  return s3_img;
};

export const fileHelper = {
  uploadFile,
  deleteFile,
  getFileUrl,
  // deleteMultipleFileHelper
};

export default fileHelper;
