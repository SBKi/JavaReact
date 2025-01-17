package study.api.auth.Domain;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import study.common.model.BaseMember;

@Entity
@Getter
@SuperBuilder
@NoArgsConstructor
public class Member extends BaseMember {
}
