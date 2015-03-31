package com.danielhmoore.listify;

import java.util.List;

import retrofit.http.GET;

/**
 * Created by Daniel on 3/30/2015.
 */
public interface ListifyService {
    @GET("/lists/")
    List<ListifyList> getList();
}
