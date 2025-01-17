package study.common.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import study.common.dto.TimeStamp;

@Getter
@SuperBuilder
@MappedSuperclass
@NoArgsConstructor
public class BaseMember extends TimeStamp {
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true , nullable = false)
    private String loginID;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String nickName;
}
