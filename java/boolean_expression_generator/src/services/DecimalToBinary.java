package services;

public class DecimalToBinary {
	
	public String getBinary (int numVar,int decimal) {
        
        int num = decimal;
        String bin= "";
        String reversedBin = "";
         
       
        while (num != 0) {
            bin += "" + num%2;
            num = num/2;
        }
         
        
        for (int i = (bin.length()); i != 0; i--) {
            reversedBin += "" + bin.charAt(i-1);
        }
        
        if (bin.length() < numVar) {
        	String zeros = "";
        	for (int i = reversedBin.length(); i < numVar; i++) {
                zeros = "0" + zeros;
            }
        	
        	reversedBin = zeros + reversedBin;
        }
       
        return reversedBin;
	}
	
}
