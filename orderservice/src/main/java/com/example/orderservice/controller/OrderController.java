package com.example.orderservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class OrderController {

    @GetMapping("/api/orders")
    public List<Map<String, Object>> getOrders() {
        List<Map<String, Object>> orders = new ArrayList<>();

        Map<String, Object> sample = new HashMap<>();
        sample.put("orderId", 101);
        sample.put("item", "Laptop");
        sample.put("price", 90000);
        sample.put("status", "Delivered");

        orders.add(sample);
        return orders;
    }
}
