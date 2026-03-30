package com.autonest.service;

import com.autonest.dto.request.EnquiryRequest;
import com.autonest.dto.response.EnquiryResponse;

import java.util.List;

public interface EnquiryService {
    EnquiryResponse createEnquiry(EnquiryRequest request);
    List<EnquiryResponse> getAllEnquiries();
}
