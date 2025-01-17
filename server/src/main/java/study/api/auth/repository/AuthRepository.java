package study.api.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import study.api.auth.Domain.Member;

@Repository
public interface AuthRepository extends JpaRepository<Member,Long> {
    Member findByLoginID(String loginID);
}
