package com.autonest.dto.request;

import com.autonest.enums.CarStatus;
import com.autonest.enums.FuelType;
import com.autonest.enums.OwnerType;
import com.autonest.enums.TransmissionType;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CarRequest {

    @NotBlank(message = "Brand is required")
    private String brand;

    @NotBlank(message = "Model is required")
    private String model;

    @NotNull(message = "Year is required")
    @Min(value = 1990, message = "Year must be 1990 or later")
    @Max(value = 2100, message = "Year is invalid")
    private Integer year;

    @NotNull(message = "Fuel type is required")
    private FuelType fuelType;

    @NotNull(message = "Transmission is required")
    private TransmissionType transmission;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "1.0", inclusive = true, message = "Price must be greater than 0")
    private BigDecimal price;

    @NotNull(message = "Kilometers driven is required")
    @Min(value = 0, message = "Kilometers driven cannot be negative")
    private Integer kilometersDriven;

    @NotNull(message = "Owner type is required")
    private OwnerType ownerType;

    @NotBlank(message = "Location is required")
    private String location;

    @Size(max = 500, message = "Image URL cannot exceed 500 characters")
    private String imageUrl;

    private String description;

    @NotNull(message = "Status is required")
    private CarStatus status;
}
