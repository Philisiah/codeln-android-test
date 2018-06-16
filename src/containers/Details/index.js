import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View, StyleSheet, TouchableOpacity, Dimensions, Text, H1 } from 'react-native'
import { Container, Header, Content, Form, Item, Input, H1, Icon, Button, Text, Card, CardItem, Body } from 'native-base';


class Details extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="bicycle" color={tintColor}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 6.4602807,
        longitude: 3.4372604,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
    }
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  renderMap = () => {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          onRegionChange={this.onRegionChange}
          region={this.state.mapRegion}
          showsPointsOfInterest={false}
          showsCompass={false}
          showsScale={false}
          showsBuildings={false}
          showsTraffic={false}
          showsIndoors={false}
        >
        <MapView.Marker
            coordinate={{
              latitude: (this.state.lastLat + 0.00050) || -36.82339,
              longitude: (this.state.lastLong + 0.00050) || -73.03569,
            }}>
            <View>
              <Text style={{color: '#000'}}>
                { this.state.lastLong } / { this.state.lastLat }
              </Text>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container }>
      {this.renderMap()}
      <View>
          <H1>Name: Store: {this.props.navigation.state.params.title}</H1>
          <Text>description</Text>
          <Text>{this.props.navigation.state.params.desc}</Text>
        </View>
      </View>
    )   
  }
}
const styles = StyleSheet.create({
  container: { ... StyleSheet.absoluteFillObject },
  map: { 
    height: Dimensions.get('window').height * 0.4
   }
})
export default Details