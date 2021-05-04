import React from 'react';
import {
StyleSheet,
View,
Text,
Dimensions,
Image
} from 'react-native';
import ViewSlider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');

function ImageSlider() {
  return (
    <>
      <ViewSlider 
        renderSlides = {
          <>
            <View style={styles.viewBox}>
              <Image source={require("./../../img/sliderimage.png")} style={styles._slider_img}/>
            </View>
            <View style={styles.viewBox}>
              <Image source={require("./../../img/sliderimage.png")} style={styles._slider_img}/>
            </View>
            <View style={styles.viewBox}>
              <Image source={require("./../../img/sliderimage.png")} style={styles._slider_img}/>
            </View>
            <View style={styles.viewBox}>
              <Image source={require("./../../img/sliderimage.png")} style={styles._slider_img}/>
            </View>
            <View style={styles.viewBox}>
              <Image source={require("./../../img/sliderimage.png")} style={styles._slider_img}/>
            </View>
         </>
      }
      style={styles.slider}     //Main slider container style
      height = {393}    //Height of your slider
      slideCount = {5}    //How many views you are adding to slide
      dots = {true}     // Pagination dots visibility true for visibile 
      dotActiveColor = 'white'     //Pagination dot active color
      dotInactiveColor = 'gray'    // Pagination do inactive color
      dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
      autoSlide = {false}    //The views will slide automatically
      // slideInterval = {1000}    //In Miliseconds
     />
    </>
  );
};

const styles = StyleSheet.create({
  viewBox: {
      paddingHorizontal: 20,
      justifyContent: 'center',
      width: width,
      // padding: 10,
      alignItems: 'center',
      height: 494,
  },
  slider: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%"
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15
  },
  _slider_img:{
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    // padding: 10,
    alignItems: 'center',
    height: 494,
  }
});

export default ImageSlider;