export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                errors: result.error.errors.map((e) => ({
                    path: e.path.join("."),
                    message: e.message
                }))
            });
            return;
        }
        req.body = result.data; //Replaced with parsed data
        next();
    };
};
