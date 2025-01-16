import {Pagination} from "react-bootstrap";
import { useNavigate, useSearchParams} from "react-router-dom";

export default function Paging(props){
    const navigate = useNavigate()
    const totalItemCount = Math.ceil(props.totalCount/10)
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get('page'))

    let pages = []
    for (let i = 1; i <=totalItemCount; i++) {
        pages.push(i)
    }

    function handlePrev(){
        if (currentPage === 1) {
            return
        }
        navigate(`/?page=`+(currentPage-1))
    }

    function handleNext(){
        if (currentPage>=totalItemCount) {
            return
        }
           navigate(`/?page=`+(currentPage+1))
    }


    return (
        <Pagination>
                <Pagination.Prev onClick={handlePrev}/>
            {pages.map((i) => (
                <Pagination.Item  href={`/?page=${i}`} active={i===currentPage}>{i}
                </Pagination.Item>
            ))}
                <Pagination.Next onClick={handleNext}/>
        </Pagination>
    );
}
