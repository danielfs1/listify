package com.danielhmoore.listify;

/**
 * Created by Daniel on 3/30/2015.
 */
public class ListifyList {

    String name = null;
    String email = null;

    public ListifyList() {
    }

    public ListifyList(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
