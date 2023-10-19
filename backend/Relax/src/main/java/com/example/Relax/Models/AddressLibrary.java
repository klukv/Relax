package com.example.Relax.Models;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class AddressLibrary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address_URL;
    private String page_description;

    public AddressLibrary(String address_URL, String page_description) {
        this.address_URL = address_URL;
        this.page_description = page_description;
    }

    public String getAddress_URL() {
        return address_URL;
    }

    public void setAddress_URL(String address_URL) {
        this.address_URL = address_URL;
    }

    public String getPage_description() {
        return page_description;
    }

    public void setPage_description(String page_description) {
        this.page_description = page_description;
    }
}
