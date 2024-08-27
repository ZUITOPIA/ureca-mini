package com.areyouready.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class TravelPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long travel_id;

    @Column(nullable = false, length = 45)
    private String travel_location;

    @Column(nullable = false, length = 45)
    private String travel_activity;

    @Column(nullable = false)
    private String travel_date;

    @Column(length = 45)
    private String travel_withPerson;

    @Column(length = 5000)
    private String travel_detail;

    // Getters and Setters
    public Long getTravel_id() {
        return travel_id;
    }

    public void setTravel_id(Long travel_id) {
        this.travel_id = travel_id;
    }

    public String getTravel_location() {
        return travel_location;
    }

    public void setTravel_location(String travel_location) {
        this.travel_location = travel_location;
    }

    public String getTravel_activity() {
        return travel_activity;
    }

    public void setTravel_activity(String travel_activity) {
        this.travel_activity = travel_activity;
    }

    public String getTravel_date() {
        return travel_date;
    }

    public void setTravel_date(String travel_date) {
        this.travel_date = travel_date;
    }

    public String getTravel_withPerson() {
        return travel_withPerson;
    }

    public void setTravel_withPerson(String travel_withPerson) {
        this.travel_withPerson = travel_withPerson;
    }

    public String getTravel_detail() {
        return travel_detail;
    }

    public void setTravel_detail(String travel_detail) {
        this.travel_detail = travel_detail;
    }
}
