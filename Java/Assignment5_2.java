import java.awt.Color;
import java.awt.Graphics;
import java.util.ArrayList;

public class Assignment5_2 {
    ArrayList<Assignment5_3> boxes = new ArrayList<>();

    /** Initializes this class for drawing. */
    public Assignment5_2() {
        Assignment5_3 b1 = new Assignment5_3(50, 50, Color.RED);
        b1.setMovementVector(2, 1);

        Assignment5_3 b2 = new Assignment5_3(100, 100, Color.BLUE);
        b2.setMovementVector(-1, 2);

        Assignment5_3 b3 = new Assignment5_3(150, 150, Color.GREEN);
        b3.setMovementVector(1, -2);

        boxes.add(b1);
        boxes.add(b2);
        boxes.add(b3);
    }

    /** Draw the contents of the window on surface. Called 20 times per second. */
    public void draw(Graphics surface) {
        for (Assignment5_3 b : boxes) {
            b.draw(surface);
        }
    }
} 