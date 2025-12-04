import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import CategorySection from '../components/CategorySection';
import Header from '../components/Header';
import PackageCard from '../components/PackageCard';
import PlaceCard from '../components/PlaceCard';
import SearchBar from '../components/SearchBar';

// Sample data - replace with actual data later
const popularPlaces = [
    {
        id: 1,
        name: 'Bromo Mountain',
        location: 'Java East, Indonesia',
        rating: 5,
        image: require('../assets/images/landing/onboarding1.jpg'),
        isFavorite: false,
    },
    {
        id: 2,
        name: 'Kuta Beach',
        location: 'Bali, Indonesia',
        rating: 4,
        image: require('../assets/images/landing/onboarding2.jpg'),
        isFavorite: true,
    },
];

const destinations = [
    { id: 1, name: 'Metropolitan', image: require('../assets/images/landing/onboarding1.jpg') },
    { id: 2, name: 'Urawa Washington', image: require('../assets/images/landing/onboarding2.jpg') },
    { id: 3, name: 'SH Premier Saitama', image: require('../assets/images/landing/onboarding3.jpg') },
    { id: 4, name: 'Urawa Royal Pines', image: require('../assets/images/landing/onboarding1.jpg') },
];

const popularPackages = [
    {
        id: 1,
        name: 'Jepara Resort',
        price: 845.00,
        rating: 4.8,
        description: 'A resort is a place used for vacation, relaxation or as a day...',
        image: require('../assets/images/landing/onboarding1.jpg'),
        isFavorite: false,
    },
    {
        id: 2,
        name: 'Kuta Resort',
        price: 745.00,
        rating: 4.8,
        description: 'A resort is a place used for vacation, relaxation or as a day...',
        image: require('../assets/images/landing/onboarding2.jpg'),
        isFavorite: false,
    },
];

const Dashboard = () => {
    const handleFavoriteToggle = (id, isFavorite) => {
        console.log(`Toggled favorite for item ${id}: ${isFavorite}`);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
            <StatusBar barStyle="dark-content" />
            <Header />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Text style={styles.mainTitle}>Where do you{'\n'}want to explore today?</Text>

                <SearchBar />

                <CategorySection />

                {/* Popular Place Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Place</Text>
                    <Text style={styles.exploreLink}>Explore</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.placesContainer}
                    contentContainerStyle={styles.placesContent}
                >
                    {popularPlaces.map((place) => (
                        <PlaceCard
                            key={place.id}
                            place={place}
                            onFavoriteToggle={handleFavoriteToggle}
                        />
                    ))}
                </ScrollView>

                {/* Destinations Section */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.destinationsContainer}
                    contentContainerStyle={styles.destinationsContent}
                >
                    {destinations.map((dest) => (
                        <TouchableOpacity key={dest.id} style={styles.destinationItem}>
                            <Image source={dest.image} style={styles.destinationImage} />
                            <Text style={styles.destinationName}>{dest.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Popular Package Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Package</Text>
                    <Text style={styles.seeAllLink}>See All</Text>
                </View>
                {popularPackages.map((pkg) => (
                    <PackageCard
                        key={pkg.id}
                        packageData={pkg}
                        onFavoriteToggle={handleFavoriteToggle}
                    />
                ))}

                <View style={{ height: 20 }} />
            </ScrollView>

            <BottomNav activeTab="home" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollView: {
        flex: 1,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
        paddingHorizontal: 20,
        marginBottom: 20,
        lineHeight: 36,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    exploreLink: {
        fontSize: 14,
        color: '#155DFC',
    },
    seeAllLink: {
        fontSize: 14,
        color: '#155DFC',
    },
    placesContainer: {
        marginBottom: 20,
    },
    placesContent: {
        paddingHorizontal: 20,
    },
    destinationsContainer: {
        marginBottom: 20,
    },
    destinationsContent: {
        paddingHorizontal: 20,
    },
    destinationItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    destinationImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
    },
    destinationName: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        maxWidth: 80,
    },
});

export default Dashboard;
