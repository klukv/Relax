package com.example.Relax.Controllers;
import com.example.Relax.Models.AddressLibrary;
import com.example.Relax.Models.Page;
import com.example.Relax.Repositories.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Controller
@RestController
@RequiredArgsConstructor
public class MainController {
    @Autowired
    private AddressRepository addressRepository;

    @GetMapping("/getId/{id}")
    public AddressLibrary findById(@PathVariable("id") Long id)
    {
        return addressRepository.findById(id).get();
    }
    @GetMapping("/searchURL")
    public List<Page> searchByName(@RequestParam("name") String name) throws IOException {
        List<AddressLibrary> addressLibraries = new ArrayList<>();
        List<Page> pages = new ArrayList<>();
        addressLibraries.addAll(addressRepository.findAll());
        List<String> words = new ArrayList<>();
        for(AddressLibrary addressLibrary: addressLibraries)
        {
            Page newpage = new Page();
            newpage.setAddress(addressLibrary.getAddress_URL());
            newpage.setContent(Jsoup.connect(addressLibrary.getAddress_URL()).get().html());
            words = List.of(name.split(" "));
            float score = 0;
            for (String word : words)
            {
                int lastIndex = 0;
                int count = 0;
                while(lastIndex != -1){

                    lastIndex = newpage.getContent().indexOf(word,lastIndex);

                    if(lastIndex != -1){
                        count ++;
                        lastIndex += word.length();
                    }
                }
                score+=count;
            }
            score/=newpage.getContent().length();
            newpage.setScore(score);
            pages.add(newpage);
        }
        Collections.sort(pages, Comparator.comparingDouble(Page::getScore).reversed());
        return pages;
    }
}
