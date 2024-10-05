// screens/UsagerForm.js
import 'react-native-gesture-handler';
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UsagerForm = () => {
  const usagerSchema = Yup.object().shape({
    nom: Yup.string().required('Nom requis'),
    prenom: Yup.string().required('Prénom requis'),
    telephone: Yup.string().required('Téléphone requis'),
  });

  return (
    <Formik
      initialValues={{ nom: '', prenom: '', telephone: '' }}
      validationSchema={usagerSchema}
      onSubmit={values => {
        // Envoyer les données au backend
        axios.post('http://localhost:3000/creerUsager', values)
          .then(response => {
            alert('Compte Usager créé avec succès !');
          })
          .catch(error => {
            alert(`Erreur lors de la création du compte: ${error.response?.data || error.message}`);
          });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Text>Nom</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('nom')}
            onBlur={handleBlur('nom')}
            value={values.nom}
          />
          {errors.nom && <Text style={styles.error}>{errors.nom}</Text>}
          
          <Text>Prénom</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('prenom')}
            onBlur={handleBlur('prenom')}
            value={values.prenom}
          />
          {errors.prenom && <Text style={styles.error}>{errors.prenom}</Text>}
          
          <Text>Téléphone</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('telephone')}
            onBlur={handleBlur('telephone')}
            value={values.telephone}
          />
          {errors.telephone && <Text style={styles.error}>{errors.telephone}</Text>}

          <Button onPress={handleSubmit} title="Créer un compte Usager" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});

export default UsagerForm;
