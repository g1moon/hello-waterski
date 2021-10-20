import express from 'express'
import cors from 'cors'
import messagesRoute from './routes/messages.js'
import usersRoute from './routes/users.js'
import linesRoute from "./routes/lines.js";
import spotsRoute from "./routes/spots.js";
import useditemsRoute from "./routes/useditems.js";
import imagesRoute from "./routes/images.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./public/img/",
  filename: function(req, file, cb) {
    cb(null, "imgfile" + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
});


const app = express()
//urlencoded, json 사용하겠다.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
)

app.use(express.static('public'));


const routes = [...linesRoute, ...spotsRoute, ...useditemsRoute, ...imagesRoute];

//routes : [{method:, route:, handler:}, {method:, route:, handler:}, {method:, route:, handler:}]
// 아래와 같이 사용(forEach로 route 등록)
// app.get('/', (req, res) => {
//     res.send('hello');
// });

routes.forEach(({ method, route, handler }) => {
    //app.method(url, handler)
    app[method](route, handler)
})

app.post("/saveImage", upload.single("img"), function(req, res, next) {
  console.log(req.body);
  res.send({
    fileName: req.file.filename
  });
});


//
app.listen(8000, () => {
    console.log('server listening on 8000...')
})