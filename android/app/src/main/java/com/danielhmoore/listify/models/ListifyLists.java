package com.danielhmoore.listify.models;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

import java.util.List;

@Parcel
public class ListifyLists {

    @SerializedName("lists")
    private List<ListifyList> lists;

    public List<ListifyList> getLists() {
        return lists;
    }

    public void setLists(List<ListifyList> lists) {
        this.lists = lists;
    }
}
