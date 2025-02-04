package study.api.board.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import study.api.board.repository.BoardRepository;
import study.api.board.domain.Board;
import study.api.board.dto.RequestBoard;
import study.api.board.dto.ResponseBoard;
import study.common.dto.PaginatedResponse;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
@RequiredArgsConstructor // final 필드의 (필수) 생성자 생성
public class BoardService {

    private final BoardRepository boardRepository;

    // 생성
    public ResponseBoard save(RequestBoard req,Long memberId) {
        Board board = Board.builder()
                .title(req.getTitle())
                .content(req.getContent())
                .creatorId(memberId)
                .build();

            Board savedBoard = boardRepository.save(board);
            // application.yml파일에서 open-in-view 설정을 false로 하지않으면 (default값이 true임)
            // api요청과 응답사이에 영속성이 계속 유지 되기 때문에 save한 내용이 find부분에서
            // db를 거치지않고 1차 캐시에서 바로 리턴됨으로 join의 결과가 null로 표시 된다.

            // - @Tranctional 어노테이션을 선언하고 EntityManager로 flush, clear로 명시적으로 캐시를 삭제 하는 방법도 있음
            Board boardWithMembers = boardRepository.findByIdWithMember(savedBoard.getId());
        return ResponseBoard.build(boardWithMembers);
    }

    // 목록 조회
    public PaginatedResponse<ResponseBoard> index(Pageable pageable) {
        Page<ResponseBoard> boards = boardRepository.findAllWithWorkers(pageable).map(ResponseBoard::build);
        return PaginatedResponse.<ResponseBoard>builder()
                .data(boards.getContent())
                .max(boards.getSize())
                .offset(boards.getNumber())
                .total(boards.getTotalElements())
                .build();
    }

    // 조회(상세)
    public ResponseBoard show(Long id) {
        return ResponseBoard.build(boardRepository.findByIdWithMember(id));
    }

    // 수정
    @Transactional
    public ResponseBoard update(Long id ,RequestBoard req) {
        // 헤더에서 멤버 아이디 취득해서 본인이 쓴 글인지 판단
        Board board = boardRepository.findById(id).get();
        board.updateBoard(req.getTitle(),req.getContent());
        return ResponseBoard.build(board);
    }

    // 삭제 (SoftDelete)
    @Transactional
    public void delete(Long id) {
        // 헤더에서 멤버 아이디 취득해서 본인이 쓴 글인지 판단
        boardRepository.deleteById(id);
    }
}
