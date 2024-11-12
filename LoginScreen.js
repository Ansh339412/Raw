import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      
 
      
     
      <Text style={styles.title}>Welcome Back!</Text>
      
      
      <Text style={styles.label}>Username or Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username or email"
        value={email}
        onChangeText={setEmail}
      />

      
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      
     <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
  <Text style={styles.forgotPassword}>Forgot Password?</Text>
  </TouchableOpacity>


      
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'gray',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 10,
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: 'gray',
  },
  signupLink: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});
