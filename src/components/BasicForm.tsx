import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const BasicForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }
    // Process the form
    console.log('Form Data:', formData);
    setError('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
});

export default BasicForm;
