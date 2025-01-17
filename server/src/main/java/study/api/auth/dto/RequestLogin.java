package study.api.auth.dto;

import lombok.Getter;

@Getter
public class RequestLogin {
    private String loginID;
    private String password;
}
