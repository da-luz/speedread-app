import React from 'react';
import { Platform } from 'react-native';

import { Tabs } from 'expo-router';

import { Colors } from '@/constants/Colors';
import { Icon } from '@/components/ui/IconSymbol';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors['light'].brown,
                tabBarActiveBackgroundColor: Colors["light"].beige,
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Reading",
                    tabBarIcon: ({ color }) => <Icon size={28} name="home" color={color} />,
                }}
            />
        </Tabs>
    );
}
