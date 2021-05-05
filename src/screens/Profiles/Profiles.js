import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, SimpleLineIcons } from '@expo/vector-icons';
export default function Profiles(props) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 70 }}>
                    <Text>Profiles</Text>

                </ScrollView>
                {/* ===============> <================== */}
            </View>
            <View style={styles._tab_nav_main}>
                <TouchableOpacity style={styles._bottom_tab} onPress={() => props.navigation.navigate("Home")}>
                    <Feather name="home" size={24} color="#C5CEE0" />
                    <Text style={styles._bottom_tab_txt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_tab} onPress={() => props.navigation.navigate("Tasks")}>
                    <Feather name="home" size={24} color="#C5CEE0" />
                    <Text style={styles._bottom_tab_txt}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_tab} onPress={() => props.navigation.navigate("Inbox")}>
                    <Ionicons name="chatbubble-outline" size={24} color="#C5CEE0" />
                    <Text style={styles._bottom_tab_txt}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_tab} onPress={() => props.navigation.navigate("Profiles")}>
                    <SimpleLineIcons name="user" size={24} color="#FF3480" />
                    <Text style={styles._bottom_tab_txt_active}>Profiles</Text>
                </TouchableOpacity>
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
        marginTop: 30
    },
    _tab_nav_main: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 10,
        paddingBottom: 10

    },
    _bottom_tab: {
        width: "20%",
        alignItems: "center"
    },
    _bottom_tab_txt_active: {
        color: "#FF3480",
        fontSize: 13,
        textAlign: "center"
    },
    _bottom_tab_txt: {
        color: "#C5CEE0",
        fontSize: 13,
        textAlign: "center"
    }
});
