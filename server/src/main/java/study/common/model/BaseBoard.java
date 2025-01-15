package study.common.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import study.common.dto.TimeStamp;


@Getter
@SuperBuilder
@MappedSuperclass  // 상속 엔티티 명시
@NoArgsConstructor
public abstract class BaseBoard extends TimeStamp {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    private boolean is_deleted = Boolean.FALSE;

    protected void setTitle(String title) {
        this.title = title;
    }

    protected void setContent(String content) {
        this.content = content;
    }
}


