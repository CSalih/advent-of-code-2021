import java.util.List;

public class Dive {
    record Movement (String command, int value) {
        public static Movement fromString(String movement) {
            var movementParts = movement.split(" ");
            return new Movement(movementParts[0], Integer.parseInt(movementParts[1]));
        }
    }

    public int partOne(List<Movement> movements) {
        int dept = 0;
        int horizontalPosition = 0;
        for (var movement : movements) {
            switch (movement.command()) {
                case "forward" -> dept += movement.value();
                case "down" -> horizontalPosition += movement.value();
                case "up" -> horizontalPosition -= movement.value();
            }
        }
        return dept * horizontalPosition;
    }

    public int partTwo(List<Movement> movements) {
        int aim = 0;
        int dept = 0;
        int horizontalPosition = 0;
        for (var movement : movements) {
            switch (movement.command()) {
                case "forward" -> {
                    horizontalPosition += movement.value();
                    dept += aim * movement.value();
                }
                case "down" -> aim += movement.value();
                case "up" -> aim -= movement.value();
            }
        }
        return horizontalPosition * dept;
    }
}
