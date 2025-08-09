import { StyleSheet, Text, View } from "react-native";

import { Book, BookState } from "@/core/types";
import { Colors } from "@/constants/Colors";
import { CardAction } from "./CardAction";
import { StateLabel } from "./StateLabel";


export type BookCardProps = {
    book: Book,
    cardType: "action" | "list",
}

export function BookCard({ book, cardType }: BookCardProps) {
    const componentMap = {
        action: <CardAction target={BookState.READING} cardId={book.id} />,
        list: <StateLabel state={book.state} />,
    }

    return (
        <View style={[ styles.card ]}>
            <Text style={[ styles.bookTitle ]}>{book.name}</Text>
            {componentMap[cardType]}
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors['light'].beige,
        flexDirection: "row",
        padding: 20,
    },
    bookTitle: {
        color: Colors['light'].brown,
        fontWeight: "bold",
        fontSize: 24,
    },
});
