package com.danielhmoore.listify;

import com.danielhmoore.listify.models.ListifyList;
import com.danielhmoore.listify.models.ListifyLists;

import java.util.List;

import retrofit.http.GET;

/**
 * Created by Daniel on 3/30/2015.
 */
public interface ListifyService {
    @GET("/lists/")
    ListifyLists getList();
}
