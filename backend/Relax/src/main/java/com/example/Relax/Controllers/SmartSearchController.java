package com.example.Relax.Controllers;

import com.example.Relax.Models.Block;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RestController
@RequiredArgsConstructor
public class SmartSearchController {
    @GetMapping("/getInfo")
    public List<Block> parserInfo(@RequestParam("name") String name) throws IOException {
          String URL;
            List<Block> block = new ArrayList<>();
          String baseURL = "https://cchgeu.ru";
          String scheduleUrl = "/studentu/schedule/";
          String militaryUrl = "/education/military/";
          URL = baseURL;
        switch (name) {
            case "schedule":
                URL += scheduleUrl;
                Document doc = Jsoup.connect(URL).get();
                List<Block> blocks = new ArrayList<>();
                Elements schedules = doc.select("table.table").select("a[id]");
                for (Element element : schedules) {
                    List<String> content = new ArrayList<>();
                    String title = element.text();
                    content.add("https://cchgeu.ru" + element.attr("href"));
                    blocks.add(new Block(title, content));
                }
                return blocks;

            case "military":
                URL += militaryUrl;
                Document docs = Jsoup.connect(URL).get();
                List<Block> blockss = new ArrayList<>();
                // Block Position
                String position = docs.select("p.sidebar-head-position").text();
                String names = docs.select("p.sidebar-head-name").text();
                String degree = docs.select("p.sidebar-head-degree").text();
                List<String> content = new ArrayList<>();
                content.add(names);
                content.add(degree);
                blockss.add(new Block(position, content));

                // Blocks Contact
                Elements contacts = docs.select("div.sidebar-contacts-contact");
                for (Element element : contacts) {
                    content = new ArrayList<>();
                    content.add(element.select("p.sidebar-contacts-value").text());
                    blockss.add(new Block(
                            element.select("p.sidebar-contacts-caption").text(),
                            content
                    ));
                }
                doc = Jsoup.connect(URL + "novosti/").get();
                Element element = doc.select("div.news-list").select("div.item").first();
                content = new ArrayList<>();
                content.add(element.select("div.preview").text());
                blockss.add(new Block(
                        element.select("a.name").text(),
                        content
                ));
                return blockss;
        }

        return block;
    }
}
