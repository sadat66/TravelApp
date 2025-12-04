import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categories = [
    { id: 1, name: 'Historical', icon: 'bank' },
    { id: 2, name: 'Beach', icon: 'beach' },
    { id: 3, name: 'Mountain', icon: 'terrain' },
];

const CategorySection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Choose Category</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={[
                            styles.categoryChip,
                            selectedCategory === category.id && styles.categoryChipActive,
                        ]}
                        onPress={() => setSelectedCategory(category.id)}
                    >
                        <MaterialCommunityIcons
                            name={category.icon}
                            size={20}
                            color={selectedCategory === category.id ? '#155DFC' : '#666'}
                        />
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === category.id && styles.categoryTextActive,
                            ]}
                        >
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    seeAll: {
        fontSize: 14,
        color: '#155DFC',
    },
    categoriesContainer: {
        paddingHorizontal: 20,
    },
    categoryChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    categoryChipActive: {
        backgroundColor: '#E8F0FE',
    },
    categoryText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 8,
    },
    categoryTextActive: {
        color: '#155DFC',
        fontWeight: '500',
    },
});

export default CategorySection;
