import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,

    },
    subtitle: {
        fontFamily: 'SFProText-Bold',
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
    },
    description: {
        fontFamily: 'SFProText-Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    }
})
interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;

}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button {...{ onPress }} label={last ? "Let's get started" : "Next"} variant={last ? "primary" : "default"} />
        </View>
    )
}

export default Subslide

