package SW_Engineering.Group3.dto.Board;

import lombok.Builder;

public class NoticeUpdateDto {
    private String title;
    private String content;

    @Builder
    public NoticeUpdateDto(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}