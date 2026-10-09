import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import sharp from "sharp";
import fs from "fs/promises";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.Cloud_name,
    api_key: process.env.Api_key,
    api_secret: process.env.api_secret
});

export const single_img_url = async (path) => {
    try {
        const compressedImage = await sharp(path) .resize({width: 1200,withoutEnlargement: true})
            .jpeg({
                quality: 60,
                mozjpeg: true
            })
            .toBuffer();

        const uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "PlantNest",
                    resource_type: "image"
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            stream.end(compressedImage);
        });

        console.log("Upload Result:", uploadResult.secure_url);

        return uploadResult;

    } catch (err) {
        console.log(err.message);
    }
};

export const multiple_img_url = async (paths) => {
    try {
        const uploadResults = await Promise.all( paths.map(async (path) => {
                const compressedImage = `./uploads/compressed-${Date.now()}-${Math.random().toString(36).substring(2,15)}.webp`;

            }) );

        return uploadResults;
    } catch (err) {
        console.log(err.message);
    }
};

export const delete_img_url = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId,{resource_type: "image"});
        return deleteResult;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}

