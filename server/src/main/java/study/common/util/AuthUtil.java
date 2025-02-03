package study.common.util;

import jakarta.servlet.http.HttpServletRequest;

public class AuthUtil {
    public static Long getAuthMemberId(HttpServletRequest request) {
        Object memberIdObj = request.getAttribute("memberId");
        if (memberIdObj == null) {
            throw new IllegalArgumentException("인증 정보가 없습니다.");
        }
        return (Long) memberIdObj;
    }
}
