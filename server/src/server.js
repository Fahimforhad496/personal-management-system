import app from './app';


const port = 3000;
app.get("/", (req, res) => {
    res.send("Get request working fine");
});

app.listen(port,()=>{
    console.log("This app is listening on port", port);
})