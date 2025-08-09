import { BookCard } from "@/components/BookCard";
import { Book } from "@/core/types/Books";
import { BookState } from "@/core/types/BookState";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const book = new Book(1, 1, "Qualquer", BookState.READING);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <BookCard book={book} />
            </View>
        </SafeAreaView>
    );
}
