export default (req, res) => {

    if (req.method === 'POST') {

        //session에 저장
        res.setHeader('Set-Cookie', `a_name=${req.body.id};MAX-Age=3600;HttpOnly,Secure`);
        res.statusCode = 200;
        res.json({message: 'ok'});
    }
};