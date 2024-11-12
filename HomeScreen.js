import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { db } from './config';

import UserListItem from './UserListItem';


export default function HomeScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userCollection = collection(db, 'users'); 
      const userSnapshot = await getDocs(userCollection);
      const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <UserListItem user={item} onPress={() => navigation.navigate('Chat', { userId: item.id })} />
        )}
      />
      <Button mode="contained" onPress={() => auth.signOut()}>
        Logout
      </Button>
    </View>
  );
}