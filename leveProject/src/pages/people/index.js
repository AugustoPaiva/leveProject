import React, { Component } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import Person from "./components/person";
import PropTypes from "prop-types";
import styles from "./styles";
import api from "../../services/api";

export default class People extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Projeto LEVE"
  });
  state = {
    people: [],
    filter: ""
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    if (this.state.filter != "") {
      this.loadFilterPeople();
    }
    this.loadPeople();
  }

  loadPeople = async () => {
    try {
      const response = await api.get("people/");
      this.setState({ people: response.data });
    } catch (err) {
      alert(err.message);
    }
  };
  loadFilterPeople = async text => {
    try {
      alert(text);
      const response = await api.get("person/" + text);
      this.setState({ people: response.data });
    } catch (err) {
      alert(err.message);
    }
  };
  add = async () => {
    this.props.navigation.navigate("AddPerson");
  };

  render() {
    const { navigation } = this.props;
    if (this.props.navigation.state.params != undefined) {
      this.loadPeople();
    }
    const { people, filter } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.filter}
          onChangeText={input => this.loadFilterPeople(input)}
          placeholder="Insira um nome ou parte dele"
        />
        <TouchableOpacity onPress={this.add} style={styles.button}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>

        <FlatList
          data={people}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <Person
              person={item}
              onPress={() =>
                navigation.navigate("PeopleInformation", { person: item })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
