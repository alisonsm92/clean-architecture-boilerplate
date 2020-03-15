/**
 * Adapts controllers to framework Express
 * @param {object} controller
 */
const adaptController = (controller) => async (req, res) => {
    const httpRequest = {
        body: req.body,
    };

    const responseHttp = await controller(httpRequest);

    res.status(responseHttp.statusCode).json(responseHttp.body);
};

module.exports = { adaptController };
