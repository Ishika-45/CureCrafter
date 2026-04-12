import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: 'Not Authorized Login Again' });
        }     
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);          
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            req.admin = decoded;
            next();
        }
        );
    } catch (error) {

        console.error('Error in admin authentication middleware:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
export default authAdmin;