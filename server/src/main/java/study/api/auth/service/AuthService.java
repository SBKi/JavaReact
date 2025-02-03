package study.api.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import study.api.auth.Domain.Member;
import study.api.auth.dto.RequestLogin;
import study.api.auth.dto.RequestSignup;
import study.api.auth.repository.AuthRepository;
import study.common.service.EncoderService;
import study.common.util.JwtUtil;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AuthService {
    private final AuthRepository authRepository;
    private final EncoderService passwordEncoder;
    private final JwtUtil jwtUtil;

    @Transactional
    public String signup(RequestSignup req) {
        Member user = Member.builder()
                .loginId(req.getLoginId())
                .password(passwordEncoder.encode(req.getPassword()))
                .nickName(req.getNickName()).build();
    authRepository.save(user);
    return "success";
    }

    public ResponseEntity<String> login(RequestLogin req) {
        Member member = authRepository.findByLoginId(req.getLoginId())
                .orElseThrow(() -> new IllegalArgumentException("등록되지 않은 회원입니다."));

        if (!passwordEncoder.matches(req.getPassword(), member.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization","Bearer "+ jwtUtil.createToken(member.getId(), member.getLoginId()));

        return ResponseEntity.ok().headers(headers).body(member.getNickName());
    }
}
