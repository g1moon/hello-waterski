import MsgItem from './MsgItem';
import MsgInput from "./MsgInput";
import {useEffect, useState} from "react";
import fetcher from "../../fetcher";
import {useRouter} from "next/router";
import {error} from "next/dist/build/output/log";

//mock data 만들기
const UserIds = ['jas', 'jay'];
const getRandomUserId = () => UserIds[Math.round(Math.random())];
//msgs라는 mock data가 만들어진다.
// const originalMsgs = Array(50).fill(0).map((_, idx) => ({
//     id: 50 - idx,
//     userId: getRandomUserId(),
//     timestamp: 1234567890123 + idx * 1000 * 60,
//     text: `${50-idx} mock item text`
// }))


const MsgList = () => {
    const {query: {userId = ''}} = useRouter();
    // const userId = query.userId;
    console.log(`userId : ${userId}`);
    const [msgs, setMsgs] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

    // CREATE MESSAGE-----------------------------------------------------
    //MsgInput의 mutate에 넣을 함수

//     method: 'post',
//         route: '/messages',
//         handler: ({ body }, res) => {
//         const msgs = getMsgs()
//         const newMsg = {
//             id: v4(),
//             text: body.text,
//             userId: body.userId,
//             timestamp: Date.now(),
//         }
//         msgs.unshift(newMsg)
//         setMsgs(msgs)
//         res.send(newMsg)
//     },
// },
    const onCreate = text => {
        // const newMsg = {
        //     id: msgs.length + 1,
        //     userId: getRandomUserId(),
        //     timestamp: Date.now(),
        //     // text: `${msgs.length} mock item text`
        //     text: `${msgs.length+1} - ${text}`
        // }
        const newMsg = fetcher('post', '/messages', {text, userId});
        if (!newMsg) throw Error('something wrong');
        setMsgs(msgs => [newMsg, ...msgs]); //추가
    };

    //MsgInput의 mutate에 넣을 함수
    //update에 관한 함수 -> MsgItem의 id를 받아서 -> 그 위치의 값을 변경해준다.
    const onUpdate = async (text, id) => {
        // console.log(`onUpdate-- id:${id} text:${text}`);
        // setMsgs(prev => {
        //     const targetIdx = msgs.findIndex(msg => msg.id === id);
        //     if(targetIdx === -1) return msgs;
        //     const newMsgs = [...msgs];
        //     newMsgs.splice(targetIdx, 1, {
        //         ...msgs[targetIdx],
        //         text,
        //     })
        //     // setIsEditing(false);
        //     return newMsgs;
        // });
        // console.log('id',id);
        // console.log('msgs[id]', msgs[id]);
        // doneEdit();

        const newMsg = await fetcher('put', `/messages/${id}`, {text, userId});
        console.log('newMSG', newMsg);
        if (!newMsg) throw Error('something wrong');
        setMsgs(prev => {
            const targetIndex = prev.findIndex(msg => msg.id === id);
            if (targetIndex === -1) return prev;
            const newMsgs = [...prev];
            newMsgs.splice(targetIndex, 1, newMsg);
            return newMsgs;
        });

        doneEdit();
    };


    const onDelete = async (id) => {
        //messages/${id}?userId=${userId}
        //messages/${id}, {params: { userId}
        const delId = await fetcher('delete', `/messages/:${id}?userId=${userId}`);
        console.log('delId', delId);
        setMsgs(prev => {
            const targetIdx = prev.findIndex(msg => {
                return msg.id === delId.substr(1, delId.length);
            });
            if (targetIdx === -1) return prev;
            const newMsgs = [...prev];
            newMsgs.splice(targetIdx, 1);
            return newMsgs;
        });


        // setMsgs(prev => {
        //     const targetidx = msgs.findIndex(msg => msg.id === id);
        //
        //     console.log(targetidx);
        //     const newMsgs = [...msgs];
        //     newMsgs.splice(targetidx, 1);
        //     return newMsgs;
        // });
    };

    const doneEdit = () => setIsEditing(null);

    //useEffect 내부에서는 async, await를 직접 호출하지 않게 함.
    const getMessages = async () => {
        // const fetcher = async (method, url, ...rest) =>
        const msgs = await fetcher('get', 'messages');
        setMsgs(msgs);
    };

    //DOMContendLoaded
    useEffect(() => {
        getMessages()
    }, []);

    return (
        <>
            <MsgInput mutate={onCreate}/>
            <ul className="messages">
                {
                    msgs.map(x => <MsgItem key={x.id} {...x} onDelete={onDelete} onUpdate={onUpdate}
                                           isEditing={isEditing} myId={userId} startEdit={() => setIsEditing(x.id)}/>)
                }
            </ul>
        </>
    );
};

export default MsgList;