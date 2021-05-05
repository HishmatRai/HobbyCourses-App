import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
export default function SignUp(props) {
    const [email, onChangeEmail] = React.useState("");
    const [userName, onChangeUserName] = React.useState("");
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#00A89B"
                translucent={true}
            />
            {/* ===============> <================== */}
            <View style={styles._header_main}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <EvilIcons name="close" size={24} color="white" />
                </TouchableOpacity>
                <Image source={require("./../../img/groupImages.png")} style={styles._logo} />
                <TouchableOpacity>
                    <EvilIcons name="close" size={24} color="#00A89B" />
                </TouchableOpacity>
            </View>
            <Text style={styles._heading}>What you want learn to day</Text>

            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* ===============> <================== */}
                    <View style={styles._scroll_header_main}>
                        <View style={styles._scroll_header_login_btn_main}>
                            <TouchableOpacity style={styles._scroll_header_login_btn} onPress={() => props.navigation.navigate("Login")}>
                                <Text style={styles._scroll_header_login_btn_txt}>Signin</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles._scroll_header_signUp_btn_main}>
                            <TouchableOpacity style={styles._scroll_header_signUp_btn} >
                                <Text style={styles._scroll_header_signUp_btn_txt}>SignUp</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={{ textAlign: "center", fontSize: 24, color: "#172B4D", marginTop: 10 }}>Hello!</Text>
                    <Text style={{ fontSize: 14, color: "#BEBEBE", textAlign: "center" }}>Create an account to continue!</Text>
                    {/* ===============> <================== */}
                    <View style={styles._input_main}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeUserName}
                            value={userName}
                            placeholder="UserName"
                            color="#7A869A"
                        />
                        <Ionicons name="checkmark-circle" size={24} color="#FF3480" />
                    </View>

                    <View style={styles._input_main}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email"
                            color="#7A869A"
                        />
                        <Ionicons name="checkmark-circle" size={24} color="#FF3480" />
                    </View>

                    {/* ===============> <================== */}
                    <TouchableOpacity style={styles._signIn_btn} onPress={() => props.navigation.navigate("VerificationCode")}>
                        <Text style={styles._signIn_btn_txt}>SignUp</Text>
                    </TouchableOpacity>

                    {/* ===============> <================== */}
                    <View style={styles._sign_up_main}>
                        <Text style={styles._sign_up_text}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={styles._sign_up_btn_txt}>SignIn</Text>
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
        backgroundColor: '#00A89B',
    },
    _main: {
        marginTop: 30,
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 20,
        paddingRight: 20,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 10
    },
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    _logo: {
        width: 135,
        height: 44
    },
    _heading: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 30
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        height: 60
    },
    input: {
        width: "85%",
        marginLeft: 10,
        color: "#8F9BB3",
        fontSize: 15,
        letterSpacing: 0.5,
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

    _sign_up_main: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    _sign_up_text: {
        color: "#8F9BB3",
        fontSize: 15,
        letterSpacing: 0.5,
        marginRight: 5
    },
    _sign_up_btn_txt: {
        color: "#00A89B",
        fontSize: 15
    },

    _scroll_header_main: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        alignSelf: "center"
    },
    _scroll_header_login_btn_main: {
        width: "50%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRightColor: "#878787",
        borderRightWidth: 1,
        height: 30,
    },
    _scroll_header_signUp_btn_main: {
        width: "50%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderLeftWidth: 1,
        borderLeftColor: "#878787",
        height: 30,
    },
    _scroll_header_signUp_btn: {
        backgroundColor: "#00A89B",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "80%"
    },
    _scroll_header_login_btn: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "80%"
    },
    _scroll_header_signUp_btn_txt: {
        color: "white",
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: "bold"
    },
    _scroll_header_login_btn_txt: {
        color: "#707070",
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: "bold"
    }
});
