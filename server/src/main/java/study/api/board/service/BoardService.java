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
@Transactional(readOnly = true) // 성능 최적화
@RequiredArgsConstructor // final 필드의 (필수) 생성자 생성
public class BoardService {

    private final BoardRepository boardRepository;

    // 생성
    @Transactional // 따로 설정시 우선 (데이터 수정이 되어야 함 상단에 readOnly 선언 되어 있기 때문)
    public ResponseBoard save(RequestBoard req,Long memberId) {
        Board board = Board.builder()
                .title(req.getTitle())
                .content(req.getContent())
                .creatorId(memberId)
                .build();

            Board savedBoard = boardRepository.save(board);
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
        return ResponseBoard.build(boardRepository.findById(id).get());
    }

    // 수정
    @Transactional
    public ResponseBoard update(Long id ,RequestBoard req) {
        Board board = boardRepository.findById(id).get();
        board.updateBoard(req.getTitle(),req.getContent());
        return ResponseBoard.build(board);
    }

    // 삭제 (SoftDelete)
    @Transactional
    public void delete(Long id) {
        boardRepository.deleteById(id);
    }
}
