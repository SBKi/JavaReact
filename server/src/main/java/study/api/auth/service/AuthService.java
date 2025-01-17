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
    public void signup(RequestSignup req) {
        Member user = Member.builder()
                .loginID(req.getLoginID())
                .password(passwordEncoder.encode(req.getPassword()))
                .nickName(req.getNickName()).build();
    authRepository.save(user);
    }

    public String login(RequestLogin req) {
        Member member = authRepository.findByLoginID(req.getLoginID());
        if(member == null) {
            return "없는 아이디 입니다.";
        }

        if (!passwordEncoder.matches(req.getPassword(), member.getPassword())) {
            return "비밀번호가 일치하지 않습니다.";
        }
        return "success";
    }
}
