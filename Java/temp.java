public class temp {
    public static void main(String[] args) {
        int[] my_list = {10, 20, 3, 4, 5};
        System.out.println(findSmall(my_list));
    }

    public static int findSmall(int[] values) {
        int minValue = Integer.MAX_VALUE;
        int minIndex = -1;

        for(int i = 0; i < values.length; i++) {
            if (values[i] < minValue) {
                minIndex = i;
                minValue = values[i];
            }

        }
        return minValue;
    }
}
