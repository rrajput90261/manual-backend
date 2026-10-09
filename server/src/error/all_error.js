export const errorhandling = (err, res) => {
    if (err.name == "ValidationError") return res.status(400).send({ status: false, message: err.message });
    if (err.name == "UnauthorizedError") return res.status(401).send({ status: false, message: err.message });
    if (err.name == "ForbiddenError") return res.status(403).send({ status: false, message: err.message });
    if (err.name == "NotFoundError") return res.status(404).send({ status: false, message: err.message });
    if (err.name == "ConflictError") return res.status(409).send({ status: false, message: err.message });
    if (err.name == "CastError") return res.status(400).send({ status: false, message: err.message });
    if (err.code == 11000) return res.status(409).send({ status: false, message: "Duplicate key error" });
    if (err.name == "TooManyRequestsError") return res.status(429).send({ status: false, message: err.message });
    if (err.status == 403) return res.status(403).send({ status: false, message: err.message });
    if (err.status == 404) return res.status(404).send({ status: false, message: err.message });
    if (err.status == 409) return res.status(409).send({ status: false, message: err.message });
    if (err.status == 429) return res.status(429).send({ status: false, message: err.message });
    if (err.status == 429) return res.status(429).send({ status: false, message: err.message });

    return res.status(500).send({ status: false, message: err.message || "Internal Server Error" });
};