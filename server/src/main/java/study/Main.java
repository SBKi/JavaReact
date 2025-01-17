package study;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing // JPA 의 엔티티 생성 및 수정 시간을 추적 및 기록 ( Create_at, Update_at 기록 용 )
@SpringBootApplication(exclude = SecurityAutoConfiguration.class) // Security 기본 로그인 화면 제거
public class Main {

	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

}

