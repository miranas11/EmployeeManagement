import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.send(user);
}

export async function validateUser(req, res) {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    const foundUser = await User.findAndValidate(email, password);
    console.log(foundUser);
    if (!foundUser) {
        res.sendStatus(401);
    } else {
        const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });
        res.json({ token });
    }
}
