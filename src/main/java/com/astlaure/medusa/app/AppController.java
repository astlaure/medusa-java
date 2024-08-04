package com.astlaure.medusa.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

    @GetMapping
    String indexView() {
        return "index";
    }
}
