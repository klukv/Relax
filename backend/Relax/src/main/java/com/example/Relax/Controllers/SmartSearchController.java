package com.example.Relax.Controllers;

import com.example.Relax.Models.Block;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Controller
@RestController
@RequiredArgsConstructor
public class SmartSearchController {
/*    @GetMapping("/getInfo")
    public List<Block> parserInfo(@RequestParam("name") String name){
          String URL;
          String baseURL = "https://cchgeu.ru";
          String scheduleUrl = "/studentu/schedule/";
          String militaryUrl = "/education/military/";
          List<Block> blocks = new ArrayList<>();
          URL = baseURL;
        switch (name) {
            case "schedule":
                URL += scheduleUrl;
                blocks = parseSchedule();
                break;
            case "military":
                URL += militaryUrl;
                blocks = parseMilitary();
                break;
        }
        return Block;
    }*/
}
