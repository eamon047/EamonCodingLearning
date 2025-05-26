import java.awt.Color;
import java.awt.Graphics;
import java.util.ArrayList;

public class DrawGraphics {
    ArrayList<BouncingBox> boxes = new ArrayList<>();

    /** Initializes this class for drawing. */
    public DrawGraphics() {
        BouncingBox b1 = new BouncingBox(50, 50, Color.RED);
        b1.setMovementVector(2, 1);

        BouncingBox b2 = new BouncingBox(100, 100, Color.BLUE);
        b2.setMovementVector(-1, 2);

        BouncingBox b3 = new BouncingBox(150, 150, Color.GREEN);
        b3.setMovementVector(1, -2);

        boxes.add(b1);
        boxes.add(b2);
        boxes.add(b3);
    }

    /** Draw the contents of the window on surface. Called 20 times per second. */
    public void draw(Graphics surface) {
        for (BouncingBox b : boxes) {
            b.draw(surface);
        }
    }
} 