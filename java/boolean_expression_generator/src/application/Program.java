package application;

import java.io.FileNotFoundException;

import entities.Output;
import services.Conversions;

public class Program {

	public static void main(String[] args) {
		Output file = new Output();
		Conversions converte = new Conversions();
		try {
			file.readFile();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		
		converte.generateExpression(file);
	}
	
}
