package study.api.auth.Domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import study.common.model.BaseMember;

@Entity
@Getter
@SuperBuilder
@NoArgsConstructor
@Table(name="member")
public class Member extends BaseMember {
}
