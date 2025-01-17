import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = ()=>{

    return (
        <Container style={{marginTop:"10%"}}>
            <Form noValidate style={{width: "50%", margin: "auto", padding: "2%", background: "#f8f9fa"}}>
                <h1 style={{marginBottom: "5%"}}>Login</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <div style={{textAlign: "center"}}>
                    <Button variant="outline-dark" style={{width: "35%", height: "3em"}} type={"submit"}>로그인</Button>
                </div>
                <Link to={"/signup"}
                      style={{fontSize: "90%", float: "right", textDecoration: "none", color: "black"}}>회원가입</Link>
            </Form>
        </Container>
    );
}
export default Login
