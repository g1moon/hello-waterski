
const Temp = () => {

    const [todos, setTodos] = useState([]);
    const [topTodos, setTopTods] = useState([]);

    //todos 받아오기
    const getTodos = async () => {
        const data = await fetcher('get', '/data/todos.json');
        setTodos(data);
    };

    //상위 10개 설정.
    const getTopTods = () => {
        let tmp;
        tmp = allSpotData.sort(function (a, b) {
            return b.like - a.like;
        });
        const res = res.slice(0, 10);
        setTopTods(res);
    };

    //처음에 todos 가져오기
    useEffect(() => {
        getTodos();
    }, []);

    //todos 받아오면(바뀌면 -> toptodos 설정하기)
    useEffect(() => {
        console.log('toptotp');
        getTodos();
    }, [todos]);

    //아직 상태가 업데이트 되지 않았다면 -> 로딩중 그려주기.
    if (todos === [] || topTodos === []) {
        console.log('----------sibal---')
        console.log(todos);
        console.log(topTodos);
        console.log('---------------------')
        return <div>로딩중</div>;
    }

    return (
        <>
            <TopTodos topTods={topTodos}/>
            <TodoList todos={todos}/>
        </>
    );
};

