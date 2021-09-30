import MsgInput from "./MsgInput";

const MsgItem = ({
                     timestamp,
                     text,
                     userId,
                     onUpdate,
                     isEditing,
                     startEdit,
                     id,
                     onDelete,
                     myId

                 }) => {


    return (
        <li className="messages__item">
            {/*title 부분*/}
            <h3>
                {userId} {' '}
                <sub>
                    {new Date(timestamp).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    })}
                </sub>
            </h3>
            {/*text부분*/}

            {isEditing === id ? (
                <>
                    <MsgInput text={text} mutate={onUpdate} id={id}/>
                </>
            ) : (<div>{text}</div>)}

            {userId === myId &&
            <div className="messages__buttons">
                <button onClick={startEdit}>수정</button>
                <button onClick={() => onDelete(id)}>삭제</button>
            </div>
            }

        </li>
    );
};

export default MsgItem