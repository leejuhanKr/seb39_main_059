package com.twentyfour_seven.catvillage.board.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class BoardCommentResponseDto {
    private Long boardCommentId;
    private String body;
    private String name;
    private Long likeCount;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdDate;

    @Builder
    public BoardCommentResponseDto(Long boardCommentId, String body, String name, Long likeCount, LocalDateTime createdDate) {
        this.boardCommentId = boardCommentId;
        this.body = body;
        this.name = name;
        this.likeCount = likeCount;
        this.createdDate = createdDate;
    }
}
