package com.autonest.service;

import com.autonest.dto.request.CarRequest;
import com.autonest.dto.response.CarResponse;

import java.util.List;

public interface CarService {
    CarResponse createCar(CarRequest request);
    List<CarResponse> getAllCars();
    CarResponse getCarById(Long id);
    CarResponse updateCar(Long id, CarRequest request);
    void deleteCar(Long id);
}
