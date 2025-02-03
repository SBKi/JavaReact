import {Button, Container, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import board from "../../axios/services/board";
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment/moment";

const DetailBoard = () => {
    const id = useParams().id
    const navigate = useNavigate()
    const [formData, setData]=useState({title:"",content:""})
    const [dateList,setDate] = useState({createdAt:"",updatedAt:""})
    const [isEditMode, setEditMode] = useState(false);
    const [validated, setValidated] = useState(false);

    useEffect(()=>{
        board.getBoard(id).then((res)=>{
            const createdAtDate = new Date(res.createdAt)
            const momentCreatedAtDate = moment(createdAtDate).format('YYYY-MM-DD HH:m')
            const updatedAtDate = new Date(res.createdAt)
            const momentUpdatedAtDate = moment(updatedAtDate).format('YYYY-MM-DD HH:m')
            setDate({...dateList,createdAt: momentCreatedAtDate, updatedAt: momentUpdatedAtDate})
            setData({...formData,title:res.title,content: res.content})

        }).catch((err)=>{
            alert(err)
            navigate("/")
        })

    },[]);

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
            board.updateBoard(id,formData).then(()=>{
                navigate("/");
            }).catch((err) => {
                console.log(err)
            });
        }else {
            e.preventDefault()
            e.stopPropagation()
            setValidated(true)
        }
    }

    function handleDelete(){
        if(window.confirm("정말 삭제 하시겠습니까?")) {
            board.deleteBoard(id).then(
                navigate("/")
            ).catch((err)=>{
                alert(err)
            })
        }
    }

    function handleChangeMode(){
        setEditMode(!isEditMode)
    }

    return !isEditMode ? (
        <Container>
            <div style={{width: "50%", margin: "auto", padding: "2%", background: "#f8f9fa"}}>
                <div style={{textAlign: "right"}}>
                    <Button variant="primary" style={{marginRight: "1%"}} onClick={handleChangeMode}>수정</Button>
                    <Button variant="danger" onClick={handleDelete}>삭제</Button>
                </div>
                <div style={{background:"white",padding:"2%",margin:"3%",border:"1px solid #ffff"}}>
                    {formData.title}
                </div>
                <div style={{background:"white",padding:"2%",margin:"3%",border:"1px solid #ffff", minHeight:"20em"}}>
                    {formData.content}
                </div>
            </div>
        </Container>)
        : (
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width: "50%", margin: "auto", padding: "2%", background: "#f8f9fa"} } >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>글 제목</Form.Label>
                        <Form.Control type="text" onChange={handleTitle} required={true} value={formData.title}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>글 내용</Form.Label>
                    <Form.Control as="textarea" rows={13} onChange={handleContent} value={formData.content}/>
                </Form.Group>
                <div style={{textAlign: "right"}}>
                    <Button variant="primary" style={{marginRight: "1%"}} type={"submit"}>저장</Button>
                    <Button variant="danger" onClick={handleChangeMode}>취소</Button>
                </div>
            </Form>
        </Container>
    );
};

export default DetailBoard;
