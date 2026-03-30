package com.autonest.mapper;

import com.autonest.dto.request.CarRequest;
import com.autonest.dto.response.CarResponse;
import com.autonest.entity.Car;

public class CarMapper {

    private CarMapper() {
    }

    public static Car toEntity(CarRequest request) {
        return Car.builder()
                .brand(request.getBrand())
                .model(request.getModel())
                .year(request.getYear())
                .fuelType(request.getFuelType())
                .transmission(request.getTransmission())
                .price(request.getPrice())
                .kilometersDriven(request.getKilometersDriven())
                .ownerType(request.getOwnerType())
                .location(request.getLocation())
                .imageUrl(request.getImageUrl())
                .description(request.getDescription())
                .status(request.getStatus())
                .build();
    }

    public static void updateEntity(Car car, CarRequest request) {
        car.setBrand(request.getBrand());
        car.setModel(request.getModel());
        car.setYear(request.getYear());
        car.setFuelType(request.getFuelType());
        car.setTransmission(request.getTransmission());
        car.setPrice(request.getPrice());
        car.setKilometersDriven(request.getKilometersDriven());
        car.setOwnerType(request.getOwnerType());
        car.setLocation(request.getLocation());
        car.setImageUrl(request.getImageUrl());
        car.setDescription(request.getDescription());
        car.setStatus(request.getStatus());
    }

    public static CarResponse toResponse(Car car) {
        return CarResponse.builder()
                .id(car.getId())
                .brand(car.getBrand())
                .model(car.getModel())
                .year(car.getYear())
                .fuelType(car.getFuelType())
                .transmission(car.getTransmission())
                .price(car.getPrice())
                .kilometersDriven(car.getKilometersDriven())
                .ownerType(car.getOwnerType())
                .location(car.getLocation())
                .imageUrl(car.getImageUrl())
                .description(car.getDescription())
                .status(car.getStatus())
                .build();
    }
}
