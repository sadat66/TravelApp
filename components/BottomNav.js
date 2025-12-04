import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const BottomNav = ({ activeTab = 'home', onTabChange }) => {
    const [active, setActive] = useState(activeTab);

    const handleTabPress = (tab) => {
        setActive(tab);
        if (onTabChange) {
            onTabChange(tab);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('home')}
            >
                <View style={[styles.iconContainer, active === 'home' && styles.activeIconContainer]}>
                    <Ionicons
                        name="home"
                        size={24}
                        color={active === 'home' ? '#FFF' : '#999'}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('favorites')}
            >
                <Ionicons
                    name="heart-outline"
                    size={24}
                    color={active === 'favorites' ? '#000' : '#999'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('explore')}
            >
                <MaterialCommunityIcons
                    name="compass-outline"
                    size={24}
                    color={active === 'explore' ? '#000' : '#999'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('profile')}
            >
                <Ionicons
                    name="person-outline"
                    size={24}
                    color={active === 'profile' ? '#000' : '#999'}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 12,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIconContainer: {
        backgroundColor: '#000',
    },
});

export default BottomNav;
