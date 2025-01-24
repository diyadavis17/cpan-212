import express from "express"; 
const router = express.Router();

router.get("/" , (req, res) => {
  res.send("Welcome to the lab router");
});

router.get("/name", (req, res) => {
    res.send("Diya Davis");
});

router.get("/greeting", (req, res) => {
    res.send("Hello, I am Diya Davis");
});

router.get("/add/:x/:y", (req, res) => {
    const x = parseFloat(req.params.x);
    const y = parseFloat(req.params.y);
    const result = x + y;
    res.send(`The sum of ${x} and ${y} is ${result}`);
});



router.get("/calculate/:a/:b/:operation", (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const operation = req.params.operation;

    let result;

    switch (operation) {
        case "add":
            result = a + b;
            return res.send(`The result of adding ${a} and ${b} is ${result}`);
        case "subtract":
            result = a - b;
            return res.send(`The result of subtracting ${a} from ${b} is ${result}`);
        case "multiply":
            result = a * b;
            return res.send(`The result of multiplying ${a} and ${b} is ${result}`);
        case "divide":
            if (b === 0) {
                return res.send("Cannot divide by zero.");
            }
            result = a / b;
            return res.send(`The result of dividing ${a} by ${b} is ${result}`);
        case "power":
            result = a ** b;
            return res.send(`The result of ${a} raised to the power of ${b} is ${result}`);
        default:
            return res.send("Invalid operation. Use add, subtract, multiply, divide, or power.");
    }
});

export default router;
