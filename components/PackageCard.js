import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PackageCard = ({ packageData, onFavoriteToggle }) => {
    const [isFavorite, setIsFavorite] = useState(packageData.isFavorite || false);

    const handleFavoritePress = () => {
        setIsFavorite(!isFavorite);
        if (onFavoriteToggle) {
            onFavoriteToggle(packageData.id, !isFavorite);
        }
    };

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={packageData.image} style={styles.image} resizeMode="cover" />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{packageData.name}</Text>
                <Text style={styles.price}>${packageData.price}</Text>
                <View style={styles.ratingContainer}>
                    {[...Array(5)].map((_, index) => (
                        <Ionicons
                            key={index}
                            name="star"
                            size={12}
                            color={index < packageData.rating ? '#FFD700' : '#DDD'}
                        />
                    ))}
                    <Text style={styles.ratingText}>{packageData.rating}</Text>
                </View>
                <Text style={styles.description} numberOfLines={2}>
                    {packageData.description}
                </Text>
            </View>
            <TouchableOpacity style={styles.favoriteButton} onPress={handleFavoritePress}>
                <Ionicons
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    size={20}
                    color={isFavorite ? '#FF4D4D' : '#999'}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 12,
        marginHorizontal: 20,
        marginBottom: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 120,
    },
    infoContainer: {
        flex: 1,
        padding: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FF6B35',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    ratingText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 5,
    },
    description: {
        fontSize: 12,
        color: '#999',
        lineHeight: 16,
    },
    favoriteButton: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
});

export default PackageCard;
