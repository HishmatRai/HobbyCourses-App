import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
export default function CoursesAttendance(props) {
    let CardData = [
        { title: "New Castle College - Balroom Dance" },
        { title: "New Castle College - Balroom Dance" },
        { title: "New Castle College - Balroom Dance" },
        { title: "New Castle College - Balroom Dance" },
        { title: "New Castle College - Balroom Dance" },
        { title: "New Castle College - Balroom Dance" },
        { title: "New Castle College - Balroom Dance" },
        { title: "New Castle College - Balroom Dance" },
    ]
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    {/* ===============> <================== */}
                    <View style={styles._header_main}>
                        <TouchableOpacity>
                            <Ionicons name="md-arrow-back-sharp" size={24} color="#656565" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: "black" }}>Courses Attendance</Text>
                        <Ionicons name="md-arrow-back-sharp" size={24} color="white" />
                    </View>

                    {/* ===============> <================== */}
                    {CardData.map((v, i) => {
                        return (
                            <View style={styles._card_main}>
                                <View style={styles._card}>
                                    <View style={styles._card_header}>
                                        <View style={styles._card_header_column1_main}>
                                            <Image source={require("./../../img/CoursesAttendanceCardheaderimg.png")} style={styles.CoursesAttendanceCardheaderimg} />
                                        </View>
                                        <View style={styles._card_header_column2_main}>
                                            <Text style={{ fontSize: 20, color: "black" }}>{v.title}</Text>
                                        </View>
                                    </View>
                                    <View style={styles._card_body}>
                                        <View style={styles._card_body_column1_main}>
                                            <View style={styles._row}>
                                                <Text style={styles._body_title}>Tutor: </Text>
                                                <Text style={styles._body_title}>Neil Patel</Text>
                                            </View>
                                            <View style={styles._row}>
                                                <Text style={styles._body_date}>Start Date: </Text>
                                                <Text style={styles._body_date}>30-Nov-2016</Text>
                                            </View>
                                            <View style={styles._row}>
                                                <Text style={styles._body_date}>Price </Text>
                                                <Text style={styles._body_price}> £100.00</Text>
                                            </View>
                                            <View style={styles._row}>
                                                <Text style={styles._body_date}>Sessions </Text>
                                                <Text style={styles._body_date}>20</Text>
                                            </View>
                                        </View>
                                        <View style={styles._card_body_column2_main}>
                                            <View style={styles._row}>
                                                <Text style={styles._body_title}>Location: </Text>
                                                <Text style={styles._body_title}>London</Text>
                                            </View>
                                            <View style={styles._row}>
                                                <Text style={styles._body_date}>End Date: </Text>
                                                <Text style={styles._body_date}>30-Jan-2017</Text>
                                            </View>
                                            <View style={styles._row}>
                                                <Text style={styles._body_date}>End Date: </Text>
                                                <Text style={styles._body_date}>30-Jan-2017</Text>
                                            </View>
                                            <View style={styles._row}>
                                                <Text style={styles._body_date}>Batch size: </Text>
                                                <Text style={styles._body_date}>25</Text>
                                            </View>
                                            <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 20, marginTop: -10 }}>
                                                <AntDesign name="exclamationcircle" size={24} color="#B8B8B8" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
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
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    CoursesAttendanceCardheaderimg: {
        width: 60,
        height: 83
    },
    _card: {
        backgroundColor: "white",
        elevation: 5,
        width: "99%",
        margin: 1,
        borderRadius: 10,
        padding: 10,
        paddingVertical: 20,
    },
    _card_main: {

        marginTop: 20
    },
    _card_header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    _card_header_column1_main: {
        backgroundColor: "#00A89B",
        borderRadius: 10,
        height: 100,
        width: "30%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    _card_header_column2_main: {
        width: "70%",
        height: 100,
        paddingLeft: 20,
        paddingTop: 20
    },
    _card_body: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    _card_body_column1_main: {
        width: "48%",
        // backgroundColor:"green"
    },
    _card_body_column2_main: {
        width: "48%",
        // backgroundColor:"red"
    },
    _row: {
        flexDirection: "row",
        alignItems: "center"
    },
    _body_title: {
        fontSize: 17,
        color: "black"
    },
    _body_date: {
        fontSize: 13,
        color: "#707070"
    },
    _body_price: {
        fontSize: 13,
        color: "#FF3480"
    }
});
