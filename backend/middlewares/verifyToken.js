export const verifyToken = (req, res, next) => {
  try {

    console.log("Cookies:", req.cookies);

    const token = req.cookies.token;

    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (err) {

    return res.status(401).json({
      message: "Invalid or expired token"
    });

  }
};