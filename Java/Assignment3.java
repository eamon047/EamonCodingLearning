public class Assignment3 {
    public static void main(String[] args) {
        String[] names = {
            "Elena", "Thomas", "Hamilton", "Suzie", "Phil", "Matt", "Alex",
            "Emma", "John", "James", "Jane", "Emily", "Daniel", "Neda",
            "Aaron", "Kate"
        };

        int[] times = {
            341, 273, 278, 329, 445, 402, 388, 275, 243, 334, 412, 393, 299,
            343, 317, 265
        };

        int fastestIndex = findFirst(times);
        int secondIndex = findSecond(times);

        System.out.println("First : " + names[fastestIndex] + " : " + times[fastestIndex]);
        System.out.println("Second : " + names[secondIndex] + " : " + times[secondIndex]);
    }

    public static int findFirst(int[] times) {
        int maxIndex = 0;
        for (int i = 1; i < times.length; i++) {
            if (times[i] < times[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    public static int findSecond(int[] times) {
        int fastestIndex = findFirst(times);
        int secondIndex;
        if (fastestIndex == 0) {
            secondIndex = 1;
        } else {
            secondIndex = 0;
        }

        for (int i = 0; i < times.length; i++) {
            if (i != fastestIndex && times[i] < times[secondIndex]) {
                secondIndex = i;
            }
        }
        return secondIndex;
    }
}
