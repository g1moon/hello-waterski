export default (req, res) => {
    res.setHeader('Set-Cookie', `a_name=GIGIGI;MAX-Age=0;HttpOnly,Secure`);
    res.statusCode = 200;
    console.log('logout ok  ');
    res.json({message: 'ok'});
};