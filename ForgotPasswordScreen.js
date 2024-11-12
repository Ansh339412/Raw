import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.instructions}>
        Enter your email to receive instructions on how to reset your password if not recieved check the junk folder once.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Send Reset Link</Text>
      </TouchableOpacity>
      

        </View>
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  signupLink: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});