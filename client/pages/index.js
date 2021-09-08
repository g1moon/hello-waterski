import MsgList from "../components/Msg/MsgLIst";
import Link from 'next/link';

const Home = () => (
    <>
        <Link href="/Welcome">
            <a>Welcome</a>
        </Link>
        <MsgList/>
    </>
);

export default Home; 