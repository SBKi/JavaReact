package study;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // JPA 의 엔티티 생성 및 수정 시간을 추적 및 기록 ( Create_at, Update_at 기록 용 )
public class Main {

	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

}
