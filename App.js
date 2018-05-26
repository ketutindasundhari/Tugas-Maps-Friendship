import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.116136,
          longitude:  115.088847
        },
        title: 'Rumah Makan Manalagi-Arisan sama teman',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.121877,
          longitude: 115.064821
        },
        title: 'Krisnas Beach Street & BarResto-Ultha Pacar',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude:-8.176974,
          longitude:  114.997995
        },
        title: 'RM Mina Segara-Ketemuan dengan client'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.174357,
          longitude: 115.004207
        },
        title: 'Bebek Tepi Sawah Restaurant & Villas-Makan-makan bersama keluarga'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Selamat Datang Di Maps FriendShip
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> http://ketutindasundhari@gmail.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#192a56',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#192a56',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});