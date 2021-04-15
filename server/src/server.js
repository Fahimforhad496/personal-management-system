import app from "./app";
import { connectWithDb } from "./database";

const port = 3000;
app.get("/", (req, res) => {
    res.send("Get request working fine");
});

app.listen(port, () => {
    connectWithDb();
    console.log("This app is listening on port", port);
});
