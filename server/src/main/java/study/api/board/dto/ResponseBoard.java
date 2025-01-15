package study.api.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import study.api.board.domain.Board;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ResponseBoard {
    public Long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static ResponseBoard build(Board board) {
        return new ResponseBoard(
            board.getId(),
            board.getTitle(),
            board.getContent(),
            board.getCreatedAt(),
            board.getUpdatedAt()
        );
    }
}
