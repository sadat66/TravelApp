import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <View style={styles.avatar}>
                    <Ionicons name="person" size={24} color="#666" />
                </View>
                <Text style={styles.greeting}>Hello, Patrick!</Text>
            </View>
            <View style={styles.notificationIcon}>
                <Ionicons name="notifications-outline" size={24} color="#000" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    greeting: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    notificationIcon: {
        padding: 5,
    },
});

export default Header;
