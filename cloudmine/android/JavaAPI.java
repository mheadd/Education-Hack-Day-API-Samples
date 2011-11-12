/**
 * Android CloudMine API examples.
 * For Java/Android libraries, see: https://github.com/cloudmine/cloudmine-android
 * For API full documentation, see: https://cloudmine.me/developer_zone
 * 
 * These examples demonstrate basic API usage for saving, retreiving, and deleting data
 */

import org.json.JSONObject;
import me.cloudmine.api.CMAdapter;

public class JavaAPI {
    // initialize CMAdapter class - main API entry point
    CMAdapter cmAdapter = new CMAdapter("{app_id}", "{api_key}");

    public void getData(){
        // retreive some keys from CloudMine
        String[] keys = new String[]{ "key1", "key2" };

        JSONObject objects = cmAdapter.getValues(keys);

        // objects is a map of key => value mappings
        Iterator<String> ids = objects.keys();
        while(ids.hasNext()){
            String id = ids.next();
            System.out.println(id); // print the key
            System.out.println(objects.getJSONObject(id)); // print the value - can also be .getString, etc.
        }
    }

    public void saveData(){

        // Save a key/value pair:
        // "key" => {"type": "person", "age": 22};

        JSONObject value = new JSONObject();
        value.put("type", "person");
        value.put("age", 22);

        cmAdapter.updateValue("key", value);
    }

    public void deleteData() {
        // Delete values for keys "key1" and "key2"

        String[] keys = new String[]{ "key1", "key2" };
        cmAdapter.deleteKeys(keys);
    }
}
