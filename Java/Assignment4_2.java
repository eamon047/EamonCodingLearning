public class Assignment4_2 {
    // Add the missing implementation to this class
    String address;
    Assignment4_1[] books = new Assignment4_1[100];
    int bookCount = 0;
    

    public Assignment4_2(String library_name) {
        address = library_name;
    }

    public static void printOpeningHours() {
        System.out.println("Libraries are open daily from 9am to 5pm.");
    }

    public void printAddress() {
        System.out.println(address);
    }

    public void addBook(Assignment4_1 book) {
        if (bookCount < books.length) {
            books[bookCount] = book;
            bookCount++;
        }
    }

    public void printAvailableBooks() {
        if (bookCount != 0){
            for (int i = 0; i < bookCount; i++) {
                System.out.println(books[i].title);
            }
        }
    }

    public void borrowBook(String title) {
        boolean found = false;
        for (int i = 0; i < bookCount; i++) {
            if (books[i].title.equals(title)) {
                found = true;
                if (books[i].borrowed) {
                    System.out.println("Sorry, this book is already borrowed.");
                }
                else {
                    books[i].borrowed = true;
                    System.out.println("You successfully borrowed " + books[i].title);
                }
                break;
            }
        }
        if (!found) {
            System.out.println("Sorry, this book is not in our catalog.");
        }
    }

    public void returnBook(String title) {
        for (int i = 0; i < bookCount; i++) {
            if (books[i].title.equals(title)) {
                books[i].borrowed = false;
                System.out.println("You successfully returned " + books[i].title);
            }
        }
    }

    

    public static void main(String[] args) {
        // Create two libraries
        Assignment4_2 firstLibrary = new Assignment4_2("10 Main St.");
        Assignment4_2 secondLibrary = new Assignment4_2("228 Liberty St.");

        // Add four books to the first library
        firstLibrary.addBook(new Assignment4_1("The Da Vinci Code"));
        firstLibrary.addBook(new Assignment4_1("Le Petit Prince"));
        firstLibrary.addBook(new Assignment4_1("A Tale of Two Cities"));
        firstLibrary.addBook(new Assignment4_1("The Lord of the Rings"));

        // Print opening hours and the addresses
        System.out.println("Library hours:");
        printOpeningHours();
        System.out.println();

        System.out.println("Library addresses:");
        firstLibrary.printAddress();
        secondLibrary.printAddress();
        System.out.println();

        // Try to borrow The Lords of the Rings from both libraries
        System.out.println("Borrowing The Lord of the Rings:");
        firstLibrary.borrowBook("The Lord of the Rings");
        firstLibrary.borrowBook("The Lord of the Rings");
        secondLibrary.borrowBook("The Lord of the Rings");
        System.out.println();

        // Print the titles of all available books from both libraries
        System.out.println("Books available in the first library:");
        firstLibrary.printAvailableBooks();
        System.out.println();
        System.out.println("Books available in the second library:");
        secondLibrary.printAvailableBooks();
        System.out.println();

        // Return The Lords of the Rings to the first library
        System.out.println("Returning The Lord of the Rings:");
        firstLibrary.returnBook("The Lord of the Rings");
        System.out.println();

        // Print the titles of available from the first library
        System.out.println("Books available in the first library:");
        firstLibrary.printAvailableBooks();
    }

} 