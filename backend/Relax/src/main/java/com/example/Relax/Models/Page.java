package com.example.Relax.Models;
import lombok.NoArgsConstructor;

public class Page {
    private String content;
    private String address;
    private float score;

    public Page(String content, String address, float score) {
        this.content = content;
        this.address = address;
        this.score = score;
    }

    public Page() {

    }


    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }
}
