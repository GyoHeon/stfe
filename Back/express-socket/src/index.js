import express from "express";

const app = express();

const PORT = 4000;

const PUBLIC_PATH = "../public";
app.use(express.static(path.join(__dirname, PUBLIC_PATH)));

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
