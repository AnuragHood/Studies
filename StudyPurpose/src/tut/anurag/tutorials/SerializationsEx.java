package tut.anurag.tutorials;

import java.io.*;

/*
The JavaBean

class must implement either Serializable or Externalizable,must have a no-arg
constructor,all JavaBean properties must public setter and getter methods(as appropriate)all JavaBean instance
 variables should be private
*/


public class SerializationsEx implements Serializable {
    private Integer id;
    private String name;

    public SerializationsEx(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

class test {
    public static void main(String[] args) {
        SerializationsEx serEx = new SerializationsEx(1, "Anurag Pathak");
        String fileName = "serialization.ser";

        //Serialization
        try {
            FileOutputStream file = new FileOutputStream(fileName);
            ObjectOutputStream outStream = new ObjectOutputStream(file);
            outStream.writeObject(serEx);
            System.out.println("Serialization done...");
            outStream.close();
            file.close();

        } catch (Exception e) {
            System.out.println("Exception" + e);
        }
        //Desirealization
        SerializationsEx object1 = null;
        try {
            FileInputStream file = new FileInputStream(fileName);
            ObjectInputStream inStream = new ObjectInputStream(file);
            object1 = (SerializationsEx) inStream.readObject();
            System.out.println("deserialization done values=" + object1.getId() + " " + object1.getName());
            inStream.close();
            file.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
