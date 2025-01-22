package study.api.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import study.api.auth.Domain.Member;
import study.api.auth.dto.RequestLogin;
import study.api.auth.dto.RequestSignup;
import study.api.auth.repository.AuthRepository;
import study.common.service.EncoderService;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AuthService {
    private final AuthRepository authRepository;
    private final EncoderService passwordEncoder;

    @Transactional
    public String signup(RequestSignup req) {
        Member user = Member.builder()
                .loginID(req.getLoginID())
                .password(passwordEncoder.encode(req.getPassword()))
                .nickName(req.getNickName()).build();
    authRepository.save(user);
    return "success";
    }

    public String login(RequestLogin req) throws Exception {
        Member member = authRepository.findByLoginID(req.getLoginID())
                .orElseThrow(() -> new IllegalArgumentException("등록되지 않은 회원입니다."));

        if (!passwordEncoder.matches(req.getPassword(), member.getPassword())) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }
        return "토큰 데이터";
    }
}
