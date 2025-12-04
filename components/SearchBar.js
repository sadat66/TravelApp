import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={20} color="#999" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search destination"
                placeholderTextColor="#999"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#000',
    },
});

export default SearchBar;
