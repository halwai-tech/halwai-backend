import cloudinary from "../config/cloudinaryconfig";
import { UploadApiResponse } from "cloudinary";

/**
 * Uploads a file buffer to Cloudinary.
 * @param {Buffer} buffer - The file buffer (from multer).
 * @param {string} mimetype - The file's MIME type (e.g. image/jpeg).
 * @param {string} folder - Optional folder in Cloudinary.
 * @returns {Promise<Object>} - Cloudinary upload result.
 */

export const uploadToCloudinary=async (buffer:Buffer, mimetype:string, folder:string) :Promise<UploadApiResponse>=>{
    const base64image=buffer.toString('base64');
    const dataUri=`data:${mimetype};base64,${base64image}`;

    const result=cloudinary.uploader.upload(dataUri,{
        folder
    });

    return result;

}