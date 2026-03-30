package com.autonest.service.impl;

import com.autonest.dto.request.CarRequest;
import com.autonest.dto.response.CarResponse;
import com.autonest.entity.Car;
import com.autonest.exception.ResourceNotFoundException;
import com.autonest.mapper.CarMapper;
import com.autonest.repository.CarRepository;
import com.autonest.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    @Override
    public CarResponse createCar(CarRequest request) {
        Car car = CarMapper.toEntity(request);
        return CarMapper.toResponse(carRepository.save(car));
    }

    @Override
    public List<CarResponse> getAllCars() {
        return carRepository.findAll()
                .stream()
                .map(CarMapper::toResponse)
                .toList();
    }

    @Override
    public CarResponse getCarById(Long id) {
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car not found with ID: " + id));
        return CarMapper.toResponse(car);
    }

    @Override
    public CarResponse updateCar(Long id, CarRequest request) {
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car not found with ID: " + id));

        CarMapper.updateEntity(car, request);
        return CarMapper.toResponse(carRepository.save(car));
    }

    @Override
    public void deleteCar(Long id) {
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car not found with ID: " + id));
        carRepository.delete(car);
    }
}
