// import { data } from "../../../SpeakerData";
import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handle(req, res) {
  // res.status(200).send(JSON.stringify(data, null, 2));
  const jsonfile = path.resolve("./", "db.json");
  try {
    const readFileData = await readFile(jsonfile);
    await delay(1000);
    const speakers = JSON.parse(readFileData).speakers;
    if (speakers) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(speakers, null, 2));
      console.log("GET /api/speakers status:200");
    }
  } catch (e) {
    console.log("GET /api/speakers error", e);
    res.status(404).send("File not found on server");
  }
}
