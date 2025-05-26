public class Assignment2 {
    public static void calculatePay(double basePay, int hoursWorked) {
        if (basePay < 8.0) {
            System.out.println("Error: Base pay is below minimum wage.");
            return;
        }

        if (hoursWorked > 60) {
            System.out.println("Error: Hours worked exceeds maximum limit.");
            return;
        }

        double totalPay;
        if (hoursWorked <= 40) {
            totalPay = basePay * hoursWorked;
        } else {
            int overtime = hoursWorked - 40;
            totalPay = (basePay * 40) + (overtime * basePay * 1.5);
        }

        System.out.println("Total pay : " + totalPay);
    }
    
    public static void main(String[] args) {
        calculatePay(7.50, 35);
        calculatePay(8.20, 47);
        calculatePay(10.00, 73);
    }    
}