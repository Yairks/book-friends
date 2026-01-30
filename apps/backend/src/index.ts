import express from "express";
import cors from "cors";
import supabase from './supabase';
import fs from 'fs/promises';

const app = express();
app.use(cors());

async function saveImage(buffer: Buffer<ArrayBuffer>, path: string) {
    try {
        await fs.writeFile(path, buffer);
        console.log('Image buffer written to file successfully!');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}


app.get("/users", async (_req, res) => {
    const { data, error } = await supabase.from('users').select('*');

    const response = await fetch('https://serverless.roboflow.com/bookfriends/workflows/detect-count-and-visualize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            api_key: process.env.ROBOFLOW_API_KEY,
            inputs: {
                "image": { "type": "url", "value": "https://raw.githubusercontent.com/Yairks/book-friends/refs/heads/main/packages/shared/resources/bookshelf.jpg" }
            }
        })
    });

    const result = await response.json();

    let i = 0
    for (const image of result["outputs"][0]["dynamic_crops"]) {
        const crop = atob(image["value"])
        const buf = Buffer.from(crop, 'binary');
        saveImage(buf, './cropped_pictures/cropped_image' + (i++) + '.jpg');
    }

    console.log(result);


    res.json({ status: "ok", result });
});

app.listen(4000, () => {
    console.log("Backend running at http://localhost:4000");
});