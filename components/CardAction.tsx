import { StyleSheet, Text, TextStyle } from "react-native"

import { BookState } from "@/core/types"
import { Colors } from "@/constants/Colors";


export type CardActionProps = {
    target: BookState,
    cardId: number,
}

export function CardAction({ target, cardId }: CardActionProps) {
    const targetStyleMap: Record<BookState, TextStyle> = {
        [BookState.SHELVED]: styles.shelved,
        [BookState.READING]: styles.reading,
        [BookState.FINISHED]: styles.finished,
    };

    const targetLabelMap: Record<BookState, string> = {
        [BookState.SHELVED]: "Stop",
        [BookState.READING]: "Read",
        [BookState.FINISHED]: "Finish",
    };

    const targetStyle: TextStyle = targetStyleMap[target];
    const targetLabel: string = targetLabelMap[target];

    return (
        <Text style={[ targetStyle, styles.base ]}>
            {targetLabel}
        </Text>
    );
};


const styles = StyleSheet.create({
    base: {
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: Colors['light'].white,
    },
    reading: {
        backgroundColor: Colors['light'].green
    },
    shelved: {
        backgroundColor: Colors['light'].pink
    },
    finished: {
        backgroundColor: Colors['light'].teal
    },
});
