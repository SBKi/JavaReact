import {Button, Container, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import authApi from "../../axios/services/auth";

const Login = ()=>{
    const [info, setInfo] =useState({Id:"",Password:""})
    const [validated, setValidated] = useState(false);
    const [errorMsg, setError] = useState()
    const navigate = useNavigate()

    function handleID(e){
        setInfo({...info, Id: e.target.value})
    }

    function handlePassword(e){
        setInfo({...info, Password: e.target.value})
    }

    function handleSubmit(e){
        const form = e.currentTarget
        if (form.checkValidity()){
            e.preventDefault()
            e.stopPropagation()
            setValidated(false)
            const param = {loginID:info.Id,password:info.Password}
            authApi.login(param).then(()=>{
                navigate("/");
            }).catch((err)=>{
                setError(err.response.data.message)
            })
        }else {
            e.preventDefault()
            e.stopPropagation()
            setValidated(true)
        }
    }

    return (
        <Container style={{marginTop:"10%"}}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}
                  style={{width: "50%", margin: "auto", padding: "2%", background: "#f8f9fa"}}>
                <h1 style={{marginBottom: "5%"}}>Login</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" onChange={handleID} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
                </Form.Group>
                <div style={{textAlign: "center"}}>
                    <Button variant="outline-dark" style={{width: "35%", height: "3em"}} type={"submit"}>로그인</Button>
                </div>
                <Link to={"/signup"}
                      style={{fontSize: "90%", float: "right", textDecoration: "none", color: "black"}}>회원가입</Link>

                <p style={{marginTop: "2%", color: "red", fontSize: "80%"}}>
                    {errorMsg}
                </p>
            </Form>
        </Container>
    );
}
export default Login
