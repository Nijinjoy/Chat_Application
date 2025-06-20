import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image,
    GestureResponderEvent,
    ImageSourcePropType,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';

interface ButtonComponentProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    loading?: boolean;
    disabled?: boolean;
    icon?: ImageSourcePropType; // for image icons
    iconComponent?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    backgroundColor?: string;
    textColor?: string;
    border?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    title,
    onPress,
    loading = false,
    disabled = false,
    icon,
    iconComponent,
    style = {},
    textStyle = {},
    backgroundColor = '#4A80F0',
    textColor = '#fff',
    border = false,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor: border ? '#fff' : backgroundColor,
                    borderWidth: border ? 1 : 0,
                    borderColor: '#dfe6e9',
                },
                style,
                disabled && styles.disabled,
            ]}
            activeOpacity={0.8}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={textColor} />
            ) : (
                <View style={styles.content}>
               {iconComponent}
  {icon && <Image source={icon} style={styles.icon} />}
                    <Text style={[styles.text, { color: border ? '#2d3436' : textColor }, textStyle]}>
                        {title}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    disabled: {
        opacity: 0.6,
    },
});
