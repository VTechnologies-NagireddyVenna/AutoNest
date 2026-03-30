package com.autonest.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class EnquiryResponse {
    private Long id;
    private String userName;
    private String userEmail;
    private String phone;
    private String message;
    private Long carId;
    private String carName;
    private LocalDateTime createdAt;
}
