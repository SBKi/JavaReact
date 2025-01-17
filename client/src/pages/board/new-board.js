import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import board from "../../axios/services/board";
import {useNavigate} from "react-router-dom";

const NewBoard = () => {
    const [formData, setData]=useState({title:"",content:""})
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()

    function handleTitle(e){
        setData({...formData, title: e.target.value})
    }

    function handleContent(e){
        setData({...formData, content: e.target.value})
    }

    function handleSubmit(e){
        const form = e.currentTarget;
        if (form.checkValidity()){
            e.preventDefault()
            e.stopPropagation()
            setValidated(false)
            board.saveBoard(formData).then(() => {
                navigate("/");
            }).catch((err) => {
                console.log(err)
            });
        }else{
            e.preventDefault()
            e.stopPropagation()
            setValidated(true)
        }
    }

    return (
        <Container>
            <Form  noValidate validated={validated} onSubmit={handleSubmit} style={{width: "50%", margin: "auto", padding: "2%", background: "#f8f9fa"}} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>글 제목</Form.Label>
                    <Form.Control type="text" onChange={handleTitle} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>글 내용</Form.Label>
                    <Form.Control as="textarea" rows={13} onChange={handleContent}/>
                </Form.Group>
                <div style={{textAlign: "right"}}>
                    <Button variant="primary" style={{marginRight: "1%"}} type={"submit"}>저장</Button>
                    <Button variant="danger" href="/">취소</Button>
                </div>
            </Form>
        </Container>
    );
};

export default NewBoard;
