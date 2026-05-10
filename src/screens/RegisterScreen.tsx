import React, { useState } from 'react';


import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router'; // Importación necesaria para Expo Router

const RegisterScreen = () => {
  const router = useRouter(); // Hook para la navegación

  // Estados para cada campo del formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('Colombia');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Aquí iría la lógica para registrar al usuario (API call)
    console.log('Datos de registro:', {
      firstName,
      lastName,
      mobilePhone,
      address,
      country,
      email,
      password,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.bankName}>NovaBank</Text>
        <Text style={styles.subtitle}>Secure Mobile Banking</Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Register</Text>

          {/* FIRST NAME */}
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            placeholderTextColor="#94A3B8"
            value={firstName}
            onChangeText={setFirstName}
          />

          {/* LAST NAME */}
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            placeholderTextColor="#94A3B8"
            value={lastName}
            onChangeText={setLastName}
          />

          {/* MOBILE PHONE */}
          <Text style={styles.label}>Mobile Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile phone"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            value={mobilePhone}
            onChangeText={setMobilePhone}
          />

          {/* ADDRESS */}
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            placeholderTextColor="#94A3B8"
            value={address}
            onChangeText={setAddress}
          />

          {/* COUNTRY */}
          <Text style={styles.label}>Country</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={country}
              onValueChange={(itemValue) => setCountry(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Colombia" value="Colombia" />
              <Picker.Item label="Argentina" value="Argentina" />
              <Picker.Item label="Mexico" value="Mexico" />
              <Picker.Item label="Spain" value="Spain" />
              <Picker.Item label="United States" value="United States" />
            </Picker>
          </View>

          {/* EMAIL */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* PASSWORD */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* SIGN UP BUTTON */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* REDIRECCIÓN A LOGIN */}
<TouchableOpacity 
  style={styles.loginLinkContainer}
// @ts-ignore
onPress={() => router.push('/login' as any)}
>
  <Text style={styles.loginLinkText}>I already have an account</Text>
</TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    paddingHorizontal: 30,
    marginTop: 50,
    marginBottom: 25,
  },
  bankName: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#CBD5E1',
    marginTop: 5,
    fontSize: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 25,
  },
  label: {
    color: '#334155',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  pickerContainer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 18,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    color: '#0F172A',
  },
  signUpButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  loginLinkContainer: {
    paddingVertical: 25,
    alignItems: 'center',
  },
  loginLinkText: {
    color: '#2563EB',
    fontSize: 15,
    fontWeight: '600',
  },
});
