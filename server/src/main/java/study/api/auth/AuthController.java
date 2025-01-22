package study.api.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import study.api.auth.dto.RequestLogin;
import study.api.auth.dto.RequestSignup;
import study.api.auth.service.AuthService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody RequestLogin req) throws Exception {
        return authService.login(req);
    }

    @PostMapping("/signup")
    public String signup(@RequestBody RequestSignup req){
        return authService.signup(req);
    }
}
