import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, EvilIcons } from '@expo/vector-icons';
import Otp from './../../components/Otp/Otp';
export default function VerificationCode(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* ===============> <================== */}
                    <View style={styles._header_main}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <EvilIcons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* ===============> <================== */}
                    <View style={styles._heading_main}>
                        <Feather name="message-square" size={24} color="#BEBEBE" />
                        <View>
                            <Text style={{ color: "#172B4D", fontSize: 24, textAlign: "center" }}>SMS Verification</Text>
                            <Text style={{ color: "#7A869A", fontSize: 14, textAlign: "center" }}>Enter your 5 digit code </Text>
                        </View>
                        <Feather name="message-square" size={24} color="white" />
                    </View>

                    {/* ===============> <================== */}
                    <View style={styles._otp_main}>
                        <Otp />
                    </View>
                    {/* ===============> <================== */}
                    <TouchableOpacity style={styles._signIn_btn} onPress={() => props.navigation.navigate("BirthdayChose")}>
                        <Text style={styles._signIn_btn_txt}>Verify</Text>
                    </TouchableOpacity>

                    {/* ===============> <================== */}
                    <View style={styles._sign_up_main}>
                        <Text style={styles._sign_up_text}>Don't receive a code?</Text>
                        <TouchableOpacity>
                            <Text style={styles._sign_up_btn_txt}>Resend</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    _main: {
        marginTop: 30,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
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
    _heading_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        alignItems: "center"
    },
    _otp_main: {
        marginTop: 70,
        margin: 5,
        marginBottom: 30
    },
    _sign_up_main: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    _sign_up_text: {
        color: "#707070",
        fontSize: 13,
        letterSpacing: 0.5,
    },
    _sign_up_btn_txt: {
        color: "black",
        fontSize: 13
    },
});
