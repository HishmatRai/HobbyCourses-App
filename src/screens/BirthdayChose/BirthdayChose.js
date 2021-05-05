import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import DatePciker from './../../components/DatePicker/DatePicker';
export default function BirthdayChose(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require("./../../img/groupImages.png")} style={styles._logo} />
                    <Text style={styles._heading}>My Hobby Courses</Text>
                    <Text style={{ color: "#707070", fontSize: 16, fontWeight: "bold", letterSpacing: 0.5 }}>You must be  at least 15 Years
                    old to use holiday activities. other people won’t see your birthday </Text>
                    {/* ===============> <================== */}
                    <View style={styles._calender_main}>
                        <Text style={styles._chose_bday}>Choose B'day Month</Text>
                        <Text style={styles.line}></Text>
                        <DatePciker />
                    </View>

                    {/* ===============> <================== */}
                    <TouchableOpacity style={styles._signIn_btn} onPress={() => props.navigation.navigate("Home")}>
                        <Text style={styles._signIn_btn_txt}>Next</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    _main: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30
    },
    _logo: {
        alignItems: "center",
        marginTop: 50,
        justifyContent: "center",
        alignSelf: "center",
        width: 135,
        height: 44
    },
    _heading: {
        fontSize: 23,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: 30,
        marginBottom: 30
    },
    _signIn_btn: {
        backgroundColor: "#FF3480",
        height: 56,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 20
    },
    _signIn_btn_txt: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    _chose_bday: {
        fontSize: 29,
        fontWeight: "bold",
        color: "#BEBEBE",
        textAlign: "center",
        letterSpacing: 0.5,
        marginTop: 20
    },
    _calender_main: {
        width: "90%",
        alignItems: "center",
        alignSelf: "center",
    },
    line: {
        backgroundColor: "#00A89B",
        width: "80%",
        height: 2,
        borderRadius: 20,
        alignSelf: "center",
        marginVertical: 10
    }


});
