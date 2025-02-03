package study.api.auth.dto;

import lombok.Getter;

@Getter
public class RequestSignup {
    private String loginId;
    private String password;
    private String nickName;
}
