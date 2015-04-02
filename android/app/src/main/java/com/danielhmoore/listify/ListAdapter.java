package com.danielhmoore.listify;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import com.danielhmoore.listify.models.ListifyList;

import java.util.List;

/**
 * Created by danielmoore on 4/1/15.
 */
public class ListAdapter extends ArrayAdapter<ListifyList> {

    private LayoutInflater mInflater;
    private List<ListifyList> list;
    TextView text;

    public ListAdapter(Context context, List<ListifyList> objects) {
        super(context, 0, objects);
        mInflater = LayoutInflater.from(context);
        list = objects;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View view;
        if(convertView == null) {
            view = mInflater.inflate(R.layout.list_layout, parent, false);
            text = (TextView)view.findViewById(R.id.name);
        } else {
            view = convertView;
        }

        ListifyList person = list.get(position);
        text.setText(person.getName());

        return view;
    }
}
