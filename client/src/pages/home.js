import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                navigate("/new-board");
            }}
        >
            works로 이동
        </button>
    );
};

export default Home;
