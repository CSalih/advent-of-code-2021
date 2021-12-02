import org.junit.jupiter.api.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DiveTest {
    private final Dive dive = new Dive();

    private List<Dive.Movement> getShortInput() {
        var input = """
                forward 5
                down 5
                forward 8
                up 3
                down 8
                forward 2
                """;
        return Arrays.stream(input.split("\n"))
                .map(Dive.Movement::fromString)
                .collect(Collectors.toList());
    }
    private List<Dive.Movement> getFullInput() throws IOException {
        Path path = Paths.get("src/test/resources/input.txt");
        BufferedReader reader = Files.newBufferedReader(path);

        return reader.lines()
                .map(Dive.Movement::fromString)
                .collect(Collectors.toList());
    }

    @Test
    public void partOneShortTest() {
        var movements = getShortInput();
        assertEquals(150, dive.partOne(movements));
    }

    @Test
    public void partOneTest() throws IOException {
        var movements = getFullInput();
        assertEquals(1561344, dive.partOne(movements));
    }


    @Test
    public void partTwoShortTest() {
        var movements = getShortInput();
        assertEquals(900, dive.partTwo(movements));
    }

    @Test
    public void partTwoTest() throws IOException {
        var movements = getFullInput();
        assertEquals(1848454425, dive.partTwo(movements));
    }
}
