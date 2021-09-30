export default (req, res) => {
    res.statusCode = 200;
    res.json({id: req.cookies.a_name });
};