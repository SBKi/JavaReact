import { useLocation } from "react-router-dom";
import {Button} from "react-bootstrap";
import board from "../../axios/services/board";

const NewBoard = () => {
    const location = useLocation();
    function saveBoard(){
        let param={title:"test",content:"test"}
        board.saveBoard(param)
    }
    function updateBoard(){
        let param={title:"2test",content:"test2"}
        board.updateBoard(4,param)
    }
    function deleteBoard(){
        board.deleteBoard(1)
    }
    return (
        <div>
            <Button variant="primary" onClick={saveBoard}>게시글 등록</Button>
            <Button variant="primary" onClick={updateBoard}>게시글 수정</Button>
            <Button variant="primary" onClick={deleteBoard}>게시글 삭제</Button>
            <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
        </div>
    );
};

export default NewBoard;
