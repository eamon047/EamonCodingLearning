import java.awt.Color;
import java.awt.Graphics;
import java.util.ArrayList;

public class DrawGraphics {
    // ArrayList<Bouncer> movingSprite = new ArrayList<>();
    // ArrayList<StraightMover> straightSprite = new ArrayList<>();

    ArrayList<Mover> movers = new ArrayList<>();

    /** Initializes this class for drawing. */
    public DrawGraphics() {
        Rectangle rect1 = new Rectangle(15, 20, Color.RED);
        Bouncer b1 = new Bouncer(100, 170, rect1);
        b1.setMovementVector(3, 1);

        Oval oval1 = new Oval(30, 30, Color.BLUE);
        Bouncer b2 = new Bouncer(50, 150, oval1);
        b2.setMovementVector(2, 3);

        Rectangle rect2 = new Rectangle(15, 20, Color.RED);
        StraightMover b3 = new StraightMover(180, 60, rect2);
        b3.setMovementVector(3, 1);

        Oval oval2 = new Oval(30, 30, Color.BLUE);
        StraightMover b4 = new StraightMover(200, 50, oval2);
        b4.setMovementVector(2, 3);

        movers.add(b1);
        movers.add(b2);
        movers.add(b3);
        movers.add(b4);
    }

    /** Draw the contents of the window on surface. */
    public void draw(Graphics surface) {
        for (Mover b : movers) {
            b.draw(surface);
        }
    }
}
