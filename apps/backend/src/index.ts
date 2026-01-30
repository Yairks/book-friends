import express from "express";
import cors from "cors";
import supabase from './supabase';

const app = express();
app.use(cors());


app.get("/users", async (_req, res) => {
    const { data, error } = await supabase.from('users').select('*');

    res.json({ status: "ok", data });
});

app.listen(4000, () => {
    console.log("Backend running at http://localhost:4000");
});