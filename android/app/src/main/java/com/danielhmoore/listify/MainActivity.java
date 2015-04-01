package com.danielhmoore.listify;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import com.danielhmoore.listify.models.ListifyList;
import com.danielhmoore.listify.models.ListifyLists;

import java.util.List;

import retrofit.RestAdapter;


public class MainActivity extends Activity implements ListsFragment.OnFragmentInteractionListener {

    ListsFragment listsFragment = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RestAdapter restAdapter = new RestAdapter.Builder()
                .setEndpoint("http://10.10.10.163:3000")
                .build();

        final ListifyService service = restAdapter.create(ListifyService.class);

        new Thread(new Runnable() {
            public void run() {
                ListifyLists list = service.getList();
                list.getLists();
            }
        }).start();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onFragmentInteraction(String id) {

    }
}
