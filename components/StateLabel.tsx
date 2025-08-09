import { StyleSheet, Text, TextStyle } from "react-native"

import { BookState } from "@/core/types"
import { Colors } from "@/constants/Colors";


export type StateLabelProps = {
    state: BookState,
}

export function StateLabel({ state }: StateLabelProps) {
    const stateStyleMap: Partial<Record<BookState, TextStyle>> = {
        [BookState.SHELVED]: styles.shelved,
        [BookState.READING]: styles.reading,
        [BookState.FINISHED]: styles.finished,
    };

    const targetStyle: TextStyle = stateStyleMap[state] ?? {};

    return (
        <Text style={[ targetStyle, styles.base ]}>
            {state[0] + state.slice(1).toLowerCase()}
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
        backgroundColor: Colors['light'].mustard
    },
    finished: {
        backgroundColor: Colors['light'].teal
    },
});
