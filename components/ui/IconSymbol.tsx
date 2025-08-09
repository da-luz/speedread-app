import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

type AppIcons = Record<string, ComponentProps<typeof MaterialIcons>['name']>;
type IconName = keyof typeof ICONS;

const ICONS = {
    home: 'auto-stories',
    library: 'shelves',
} as AppIcons;

type IconProps = {
    name: IconName;
    size?: number;
    color?: string | OpaqueColorValue;
    style?: StyleProp<TextStyle>;
};

export function Icon({ name, size = 24, color, style }: IconProps) {
    return (
        <MaterialIcons
            name={ICONS[name]}
            size={size}
            color={color}
            style={style}
        />
    );
}

