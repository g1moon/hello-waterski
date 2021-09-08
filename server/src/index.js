import express from 'express'
import cors from 'cors'
import messagesRoute from './routes/messages.js'
import usersRoute from './routes/users.js'

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

const routes = [...messagesRoute, ...usersRoute]

//routes : [{method:, route:, handler:}, {method:, route:, handler:}, {method:, route:, handler:}]
// 아래와 같이 사용(forEach로 route 등록)
// app.get('/', (req, res) => {
//     res.send('hello');
// });

routes.forEach(({ method, route, handler }) => {
    //app.method(url, handler)
    app[method](route, handler)
})


//
app.listen(8000, () => {
    console.log('server listening on 8000...')
})