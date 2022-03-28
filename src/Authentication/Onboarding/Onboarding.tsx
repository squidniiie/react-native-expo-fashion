import { ScrollView } from 'react-native-gesture-handler'
import { View, StyleSheet, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from './Slide'
import React, { useRef } from 'react'
import Animated, { multiply } from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash/lib/module/v1';
import Subslide from './Subslide';

const BORDER_RADIUS = 75;
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: BORDER_RADIUS,
        flexDirection: 'row',
    },
});
const slides = [
    {
        title: "Relaxed", subtitle: 'Find Your Outfits', description: "Confused about your outfit? Don't worry! Find the best outfit here!"
        , color: "#BFEAF5"
    },
    {
        title: "Playful", subtitle: 'Header it First, Wear it First', description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
        color: "#BEECC4"
    },

    {
        title: "Excentric", subtitle: 'Your Style, Your Way', description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9"
    },
    {
        title: "Funky", subtitle: 'Look Good, Feel Good', description: "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD"
    },
];
const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0)
    const onScroll = onScrollEvent({ x })
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color),
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal snapToInterval={width}
                    decelerationRate="fast"
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...{ onScroll }}>
                    {slides.map(({ title }, index) => (
                        <Slide key={index} right={!(index % 2)} {...{ title }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
                <Animated.View style={[styles.footerContent, { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] }]}>
                    {slides.map(({ subtitle, description }, index) => (
                        <Subslide onPress={() => {
                            if (scroll.current) {
                                scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                            }
                        }} key={index} last={index === slides.length - 1} {...{ subtitle, description, x }} />
                    ))}
                </Animated.View>
            </View>
        </View>
    )
}

export default Onboarding