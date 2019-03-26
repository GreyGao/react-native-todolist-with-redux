import React from 'react'
import { StyleSheet, View, TextInput, Button, } from 'react-native'

class placeInput extends React.Component {
  state = {
    placeName: '',
  }

  placeNameChangeHandler = (value) => {
    this.setState({ placeName: value })
  }

  render() {
    return (
      <View style={styles.inputContainer} >
        <TextInput
          style={styles.placeInput}
          placeholder="an awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button title="Add" style={styles.placeButton} onPress={() => { this.props.placeAddedHandler(this.state.placeName) }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: '30%'
  },
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})


export default placeInput