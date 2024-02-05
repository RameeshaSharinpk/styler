import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript
            </Text>
        </View>
        <Image
        source={{uri: 'https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?w=740&t=st=1706935316~exp=1706935916~hmac=2434f56e8c7b086c8f571764b30dc3d0fb82908c0708b1c118ef1d5aa40f89fb'}}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={5}>
            ECMAScript 2023, also known as ECMAScript 14, introduces several new features that refine and enhance JavaScript's functionality. These features mainly revolve around array manipulations, improved scripting support, and expanded capabilities for weak collections: Array.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://developer.feedspot.com/javascript_blogs/')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
        width: 330,
        height: 390,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#F5BCBA',
        color: '#000000',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 16
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})