import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import authApi from "../../axios/services/auth";
// import {useNavigate} from "react-router-dom";

const Singup = ()=>{
    const [info, setInfo] =useState({Id:"",Password:"",NickName:""})
    const [validated, setValidated] = useState(false);
    // const navigate = useNavigate()

    function handleID(e){
        setInfo({...info, Id: e.target.value})
    }

    function handlePassword(e){
        setInfo({...info, Id: e.target.value})
    }

    function handleNickName(e){
        setInfo({...info, Id: e.target.value})
    }

    function handleSubmit(e){
        const form = e.currentTarget
        if (form.checkValidity()){
            e.preventDefault()
            e.stopPropagation()
            setValidated(false)
            const param = {loginID:"1",password:"2",nickName:"3"}
            authApi.signup(param).then(()=>{
                console.log("a")
            }).catch((err)=>{
                console.log(err)
            })
        }else {
            e.preventDefault()
            e.stopPropagation()
            setValidated(true)
        }
    }

    return (
        <Container style={{marginTop: "10%"}}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width: "50%", margin: "auto", padding: "2%", background: "#f8f9fa"}}>
                <h1 style={{marginBottom: "5%"}}>Sign up</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" onChange={handleID} required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePassword} required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>NickName</Form.Label>
                    <Form.Control type="text" placeholder="NickName" onChange={handleNickName} required={true}/>
                </Form.Group>
                <div style={{textAlign: "center"}}>
                    <Button variant="outline-dark" style={{width: "35%", height: "3em"}} type={"submit"}>회원가입</Button>
                </div>
            </Form>
        </Container>
    );
}
export default Singup
