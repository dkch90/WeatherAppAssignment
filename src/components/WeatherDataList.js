import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import colors from "../../res/colors";
import size from "../../res/size";

const WeatherDataList = ({ data, props }) => {

  const { list = [] } = data;

  const renderListItem = ({ item }) => {

    const { description: strDescription = '' } = item.weather[0];
    const { speed: strSpeed = 0.0 } = item.wind;
    const { humidity: strHumidity = 0.0 } = item.main;
    const { temp: strTemprature = 0.0 } = item.main;

    return (
      <View style={styles.item}>
        <TouchableOpacity>
          <View >
            <Text style={styles.textStyle}>Temprature : {strTemprature}</Text>
            <Text style={styles.textStyle}>Sky : {strDescription}</Text>
            <Text style={styles.textStyle}>Wind : {strSpeed}</Text>
            <Text style={styles.textStyle}>Humidity  : {strHumidity}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };



  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => item.dt}
        renderItem={renderListItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  item: {
    backgroundColor: colors.colorWhite,
    padding: size['10px'],
    marginVertical: size['5px'],
    borderColor: colors.colorLightGray,
    borderWidth: size['1px'],
    borderRadius: size['4px'],
    shadowColor: colors.colorLightGray,
    shadowRadius: size['3px']
  },
  textStyle: {
    fontSize: size['14px'],
    marginBottom: size['5px'],
  }
});

export default WeatherDataList;
