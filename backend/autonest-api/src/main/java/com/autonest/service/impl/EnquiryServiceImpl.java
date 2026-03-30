package com.autonest.service.impl;

import com.autonest.dto.request.EnquiryRequest;
import com.autonest.dto.response.EnquiryResponse;
import com.autonest.entity.Car;
import com.autonest.entity.Enquiry;
import com.autonest.exception.ResourceNotFoundException;
import com.autonest.repository.CarRepository;
import com.autonest.repository.EnquiryRepository;
import com.autonest.service.EnquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepository enquiryRepository;
    private final CarRepository carRepository;

    @Override
    public EnquiryResponse createEnquiry(EnquiryRequest request) {
        Car car = carRepository.findById(request.getCarId())
                .orElseThrow(() -> new ResourceNotFoundException("Car not found with ID: " + request.getCarId()));

        Enquiry enquiry = Enquiry.builder()
                .userName(request.getUserName())
                .userEmail(request.getUserEmail())
                .phone(request.getPhone())
                .message(request.getMessage())
                .car(car)
                .createdAt(LocalDateTime.now())
                .build();

        Enquiry saved = enquiryRepository.save(enquiry);

        return EnquiryResponse.builder()
                .id(saved.getId())
                .userName(saved.getUserName())
                .userEmail(saved.getUserEmail())
                .phone(saved.getPhone())
                .message(saved.getMessage())
                .carId(car.getId())
                .carName(car.getBrand() + " " + car.getModel())
                .createdAt(saved.getCreatedAt())
                .build();
    }

    @Override
    public List<EnquiryResponse> getAllEnquiries() {
        return enquiryRepository.findAll()
                .stream()
                .map(enquiry -> EnquiryResponse.builder()
                        .id(enquiry.getId())
                        .userName(enquiry.getUserName())
                        .userEmail(enquiry.getUserEmail())
                        .phone(enquiry.getPhone())
                        .message(enquiry.getMessage())
                        .carId(enquiry.getCar().getId())
                        .carName(enquiry.getCar().getBrand() + " " + enquiry.getCar().getModel())
                        .createdAt(enquiry.getCreatedAt())
                        .build())
                .toList();
    }
}
