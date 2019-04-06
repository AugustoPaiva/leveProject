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

const options = {
  title: "Escolha uma foto de Perfil",
  takePhotoButtonTitle: "Câmera",
  chooseFromLibraryButtonTitle: "Escolha da galeria",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class AddPerson extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    id: "",
    name: "",
    avatarUrl:
      "https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png",
    phone: "",
    cpf: "",
    scholarity: ""
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

  Add = async () => {
    const { name, avatarUrl, phone, cpf, scholarity } = this.state;
    try {
      await api.post("person/", {
        name: name,
        avatarUrl: avatarUrl,
        phone: phone,
        cpf: cpf,
        scholarity: scholarity
      });
      this.props.navigation.navigate("People");
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    const { avatarUrl } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.savePic}>
          <Image style={styles.profilePic} source={{ uri: avatarUrl }} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ name: input })}
          placeholder="Nome"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ cpf: input })}
          placeholder="CPF"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ phone: input })}
          placeholder="Telefone"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={input => this.setState({ scholarity: input })}
          placeholder="Escolaridade"
        />
        <View style={styles.buttonsView}>
          <Button style={styles.button} onPress={this.Add} title="Adicionar" />
        </View>
      </View>
    );
  }
}
