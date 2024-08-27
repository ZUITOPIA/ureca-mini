package com.areyouready.service;

import com.areyouready.entity.TravelPlan;
import com.areyouready.repository.TravelPlanDAO;
import com.areyouready.service.dto.TravelPlanDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class TravelPlanServiceImpl implements TravelPlanService {

    @Autowired
    private TravelPlanDAO travelPlanDAO;

    @Override
    public Iterable<TravelPlanDTO> findAll() {
        return StreamSupport.stream(travelPlanDAO.findAll().spliterator(), false)
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<TravelPlanDTO> findById(Long id) {
        return travelPlanDAO.findById(id).map(this::convertToDTO);
    }

    @Override
    public TravelPlanDTO save(TravelPlanDTO travelPlanDTO) {
        TravelPlan travelPlan = convertToEntity(travelPlanDTO);
        travelPlan = travelPlanDAO.save(travelPlan);
        return convertToDTO(travelPlan);
    }

    @Override
    public void deleteById(Long id) {
        travelPlanDAO.deleteById(id);
    }

    private TravelPlanDTO convertToDTO(TravelPlan travelPlan) {
        TravelPlanDTO travelPlanDTO = new TravelPlanDTO();
        travelPlanDTO.setTravel_id(travelPlan.getTravel_id());
        travelPlanDTO.setTravel_location(travelPlan.getTravel_location());
        travelPlanDTO.setTravel_activity(travelPlan.getTravel_activity());
        travelPlanDTO.setTravel_date(travelPlan.getTravel_date());
        travelPlanDTO.setTravel_withPerson(travelPlan.getTravel_withPerson());
        travelPlanDTO.setTravel_detail(travelPlan.getTravel_detail());
        return travelPlanDTO;
    }

    private TravelPlan convertToEntity(TravelPlanDTO travelPlanDTO) {
        TravelPlan travelPlan = new TravelPlan();
        travelPlan.setTravel_id(travelPlanDTO.getTravel_id());
        travelPlan.setTravel_location(travelPlanDTO.getTravel_location());
        travelPlan.setTravel_activity(travelPlanDTO.getTravel_activity());
        travelPlan.setTravel_date(travelPlanDTO.getTravel_date());
        travelPlan.setTravel_withPerson(travelPlanDTO.getTravel_withPerson());
        travelPlan.setTravel_detail(travelPlanDTO.getTravel_detail());
        return travelPlan;
    }
}
