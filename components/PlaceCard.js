import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const PlaceCard = ({ place, onFavoriteToggle }) => {
    const [isFavorite, setIsFavorite] = useState(place.isFavorite || false);

    const handleFavoritePress = () => {
        setIsFavorite(!isFavorite);
        if (onFavoriteToggle) {
            onFavoriteToggle(place.id, !isFavorite);
        }
    };

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={place.image} style={styles.image} resizeMode="cover" />
            <View style={styles.overlay} />
            <TouchableOpacity style={styles.favoriteButton} onPress={handleFavoritePress}>
                <Ionicons
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    size={24}
                    color={isFavorite ? '#FF4D4D' : '#FFF'}
                />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.placeName}>{place.name}</Text>
                <View style={styles.locationContainer}>
                    <Ionicons name="location-sharp" size={14} color="#FFD700" />
                    <Text style={styles.location}>{place.location}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    {[...Array(5)].map((_, index) => (
                        <Ionicons
                            key={index}
                            name="star"
                            size={14}
                            color={index < place.rating ? '#FFD700' : '#DDD'}
                        />
                    ))}
                    <Text style={styles.ratingText}>{place.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width * 0.6,
        height: 250,
        borderRadius: 15,
        marginRight: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    favoriteButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 20,
        padding: 8,
    },
    infoContainer: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        right: 15,
    },
    placeName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    location: {
        fontSize: 12,
        color: '#FFF',
        marginLeft: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 12,
        color: '#FFF',
        marginLeft: 5,
    },
});

export default PlaceCard;
