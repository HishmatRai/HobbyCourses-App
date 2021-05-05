import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Entypo, Ionicons, AntDesign, EvilIcons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import HomeCarouselSlider from './../../components/HomeCarouselSlider/HomeCarouselSlider';
export default function Home(props) {
    const [email, onChangeEmail] = React.useState("");

    let ExploreNearbyCardData = [
        { countryImage: require("./../../img/home1.png"), countryName: "London" },
        { countryImage: require("./../../img/home2.png"), countryName: "Glasgow" },
    ]
    let ExploreNearbyCardData2 = [
        { countryImage: require("./../../img/home3.png"), countryName: "Manchester" },
        { countryImage: require("./../../img/home4.png"), countryName: "Glasgow" },
    ]
    let Explore_Different_Categories = [
        { countryImage: require("./../../img/Explore_Different_Categories1.png"), title: "Subject Tutions", des: "Find online and in-person tutors to meet  your learning needs Subject Tuition." },
        { countryImage: require("./../../img/Explore_Different_Categories2.png"), title: "Subject Tutions", des: "Find online and in-person tutors to meet  your learning needs Subject Tuition." },
    ]
    let Subjects = [
        { countryImage: require("./../../img/homeSubjects1.png"), title: "Science", des: "Find online and in-person tutors to meet  your learning needs Subject Tuition." },
        { countryImage: require("./../../img/homeSubjects2.png"), title: "Science", des: "Find online and in-person tutors to meet  your learning needs Subject Tuition." },
    ]
    let Tuitions_at_Low_Price = [
        { countryImage: require("./../../img/Tuitions_at_Low_Price1.png"), title: "Bronze Verified", name: "Kanwal_36", price: "$66" },
        { countryImage: require("./../../img/Tuitions_at_Low_Price2.png"), title: "Bronze Verified", name: "Kanwal_36", price: "$66" },
    ]
    let SessionsatLowPrice = [
        { countryImage: require("./../../img/SessionsatLowPrice1.png"), title: "Bronze Verified", name: "Kanwal_36", price: "$66" },
        { countryImage: require("./../../img/SessionsatLowPrice2.png"), title: "Bronze Verified", name: "Kanwal_36", price: "$66" },
    ]

    let LeiserCourses = [
        { countryImage: require("./../../img/homeLeiserCourses1.png") },
        { countryImage: require("./../../img/homeLeiserCourses2.png") },
    ]

    let HomeExtra1 = [
        { countryImage: require("./../../img/homeExtra1.png") },
        { countryImage: require("./../../img/HomeExtra2.png") },
        { countryImage: require("./../../img/homeExtra1.png") },
        { countryImage: require("./../../img/HomeExtra2.png") },
        { countryImage: require("./../../img/HomeExtra2.png") },
        { countryImage: require("./../../img/HomeExtra2.png") },
        { countryImage: require("./../../img/HomeExtra2.png") },
    ]
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 70 }}>
                    <Image source={require("./../../img/groupImages.png")} style={styles._logo} />
                    <View style={styles._header_main}>
                        <Text style={styles._heading}>NEAR WEMBLEY</Text>
                        <Text style={styles._sub_heading}>Tutors Near You</Text>
                        {/* ===============> <================== */}
                        <View style={styles._input_main}>
                            <AntDesign name="search1" size={24} color="#087556" />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder="Find a Tutor"
                                color="#8F9BB3"
                            />
                        </View>
                    </View>
                    {/* ===============> <================== */}
                    <ImageBackground
                        source={require("./../../img/homebg.png")}
                        style={styles._image}
                    >
                        <HomeCarouselSlider />
                        <View style={{ width: "50%", alignSelf: "center", marginTop: 20, alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 18,fontWeight:"bold" }}>Costain James</Text>
                            <Text style={{ color: "white", fontSize: 12,fontWeight:"bold" }}>Science</Text>
                            <Text style={{ color: "#42A9A6", fontSize: 18,fontWeight:"bold" }}>£ 8.75/hr</Text>
                        </View>
                    </ImageBackground>
                    {/* ===============> <================== */}
                    <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ fontSize: 22 }}>Explore Nearby</Text>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Nearby_Card_Main}>
                            {ExploreNearbyCardData.map((v, i) => {
                                return (
                                    <View style={styles._Explore_Nearby_Card}>
                                        <Image source={v.countryImage} style={styles._home1} />
                                        <View style={{ margin: 20, flexDirection: "row", alignItems: "center" }}>
                                            <Ionicons name="md-location-sharp" size={24} color="#00A89B" />
                                            <Text style={{
                                                fontSize: 18,
                                                marginLeft: 5
                                            }}>{v.countryName}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={styles._Explore_Nearby_Card_Main}>
                            {ExploreNearbyCardData2.map((v, i) => {
                                return (
                                    <View style={styles._Explore_Nearby_Card}>
                                        <Image source={v.countryImage} style={styles._home1} />
                                        <View style={{ margin: 20, flexDirection: "row", alignItems: "center" }}>
                                            <Ionicons name="md-location-sharp" size={24} color="#00A89B" />
                                            <Text style={{
                                                fontSize: 18,
                                                marginLeft: 5
                                            }}>{v.countryName}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18 }}>Explore Different Categories</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <Entypo name="triangle-right" size={20} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 15, color: "#087556" }}>We made learning easy for you</Text>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {Explore_Different_Categories.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home1} />
                                            <View style={{ margin: 10 }}>
                                                <Text style={{ fontSize: 15, color: "#172B4D" }}>{v.title}</Text>
                                                <Text style={{
                                                    fontSize: 8,
                                                    fontWeight: 'bold',
                                                    color: "#B3BAC5",
                                                    letterSpacing: 0.5
                                                }}>{v.des}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18 }}>Subjects</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <Entypo name="triangle-right" size={20} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {Subjects.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home1} />
                                            <View style={{ margin: 10 }}>
                                                <Text style={{ fontSize: 15, color: "#172B4D" }}>{v.title}</Text>
                                                <Text style={{
                                                    fontSize: 8,
                                                    fontWeight: 'bold',
                                                    color: "#B3BAC5",
                                                    letterSpacing: 0.5
                                                }}>{v.des}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Subject Tuitions at Low Price</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <Entypo name="triangle-right" size={20} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {Tuitions_at_Low_Price.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Group Sessions at Low Price</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Group Sessions at Low Price</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Group Sessions at Low Price</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 17, fontWeight: "bold" }}>Leiser Courses by Cities</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {ExploreNearbyCardData.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                                                <Text style={{
                                                    fontSize: 18,
                                                    marginLeft: 5,
                                                    color: "#172B4D"
                                                }}>{v.countryName}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>


                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#172B4D", fontSize: 18, fontWeight: "bold" }}>Leiser Courses</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {LeiserCourses.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles.homeLeiserCourses} />
                                            <View style={{ margin: 10 }}>
                                                <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Get Art & Craft </Text>
                                                <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Courses From  </Text>
                                                <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Professionals Trainer.</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {LeiserCourses.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles.homeLeiserCourses} />
                                            <View style={{ margin: 10 }}>
                                                <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Get Art & Craft </Text>
                                                <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Courses From  </Text>
                                                <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Professionals Trainer.</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                            <TouchableOpacity style={styles._see_all_btn}>
                                <Text style={styles._see_all_btn_txt}>See All</Text>
                            </TouchableOpacity>
                        </View>

                        {/* ===============> <================== */}
                        <View style={{ marginTop: 10, marginBottom: 10, flexDirection: "row" }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={styles._Explore_Nearby_Card_Main}>
                                    {HomeExtra1.map((v, i) => {
                                        return (
                                            <View style={styles._Extra_Card}>
                                                <Image source={v.countryImage} style={styles.HomeExtra} />
                                                <View style={{ margin: 10 }}>
                                                    <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Get Art & Craft </Text>
                                                    <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Courses From  </Text>
                                                    <Text style={{ fontSize: 14, color: "#BEBEBE", fontWeight: "bold" }}>Professionals Trainer.</Text>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>


                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Online Subject Tutors</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>


                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Online Subject Tutors</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>


                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Online Subject Tutors</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>


                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Online Subject Tutors</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>


                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Online Subject Tutors</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>


                        {/* ===============> <================== */}
                        <View style={styles._Explore_Different_Categories_main}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "#BEBEBE", fontSize: 18, fontWeight: "bold" }}>Online Subject Tutors</Text>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#BEBEBE" }}>More</Text>
                                    <EvilIcons name="chevron-right" size={24} color="#BEBEBE" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles._Explore_Nearby_Card_Main}>
                                {SessionsatLowPrice.map((v, i) => {
                                    return (
                                        <View style={styles._Explore_Different_Categories_Card}>
                                            <Image source={v.countryImage} style={styles._home2} />
                                            <View style={{ margin: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Text style={{ fontSize: 15, color: "#172B4D", fontWeight: "bold" }}>{v.title}</Text>
                                                    <EvilIcons name="star" size={24} color="#087556" />
                                                </View>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: "#172B4D",
                                                    letterSpacing: 0.5
                                                }}>{v.name}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 15, color: "#087556" }}>{v.price}</Text>
                                                    <Text style={{ fontSize: 12, color: "#172B4D", marginLeft: 10 }}>Science,Math</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>

                        {/* ===============> <================== */}
                        <TouchableOpacity style={styles._see_all_btn2}>
                            <Text style={styles._see_all_btn2_txt}>See All</Text>
                        </TouchableOpacity>

                    </View>
                    {/* ===============> <================== */}
                    <ImageBackground
                        source={require("./../../img/homebg2.png")}
                        style={styles.homebg2}
                    >
                        <View style={styles._skills_sharing_main}>
                            <Text style={{ fontSize: 15, color: "white", letterSpacing: 0.5, fontWeight: "bold" }}>Your Skills ares Worth Sharing</Text>
                            <TouchableOpacity style={styles._Become_Tutor_btn}>
                                <Text style={styles._Become_Tutor_btn_text}>Become Tutor</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    {/* ===============> <================== */}
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 22, color: "black" }}>Stay Informed</Text>
                        <TouchableOpacity style={styles._button_button}>
                            <AntDesign name="arrowright" size={20} color="#707070" />
                            <View style={styles._button_button_view}>
                                <Text style={styles._button_button_txt}>For students</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._button_button}>
                            <AntDesign name="arrowright" size={20} color="#707070" />
                            <View style={styles._button_button_view}>
                                <Text style={styles._button_button_txt}>How it works learner</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._button_button}>
                            <AntDesign name="arrowright" size={20} color="#707070" />
                            <View style={styles._button_button_view}>
                                <Text style={styles._button_button_txt}>Cancellation Policy</Text>
                                <Text style={{ fontSize: 16, color: "#858585" }}>Learn what’s covered</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._button_button}>
                            <AntDesign name="arrowright" size={20} color="#707070" />
                            <View style={styles._button_button_view}>
                                <Text style={styles._button_button_txt}>Help Center</Text>
                                <Text style={{ fontSize: 16, color: "#858585" }}>Get support</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{marginBottom:70}}></View> */}
                </ScrollView>
            </View>
                {/* ===============> <================== */}
                <View style={styles._tab_nav_main}>
                    <TouchableOpacity style={styles._bottom_tab} onPress={() => props.navigation.navigate("Home")}>
                        <Feather name="home" size={24} color="#FF3480" />
                        <Text style={styles._bottom_tab_txt_active}>Home</Text>
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
                        <SimpleLineIcons name="user" size={24} color="#C5CEE0" />
                        <Text style={styles._bottom_tab_txt}>Profiles</Text>
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
    _logo: {
        marginTop: 30,
        width: 135,
        height: 44,
        marginLeft: 20,
        marginRight: 20,
    },
    _header_main: {
        backgroundColor: "#00A89B",
        marginTop: 40,
        padding: 20,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
    },
    _heading: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    _sub_heading: {
        color: "white",
        fontSize: 17
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        backgroundColor: "white",
        elevation: 3,
        margin: 1,
        height: 56
    },
    input: {
        width: "85%",
        marginLeft: 10,
        color: "#8F9BB3",
        fontSize: 15,
        letterSpacing: 0.5,
    },
    _image: {
        flex: 1,
        resizeMode: "cover",
        height: 350,
        marginTop: -20,
        zIndex: -1,
        // opacity: 0.5
    },
    _Explore_Nearby_Card_Main: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    _Explore_Nearby_Card: {
        backgroundColor: "white",
        elevation: 5,
        width: "45%",
        height: 206,
        borderRadius: 10,
        marginTop: 10
    },
    _home1: {
        width: "100%",
        height: 150,
        borderRadius: 10
    },
    _home2: {
        width: "100%",
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    _Explore_Different_Categories_main: {
        marginTop: 10,
        marginBottom: 10
    },
    _Explore_Different_Categories_Card: {
        backgroundColor: "white",
        elevation: 5,
        width: "48%",
        // height: 206,
        borderRadius: 10,
        marginTop: 10
    },
    homeLeiserCourses: {
        width: "100%",
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    _see_all_btn: {
        backgroundColor: "#FF3480",
        borderRadius: 10,
        alignSelf: "flex-end",
        width: "30%",
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    _see_all_btn_txt: {
        color: "white",
        fontSize: 17
    },
    HomeExtra: {
        width: "100%",
        height: 180,
    },
    _Extra_Card: {
        backgroundColor: "white",
        elevation: 5,
        width: 160,
        // height: 206,
        borderRadius: 10,
        marginTop: 10,
        marginRight: 15
    },
    _see_all_btn2: {
        backgroundColor: "#FF3480",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 10
    },
    _see_all_btn2_txt: {
        color: "white",
        fontSize: 13,
        letterSpacing: 0.5
    },
    homebg2: {
        flex: 1,
        resizeMode: "cover",
        height: 150,
    },
    _skills_sharing_main: {
        width: "30%",
        alignSelf: "flex-end",
        margin: 20,
        marginTop: 50
    },
    _Become_Tutor_btn: {
        backgroundColor: "#00A89B",
        height: 25,
        borderRadius: 5,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 10
    },
    _Become_Tutor_btn_text: {
        color: "white",
        fontSize: 12,
        textAlign: "center"
    },
    _button_button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    _button_button_txt: {
        fontSize: 18,
        color: "black",

    },
    _button_button_view: {
        width: "90%",
        borderBottomColor: "#E1E1E1",
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginLeft: 10
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
