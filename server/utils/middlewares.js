import jwt from "jsonwebtoken";

export async function isAuthorized(req, res, next) {
    const header = req.headers["authorization"];

    const token = header.slice(7);

    if (!token) {
        return res.status(403).json({ error: "No token provided" });
    }

    jwt.verify(token, "secret-key", (err, user) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Failed to authenticate token" });
        }

        req.user = user;

        next();
    });
}
