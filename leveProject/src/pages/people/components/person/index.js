import React, { Component } from "react";

import { View, Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Person = ({ person, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image style={styles.image} source={{ uri: person.avatarUrl }} />
    <View style={styles.information}>
      <Text>Nome: {person.name}</Text>
      <Text>Telefone:{person.phone}</Text>
      <Text>CPF:{person.cpf}</Text>
      <Text>Escolaridade:{person.scholarity}</Text>
    </View>
  </TouchableOpacity>
);

Person.propTypes = {
  person: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    cpf: PropTypes.string,
    scholarity: PropTypes.string
  }).isRequired,
  onPress: PropTypes.func.isRequired
};
export default Person;
