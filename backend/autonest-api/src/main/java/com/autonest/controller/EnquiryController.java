package com.autonest.controller;

import com.autonest.dto.request.EnquiryRequest;
import com.autonest.dto.response.EnquiryResponse;
import com.autonest.service.EnquiryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enquiries")
@RequiredArgsConstructor
@CrossOrigin(origins = "${app.cors.allowed-origins}")
public class EnquiryController {

    private final EnquiryService enquiryService;

    @PostMapping
    public ResponseEntity<EnquiryResponse> createEnquiry(@Valid @RequestBody EnquiryRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(enquiryService.createEnquiry(request));
    }

    @GetMapping
    public ResponseEntity<List<EnquiryResponse>> getAllEnquiries() {
        return ResponseEntity.ok(enquiryService.getAllEnquiries());
    }
}
