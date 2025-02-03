package study.api.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import study.api.auth.Domain.Member;

import java.util.Optional;

@Repository
public interface AuthRepository extends JpaRepository<Member,Long> {
    Optional<Member> findByLoginId(String loginId);
}
