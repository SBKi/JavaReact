package study.api.board;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import study.api.board.dto.RequestBoard;
import study.api.board.dto.ResponseBoard;
import study.api.board.service.BoardService;
import study.common.dto.PaginatedResponse;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService service;

    // 생성
    @PostMapping
    public ResponseBoard save(@RequestBody RequestBoard req) {
        return service.save(req);
    }

    // 목록 조회
    @GetMapping("/")
    public PaginatedResponse<ResponseBoard> index(@PageableDefault(size = 5) Pageable pageable) {
        return service.index(pageable);
    }

    // 조회(상세)
    @GetMapping("/{id}")
    public ResponseBoard show(@PathVariable Long id) {
        return service.show(id);
    }

    // 수정
    @PutMapping("/{id}")
    public ResponseBoard update(@PathVariable Long id, @RequestBody RequestBoard req) {
        return service.update(id,req);
    }

    // 삭제 (SoftDelete)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
