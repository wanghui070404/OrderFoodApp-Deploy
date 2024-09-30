import authMid from "./auth.mid.js";

import { UNAUTHORIZED } from "../constants/httpStatus.js";

const adminMid = (req, res, next) => {
    if (!req.user.isAdmin) res.status(UNAUTHORIZED).send();

    return next();
};

export default [authMid, adminMid];