import { Link } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from './ProgressBar';
import Slide from './Slide';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        id: '1',
        title: 'Discover Amazing Destinations',
        subtitle: 'Explore thousands of destinations around the world and find your perfect getaway. From tropical beaches to mountain peaks.',
        image: require('../assets/images/landing/onboarding1.jpg'),
    },
    {
        id: '2',
        title: 'Plan Your Perfect Trip',
        subtitle: 'Create custom itineraries, get expert recommendations, and plan every detail of your journey with our easy-to-use tools.',
        image: require('../assets/images/landing/onboarding2.jpg'),
    },
    {
        id: '3',
        title: 'Book with Confidence',
        subtitle: 'Enjoy secure bookings, best price guarantees, and 24/7 support. Your dream vacation is just a tap away.',
        image: require('../assets/images/landing/onboarding3.jpg'),
    },
];

const Onboarding = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex !== slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const goToPrevSlide = () => {
        const prevSlideIndex = currentSlideIndex - 1;
        if (prevSlideIndex >= 0) {
            const offset = prevSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(prevSlideIndex);
        }
    };

    const Footer = () => {
        return (
            <View style={styles.footerContainer}>
                <ProgressBar currentSlideIndex={currentSlideIndex} totalSlides={slides.length} />

                <View style={[styles.buttonsContainer, currentSlideIndex === 0 && { justifyContent: 'center' }]}>
                    {/* Previous Button */}
                    {currentSlideIndex > 0 && (
                        <TouchableOpacity activeOpacity={0.8} onPress={goToPrevSlide} style={styles.btnPrevious}>
                            <Text style={styles.btnPreviousText}>Previous</Text>
                        </TouchableOpacity>
                    )}

                    {/* Next Button */}
                    {currentSlideIndex < slides.length - 1 ? (
                        <TouchableOpacity activeOpacity={0.8} onPress={goToNextSlide} style={styles.btn}>
                            <Text style={styles.btnText}>Next</Text>
                        </TouchableOpacity>
                    ) : (
                        <Link href="/dashboard" asChild>
                            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                                <Text style={styles.btnText}> Start</Text>
                            </TouchableOpacity>
                        </Link>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
            <StatusBar translucent backgroundColor="transparent" />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
                keyExtractor={(item) => item.id}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e', // Fallback background color
    },
    footerContainer: {
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 60,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    btn: {
        height: 50,
        width: 120,
        borderRadius: 100,
        backgroundColor: '#155DFC',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
    },
    btnPrevious: {
        height: 50,
        width: 120,
        borderRadius: 100,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnPreviousText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
    },
});

export default Onboarding;
