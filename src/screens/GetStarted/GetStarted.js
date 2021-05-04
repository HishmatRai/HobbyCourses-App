import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, StatusBar } from 'react-native';
export default function GetStarted() {
    return (
        <View style={styles.container}>
            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#00A89B"
                translucent={true}

            />
            <ScrollView>
                {/* ===============< >=============== */}
                <View style={{ margin: 0 }}>
                    <Image source={require("./../../img/get_started_logo.png")} style={styles._get_started_logo} />
                    <Text style={styles._app_name}>Hobby Courses</Text>
                </View>
            {/* ===============< >=============== */}
            <TouchableOpacity style={styles._get_started_button}>
                <Text style={styles._get_started_button_text}>Lets Get Started</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00A89B"
    },

    // ===========< >===========
    _get_started_logo: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 250,
        width: 102,
        height: 102
    },
    _app_name: {
        textAlign: "center",
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10
    },
    _get_started_button: {
        backgroundColor: "white",
        width: "80%",
        alignSelf: "center",
        marginTop: 100,
        borderRadius: 10,
        marginBottom:50
    },
    _get_started_button_text: {
        textAlign: "center",
        paddingBottom: 15,
        paddingTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    }
});
