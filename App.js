import React, { Component } from 'react';
import { Platform, StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux'

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index'

type Props = {};
class App extends Component<Props> {
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  placeDeleteHandler = () => {
    this.props.onDeletePlace();
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key)
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    // const { places } = this.props;

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onPlaceDeleted={this.placeDeleteHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeAddedHandler={this.placeAddedHandler}
        />
        <PlaceList
          places={this.props.places}
          placeSelectedHandler={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
