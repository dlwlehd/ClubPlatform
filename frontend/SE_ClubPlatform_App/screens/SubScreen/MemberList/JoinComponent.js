import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const Sample = [
  {
    attribute: '이름',
    context: '박지영',
  },
  {
    attribute: '학번',
    context: '202212345',
  },
  {
    attribute: '학과',
    context: '미디어학과',
  },
  {
    attribute: '연락처',
    context: '010-1234-5678',
  },
];
//인덱스가 1일때만 view를 row로 만들어야함..
function JoinComponent() {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.text_box}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.apply_text_container}>
              <Text style={styles.apply_attribute_text}>
                {Sample[0]['attribute']}
              </Text>
            </View>
            <View style={styles.apply_text_container}>
              <Text style={[styles.apply_context_text, {marginRight: 20}]}>
                {Sample[0]['context']}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.text_box}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.apply_text_container}>
              <Text style={styles.apply_attribute_text}>
                {Sample[1]['attribute']}
              </Text>
            </View>
            <View style={styles.apply_text_container}>
              <Text style={styles.apply_context_text}>
                {Sample[1]['context']}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.text_box}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.apply_text_container}>
              <Text style={styles.apply_attribute_text}>
                {Sample[2]['attribute']}
              </Text>
            </View>
            <View style={styles.apply_text_container}>
              <Text style={styles.apply_context_text}>
                {Sample[2]['context']}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.text_box}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.apply_text_container}>
              <Text style={styles.apply_attribute_text}>
                {Sample[3]['attribute']}
              </Text>
            </View>
            <View style={styles.apply_text_container}>
              <Text style={styles.apply_context_text}>
                {Sample[3]['context']}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function JoinBlock() {
  return (
    <View style={styles.gray_card}>
      <JoinComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  gray_card: {
    height: Height * 0.1,
    backgroundColor: '#eeeeee',
    opacity: 0.5,
    flex: 1,
    borderRadius: 7,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    //alignSelf: 'baseline',
    marginTop: 5,
    paddingLeft: 10,
    paddingTop: 8,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  text_box: {
    //borderWidth: 1,
    flexDirection: 'row',
    //width: 300,
  },
  apply_text_container: {
    paddingRight: 5,
    paddingBottom: 2,
    //borderWidth: 0.5,
    opacity: 1,
  },
  apply_attribute_text: {
    color: '#cccccc',
    opacity: 1,
  },
  apply_context_text: {
    color: '#000000',
    opacity: 1,
  },
  test: {
    borderWidth: 2,
  },
});
export default JoinBlock;