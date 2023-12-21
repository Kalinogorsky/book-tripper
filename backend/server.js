import express from "express";
import router from "./routes/book.js";

const app = express();
const port = 3000;

// Подключение роутинга
app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
