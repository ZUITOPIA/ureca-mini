package com.areyouready.repository;

import com.areyouready.entity.TravelPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelPlanDAO extends JpaRepository<TravelPlan, Long> {
}
