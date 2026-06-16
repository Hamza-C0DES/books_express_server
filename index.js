import express from "express";
const app = express ();

app.get("/", (req, res) => {
    res.send("Hello, world");
});

app.get("/negate/:number", (req, res) => {
    const {number} = req.params; // extract the number the user wants to negate //
    const n = Number(number); // convert the number/input into a integer, we store that integer in a variable called n //
    res.send(n * -1); // response ; we send back the number after  1 //
})

app.get("/add/:number1/:number2", (req, res) => {
    const {number1} = req.params;
    const n1 = Number(number1);
    const {number2} = req.params;
    const n2 = Number(number2);
    res.send(n1+n2);
})

app.get("/subtract/:number1/:number2", (req, res) => {
    const {number1} = req.params;
    const n1 = Number(number1);
    const {number2} = req.params;
    const n2 = Number(number2);
    res.send(n1-n2);

})

// node file_name --watch //
// node --watch file_name //
app.listen(3000, () => {
    console.log("Server Running")
});