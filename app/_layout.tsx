import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { SystemBars } from "react-native-edge-to-edge";


export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SystemBars style="inverted" hidden={false}/>
            <Stack />
        </SafeAreaProvider>
    );
};
