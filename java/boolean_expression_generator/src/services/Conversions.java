package services;

import java.util.ArrayList;

import entities.Output;

public class Conversions {
	public String variables = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	public String fullBooleanExpression = "";
	ArrayList<Integer> lines = new ArrayList<Integer>();
	ArrayList<String> binList = new ArrayList<String>();
	
	DecimalToBinary convert = new DecimalToBinary();
	
	public void generateExpression(Output file) {
		String bin = "";
		lines = file.validLines;
		
		for(int i = 0; i < lines.size(); i++) {
			bin = convert.getBinary(file.numberOfVariables, lines.get(i));
			binList.add(bin);
		}
		
		
		printExpression();
	}
	
	
	public void printExpression() {
		String expression = "";
		
		for(int i = 0; i < binList.size(); i++) {
			
			if(i < binList.size()-1) {
				expression =  expression + convertToTerms(binList.get(i)) + "+";
			} else {
				expression =  expression + convertToTerms(binList.get(i));
			}
		}
		fullBooleanExpression = expression;
		System.out.println("Resultado: " + expression);
	}
	
	
	public String convertToTerms(String bin) {
		String term = "";
		char aux;
		
		for(int i = 0; i < bin.length(); i++) {
			aux = bin.charAt(i);
			if (aux == '1') {
			    term = term + variables.charAt(i);
			} else {
				term = term + variables.charAt(i) + "'";
			}
		}
		return term;
	}
	
	
}
