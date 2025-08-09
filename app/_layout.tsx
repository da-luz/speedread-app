import { useEffect } from "react";
import { Appearance, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Stack } from "expo-router";
import { setButtonStyleAsync } from "expo-navigation-bar";


export default function RootLayout() {
    const colorScheme = Appearance.getColorScheme() ?? 'light';
    const statusBarStyle = colorScheme !== 'dark' ? 'light-content' : 'dark-content';

    useEffect(() => {
        setButtonStyleAsync(colorScheme !== 'dark' ? 'light' : 'dark');
    }, []);

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={statusBarStyle} />
            <Stack />
        </SafeAreaProvider>
    );
}
