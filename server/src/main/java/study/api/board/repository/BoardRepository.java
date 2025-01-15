package study.api.board.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import study.api.board.domain.Board;


@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    // 목록 조회 (페이징)
    Page<Board> findAllByOrderByCreatedAtDesc(Pageable pageable);
}
