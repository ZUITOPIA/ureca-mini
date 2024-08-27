package com.areyouready.service;

import com.areyouready.service.dto.TravelPlanDTO;

import java.util.Optional;

public interface TravelPlanService {
    Iterable<TravelPlanDTO> findAll();
    Optional<TravelPlanDTO> findById(Long id);
    TravelPlanDTO save(TravelPlanDTO travelPlanDTO);
    void deleteById(Long id);
}
