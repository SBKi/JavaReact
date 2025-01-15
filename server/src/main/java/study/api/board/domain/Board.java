package study.api.board.domain;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import study.common.model.BaseBoard;

@Entity
@Getter
@SuperBuilder
@NoArgsConstructor
@SQLDelete(sql = "UPDATE board SET is_deleted = true WHERE id = ?")  // SoftDelete 사용
@Where(clause = "is_deleted = false")   // 조회시 SoftDelete 여부 확인
public class Board extends BaseBoard {

    // Dirty Check Update
    public void updateBoard(String title, String content) {
        this.setTitle(title);
        this.setContent(content);

        // findById를 해서 가져온 데이터는 영속성 데이터 이기때문에
        // 해당 데이터를 setter로 수정시 DB의 데이터도 수정됨 ( 실제 쿼리도 날아감 )
        // 해당 방법으로의 작업은 서비스단에서 데이터 수정시 조심해서 사용해야 하고
        // 다른 방법으로는 수정하고 싶은 ID값으로 Save해버리는 방법이 있음.. (Merge Update)

        // 두가지 방법 모두 모든 필드를 업데이트, 저장을 하기 때문에 null값이 들어갈 수 있음.
        // Dirty Check Update 방식은 @DynamicUpdate 어노테이션을 사용하면 변경사항이 있는 것만 수정 가능하도록 할 수 있음.
    }

    // TODO:worker (작성자 정보)
}
