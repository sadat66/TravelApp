import { StyleSheet, View } from 'react-native';

const ProgressBar = ({ currentSlideIndex, totalSlides }) => {
    return (
        <View style={styles.container}>
            {Array.from({ length: totalSlides }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.bar,
                        currentSlideIndex === index ? styles.activeBar : styles.inactiveBar,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 8,
    },
    bar: {
        height: 4,
        width: 40,
        borderRadius: 2,
    },
    activeBar: {
        backgroundColor: '#fff',
    },
    inactiveBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
});

export default ProgressBar;
