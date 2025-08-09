import { Colors } from "@/constants/Colors";
import { BookState } from "@/core/types"
import { StyleSheet, Text, TextStyle } from "react-native"

export type BookStateLabelProps = {
    state: BookState,
    target: "list" | "read" | "finish" | "stop",
    id?: bigint,
}

export function BookStateLabel({ state, target }: BookStateLabelProps) {
    const targetStyleMap: Record<string, TextStyle> = {
        read: styles.reading,
        finish: styles.finished,
        stop: styles.stop,
    };

    const stateStyleMap: Partial<Record<BookState, TextStyle>> = {
        [BookState.SHELVED]: styles.shelved,
        [BookState.READING]: styles.reading,
        [BookState.FINISHED]: styles.finished,
    };

    const targetStyle: TextStyle = targetStyleMap[target] ?? stateStyleMap[state] ?? {};

    return (
        <Text style={[ targetStyle, styles.base ]}>
            {state && target === 'list' ? state[0] + state.slice(1).toLowerCase() : target[0].toUpperCase() + target.slice(1)}
        </Text>
    );
};

const styles = StyleSheet.create({
    base: {
        padding: 10,
        fontWeight: "bold",
        color: Colors['light'].white,
    },
    stop: {
        backgroundColor: Colors['light'].pink
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
})
