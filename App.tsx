import React, {} from 'react';
import { View, StyleSheet } from 'react-native';
import ApiCalls from './src/components/apiCalls';
import BasicForm from './src/components/BasicForm';
import FormikForm from './src/components/FormikForm';

const App = () => {


  return (
    <View style={styles.container}>
      <BasicForm/>
      <FormikForm/>
      <ApiCalls/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default App;
