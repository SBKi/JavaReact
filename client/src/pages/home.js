import {Button, Col, Container, Row, Table} from "react-bootstrap";
import board from "../axios/services/board";
import {useEffect, useState} from "react";
import moment from 'moment';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [boardList, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        board.retrieveBoard().then((res)=>{
            res.data.map((data)=>{
                const createdAtDate = new Date(data.createdAt)
                data.createdAt = moment(createdAtDate).format('YYYY-MM-DD hh:mm')
                const updatedAtDate = new Date(data.updatedAt)
                data.updatedAt = moment(updatedAtDate).format('YYYY-MM-DD hh:mm')
            })
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, []);

    return (
        <Container>
            <Row style={{marginBottom: "2%", textAlign: "right"}}>
                <Col>
                    <Button variant="primary" href={"/board-new"}>게시글 등록</Button>
                </Col>
            </Row>
            <Row>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr style={{textAlign: "center"}}>
                        <th style={{width: "5%"}}>No</th>
                        <th style={{width: "50%"}}>제목</th>
                        <th style={{width: "12%"}}>생성 날짜</th>
                        <th style={{width: "12%"}}>수정 날짜</th>
                        <th style={{width: "7%"}}>작성자</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardList && boardList.map((board, key) => (
                        <tr key={key} onClick={()=>navigate('board/'+board.id)}>
                            <td style={{textAlign: "center"}}>{board.id}</td>
                            <td>{board.title}</td>
                            <td style={{textAlign: "center"}}>{board.createdAt}</td>
                            <td style={{textAlign: "center"}}>{board.updatedAt}</td>
                            <td style={{textAlign: "center"}}>admin</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default Home;
