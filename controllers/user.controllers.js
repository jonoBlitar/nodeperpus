import Users from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const tambahuser = async (req, res) => {

    try {
        console.log(req.body);
        const { username, password } = req.body;
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Users.create({ username: username, password: hashedPassword });
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const login = await Users.findAll({
            where: {
                username: username
            }
        });
        if (login.length === 0) return res.status(404).send("User");
        const user = login[0];
        

        // Verifikasi password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send("Invalid credentials");
        console.log(user.id);
        // Generate token
        const token = jwt.sign({ id: user.id }, "jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225", { expiresIn: "1h" });

        res.json({ token });
        
    } catch (error) {
        res.json({ message: error.message });
    }
};

