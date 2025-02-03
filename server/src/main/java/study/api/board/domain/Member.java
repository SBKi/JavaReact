package study.api.board.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import study.common.model.BaseMember;

@Entity(name = "BorderMember")
@Getter
@NoArgsConstructor
@Table(name = "member")
public class Member extends BaseMember {

}
