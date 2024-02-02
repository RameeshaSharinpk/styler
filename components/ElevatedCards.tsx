import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.Elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text> :)</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text> :)</Text>
        </View>
        <View style={[styles.card, styles.Elevated]}>
            <Text> :)</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        padding: 8,

    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    Elevated: {
        backgroundColor: "#F5BCBA",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
})