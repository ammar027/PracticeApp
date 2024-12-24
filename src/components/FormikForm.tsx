import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values: any) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

          <Button title="Submit" onPress={handleSubmit} />
        </View>
        
      )}
    </Formik>
    
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
});

export default FormikForm;
