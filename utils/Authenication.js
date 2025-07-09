import { userDatafind } from "../Repository/userDatabse.js";
import { verifyToken } from "./jwtToken.js";

export async function Authencation(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "No or invalid authorization header" });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.split(" ")[1];

    const verification = verifyToken(token);

    const emailVerification = await userDatafind(verification.email);

    if (!emailVerification) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Optionally attach user to request for use in next handlers
    req.user = emailVerification;

    next();
  } catch (error) {
    console.log("Authentication Error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default Authencation;
