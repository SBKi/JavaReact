package study.api.board.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import study.api.board.domain.Board;


@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    @Query("SELECT b FROM Board b JOIN FETCH b.creator")
    Page<Board> findAllWithWorkers(Pageable pageable);

    @Query("SELECT b FROM Board b LEFT JOIN FETCH b.creator WHERE b.id = :id")
    Board findByIdWithMember(@Param("id") Long id);
}
