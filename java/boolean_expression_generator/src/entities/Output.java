package entities;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Scanner;

public class Output {
	public String str;
	public int numberOfVariables;
	public ArrayList<Integer> validLines = new ArrayList<Integer>();

	
	
	public void readFile() throws FileNotFoundException {
		Scanner in = new Scanner(new FileReader("file.txt"));
		String line = "";
		
		while (in.hasNextLine()) {
		    line += in.nextLine();
		}
		
		line = line.replaceAll("\\s+","");
		this.str = line;
		this.numberOfVariables = calculateVariables(line.length());
		getValidLines();
	}
	
	public int calculateVariables(int aux) {
		return (int) Math.ceil(Math.sqrt(aux)); 
	}
	
	public void getValidLines() {
		
		char ch = '1';
		 
        int index = str.indexOf(ch);
        while (index != -1) {
            validLines.add(index);
            index = str.indexOf(ch, index + 1);		
        }
	}

}
