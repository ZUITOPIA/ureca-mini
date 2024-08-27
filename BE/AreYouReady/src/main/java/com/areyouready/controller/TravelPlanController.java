package com.areyouready.controller;

import com.areyouready.service.TravelPlanService;
import com.areyouready.service.dto.TravelPlanDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
public class TravelPlanController {

    @Autowired
    private TravelPlanService travelPlanService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("travelPlan", travelPlanService.findAll());
        return "index";
    }

    @GetMapping("/item/add")
    public String addForm(Model model) {
        model.addAttribute("travelPlan", new TravelPlanDTO());
        return "item/add";
    }

    @PostMapping("/save")
    public String save(@ModelAttribute TravelPlanDTO travelPlanDTO) {
        travelPlanService.save(travelPlanDTO);
        return "redirect:/";
    }

    @GetMapping("/item/edit/{id}")
    public String editForm(@PathVariable Long id, Model model) {
        Optional<TravelPlanDTO> travelPlanDTO = travelPlanService.findById(id);
        if (travelPlanDTO.isPresent()) {
            model.addAttribute("travelPlan", travelPlanDTO.get());
            return "item/edit";
        }
        return "redirect:/";
    }

    @PostMapping("/update")
    public String update(@ModelAttribute TravelPlanDTO travelPlanDTO) {
        travelPlanService.save(travelPlanDTO);
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        travelPlanService.deleteById(id);
        return "redirect:/";
    }
}