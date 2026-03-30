package com.autonest.dto.response;

import com.autonest.enums.CarStatus;
import com.autonest.enums.FuelType;
import com.autonest.enums.OwnerType;
import com.autonest.enums.TransmissionType;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class CarResponse {
    private Long id;
    private String brand;
    private String model;
    private Integer year;
    private FuelType fuelType;
    private TransmissionType transmission;
    private BigDecimal price;
    private Integer kilometersDriven;
    private OwnerType ownerType;
    private String location;
    private String imageUrl;
    private String description;
    private CarStatus status;
}
