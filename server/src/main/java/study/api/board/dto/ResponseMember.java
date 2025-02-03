package study.api.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import study.api.board.domain.Member;

@Getter
@ToString
@AllArgsConstructor
public class ResponseMember {
    private long id;
    private String nickName;

    public static ResponseMember build(Member member) {
        return new ResponseMember(member.getId(),member.getNickName());
    }
}
