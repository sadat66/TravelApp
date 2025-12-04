import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const Slide = ({ item }) => {
  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground
        source={item.image}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', // Darker overlay for better text visibility
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    paddingBottom: height * 0.28,
  },
  textContainer: {
    height: 200,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 32,
    fontStyle: 'normal',
    lineHeight: 36,
    color: '#FFF',
    textAlign: 'left',
    marginBottom: 20,
    alignSelf: 'stretch',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#FFF',
    textAlign: 'left',
  },
});

export default Slide;
