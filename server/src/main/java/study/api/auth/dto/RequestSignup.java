package study.api.auth.dto;

import lombok.Getter;

@Getter
public class RequestSignup {
    private String loginID;
    private String password;
    private String nickName;
}
