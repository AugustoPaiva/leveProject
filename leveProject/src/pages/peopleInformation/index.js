import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Button
} from "react-native";
import PropTypes from "prop-types";
import ImagePicker from "react-native-image-picker";
import api from "../../services/api";

import styles from "./styles";
import { PermissionsAndroid } from "react-native";

const options = {
  title: "Escolha uma foto de Perfil",
  takePhotoButtonTitle: "Câmera",
  chooseFromLibraryButtonTitle: "Escolha da galeria",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class PeopleInformation extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    id: "",
    name: "",
    avatarUrl: "../../assets/user.png",
    phone: "",
    cpf: "",
    scholarity: ""
  };
  componentDidMount() {
    this.carregar();
  }
  updateClient = async () => {
    try {
      const { email, avatarUrl, name, cpf, phone, user_cod } = this.state;
      await api.put(`/users${user_cod}`, {
        email,
        avatarUrl,
        name,
        cpf,
        phone
      });
    } catch (error) {
      console.log(error);
    }
  };

  savePic = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("Image Picker Error: ", response.error);
      } else {
        const source = response.uri;
        this.setState({
          avatarUrl: source
        });
      }
    });
  };

  carregar = () => {
    const {
      _id,
      name,
      avatarUrl,
      phone,
      cpf,
      scholarity
    } = this.props.navigation.state.params.person;

    this.setState({ _id, name, avatarUrl, phone, cpf, scholarity });
  };

  delete = async () => {
    try {
      const response = await api.delete("person/" + this.state._id);
      this.props.navigation.navigate("People", { refresh: "refreshFunction" });
    } catch (err) {
      alert(err.message);
    }
  };

  update = async () => {
    const { _id, name, avatarUrl, phone, cpf, scholarity } = this.state;
    try {
      await api.put("person/" + _id, {
        name: name,
        avatarUrl: avatarUrl,
        phone: phone,
        cpf: cpf,
        scholarity: scholarity
      });
      this.props.navigation.navigate("People", { refresh: "refreshFunction" });
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    const { name, avatarUrl, phone, cpf, scholarity } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.savePic}>
          <Image style={styles.profilePic} source={{ uri: avatarUrl }} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ name: input })}
          value={name}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ cpf: input })}
          value={cpf}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ phone: input })}
          value={phone}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ scholarity: input })}
          value={scholarity}
        />
        <View style={styles.buttonsView}>
          <Button style={styles.button} onPress={this.delete} title="Excluir" />
          <Button style={styles.button} onPress={this.update} title="Editar" />
        </View>
      </View>
    );
  }
}
