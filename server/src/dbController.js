import fs from 'fs'
import { resolve } from 'path'

const basePath = resolve()

const filenames = {
    lines: resolve(basePath, 'src/db/lines.json'),
    spots: resolve(basePath, 'src/db/spots.json'),
    useditems: resolve(basePath, 'src/db/useditems.json'),
    images: resolve(basePath, 'src/db/images.json'),
    users: resolve(basePath, 'src/db/users.json'),
}

//Json이엇던 것을 풀어서 -> 인코딩 명시 해줘야함.
export const readDB = target => {
    try {
        return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
    } catch (err) {
        console.error(err)
    }
}

//db 덮어 쓰기 -> data를 JSON으로 변경해서 등록
export const writeDB = (target, data) => {
    try {
        return fs.writeFileSync(filenames[target], JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}