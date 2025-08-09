import { StyleSheet, Text, View } from "react-native";
import { Book, BookState } from "@/core/types";
import { Colors } from "@/constants/Colors";
import { BookStateLabel } from "./BookStateLabel";


export type BookCardProps = {
    book: Book
}

export function BookCard({ book }: BookCardProps) {
    return (
        <View style={[ styles.card ]}>
            <Text style={[ styles.bookTitle ]}>{book.name}</Text>
            <BookStateLabel state={book.state} target="stop" />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors['light'].beige,
        padding: 20,
        flexDirection: "row",
    },
    bookTitle: {
        color: Colors['light'].brown,
        fontWeight: "bold",
        fontSize: 24,
    },
    bookStatus: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors['light'].white,
        padding: 10,
    },
    bookShelved: {
        backgroundColor: Colors['light'].mustard
    },
    bookReading: {
        backgroundColor: Colors['light'].green
    },
    bookFinished: {
        backgroundColor: Colors['light'].teal
    },
});
