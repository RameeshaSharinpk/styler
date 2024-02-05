import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Rameesha Sharin',
      status: 'I ❤ to code.',
      imageUrl: require('../images/personal.jpg'),
    },
    {
      uid: 2,
      name: 'Muhammed Shan',
      status: 'I love to play Football',
      imageUrl: require('../images/shan.jpg'),  
    }
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={imageUrl}
              style={styles.userImage}
            />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#FBD28B',
    padding: 8,
    borderRadius: 14
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14

  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  userStatus: {
    fontSize: 12,
  },
});
