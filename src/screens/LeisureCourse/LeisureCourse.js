import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from 'react-native';
import ImageSlider from './../../components/ImageSlider/ImageSlider'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Map from './../../components/Map/Map';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import CounterDown from './../../components/CounterDown/CounterDown';
export default function LeisureCourse() {
    let ReviewCardData = [
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile2.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
        { userProfile: require("./../../img/review_profile1.png"), userName: "John deo", reviewTime: "2days ago", reviewDes: "I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in" },
    ]

    let DifferentPageData = [
        { value: "Our tutors" },
        { value: "Our locations" },
        { value: "My other courses" },
        { value: "All reviews" },
    ]

    let SimilarCoursesData = [
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
        { heading: "Similar Courses", bgImg: require("./../../img/SimilarCourses.png"), des: "Holi makersdesigning patters" },
    ]
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      /> */}
            <ScrollView>
                <View>

                    {/* ===============< >=============== */}
                    <ImageSlider />
                    {/* ===============< >=============== */}
                    <View style={styles._share_header_main}>
                        <TouchableOpacity style={styles._search_button}>
                            <Feather name="search" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={styles._share_intrested_main}>
                            <TouchableOpacity style={styles._search_button}>
                                <Entypo name="share" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._search_button}>
                                <AntDesign name="hearto" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* ===============< >=============== */}
                    <View style={{ margin: 0 }}>
                        <Text style={{ fontSize: 17, letterSpacing: 0.5, margin: 20 }}>How to make Maggie: United states</Text>
                        {/* ===============< >=============== */}
                        <View style={styles._slider_star}>
                            <FontAwesome name="star" size={18} color="#FF9D2B" />
                            <Text style={{ fontSize: 15, marginLeft: 10 }}>4.8</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10 }}>(1266 reviews)</Text>
                            <Text style={{ fontSize: 13, color: "#FF3480", marginLeft: 10 }}>Art & Craft-Drawing</Text>
                        </View>
                        {/* ===============< >=============== */}
                        <View style={styles._sequence_main}>
                            <View style={styles._card_circle_main}>
                                <TouchableOpacity style={styles._sequence_buttons}>
                                    <Image source={require("./../../img/education.png")} style={styles._sequence_iocns} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles._empty_line}></Text>
                            <View style={styles._card_circle_main}>
                                <TouchableOpacity style={styles._sequence_buttons}>
                                    <Image source={require("./../../img/calendar.png")} style={styles._sequence_iocns} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles._empty_line}></Text>
                            <View style={styles._card_circle_main}>
                                <TouchableOpacity style={styles._sequence_buttons}>
                                    <Image source={require("./../../img/Weeks.png")} style={styles._sequence_iocns} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles._empty_line}></Text>
                            <View style={styles._card_circle_main}>
                                <TouchableOpacity style={styles._sequence_buttons}>
                                    <Image source={require("./../../img/my-location.png")} style={styles._sequence_iocns} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* ===============< >=============== */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between",width:"90%",alignSelf:"center" }}>
                            <Text style={styles._search_text}>10-20</Text>
                            <Text style={styles._search_text}>Mn - Fr</Text>
                            <Text style={styles._search_text}>15-99</Text>
                            <Text style={styles._search_text}>London</Text>
                        </View>
                        {/* ===============< >=============== */}
                        <View style={styles._CheckavAilability_main}>
                            <View style={styles._CheckavAilability_header}>
                                <View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Image source={require("./../../img/CheckavailabilityIcon.png")} style={styles.CheckavailabilityIcon} />
                                        <Text style={{ color: "#00A89B", fontSize: 20 }}>£23.00</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Rating
                                            showRating
                                            //   onFinishRating={this.ratingCompleted}
                                            showRating={false}
                                            type='star'
                                            ratingCount={5}
                                            imageSize={10}
                                        />
                                        <Text style={{ fontSize: 10, paddingLeft: 5 }}>112</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles._CheckavAilability_button}>
                                    <Text style={styles._CheckavAilability_button_text}>Check availability</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <CounterDown />
                            </View>
                            <TouchableOpacity style={styles._play}>
                                <FontAwesome name="play-circle" size={50} color="#00A89B" />
                            </TouchableOpacity>
                        </View>
                        {/* ===============< >=============== */}
                        <View>
                            <Text style={styles._about_course_heading}>About Course</Text>
                            <Text style={styles._about_course_des}>
                                About Course - Add this TEXT : ***** and welcome. My name is Claire and I own Couchman Bespoke an ethical tailoring company based in London, UK.{"\n"}{"\n"}

                                Learn to make a garment with a tailor, for a garment that fits like a dream.{"\n"}{"\n"}

                                This course is to learn how to make a garment from paper pattern to cloth. Cloth can be purchased via Organic Textile Company or remnant sources via Amo Threads, The New Craft House. Bring a readiness to learn and maybe a note book.{"\n"}{"\n"}

                                You will be learning techniques that align with your abilities. We will begin with copying the garment on paper and build up to making it in cloth. We can make from a pre-made pattern{"\n"}{"\n"}

                                Be aware that this course length is based on a fairly simple garment style. For any garment with layers, corset style or a jacket, coat etc, double the time will be required to complete.{"\n"}{"\n"}

                                Again if the garment is more complicated with layers, corset style or a jacket, coat etc; please book for 12+ hours.{"\n"}{"\n"}

                                As a business for **** we collect donations for our Pay It Forward scheme to allow for people unable to afford for classes. Pay It Forward [here](https://www.couchman-bespoke.com/product-page/buy-1-sewing-lesson-forward).
                            </Text>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._images_group_main}>
                            <View style={styles._images_gallery_main}>
                                <View style={styles._images_gallery_first_column}>
                                    <Image source={require("./../../img/image1.png")} style={styles.gallery_image1} />
                                </View>
                                <View style={styles._images_gallery_second_column}>
                                    <Image source={require("./../../img/image2.png")} style={styles.gallery_image2} />
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
                                        <Image source={require("./../../img/image3.png")} style={styles.gallery_image3} />
                                        <Image source={require("./../../img/image4.png")} style={styles.gallery_image3} />
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles._show_all_photos_btn}>
                                <Text style={styles._show_all_photos_btn_text}>Show all photos</Text>
                            </TouchableOpacity>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._course_requirement}>
                            <Text style={styles._course_requirement_heading}>Course requirements</Text>
                            <Text style={styles._course_requirement_des}>No requirements. Anyone can do this course</Text>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._short_link_main}>
                            <Text style={styles._short_link_title}>Shortlink: </Text>
                            <Text style={styles._short_link}>http://tinyurl.com/hm8kcog</Text>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._Cancellation_main}>
                            <Text style={styles._Cancellation_heading}>Cancellation</Text>
                            <Text style={styles._Rigid}>Rigid</Text>
                            <Text style={styles._Cancellation_des}>Full refund 15 days before class starts except Administration fees.</Text>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._review_main}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={styles._review_card_main}>
                                    {ReviewCardData.map((v, i) => {
                                        return (
                                            <View style={styles._review_card}>
                                                <View style={styles._review_user_profile}>
                                                    <Image source={v.userProfile} style={styles._review_profile} />
                                                </View>
                                                <View style={styles._review_user_des}>
                                                    <Text style={styles._review_user_name}>{v.userName}</Text>
                                                    <Text style={styles._review_time}>{v.reviewTime}</Text>
                                                    <Text style={styles._review_des}>{v.reviewDes}
                                                        <Text style={styles._read_more_btn}>...read more</Text>
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </ScrollView>

                            <TouchableOpacity style={styles._show_all_review_btn}>
                                <Text style={styles._show_all_review_btn_text}>Show all 305 reviews </Text>
                            </TouchableOpacity>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._member_card_main}>
                            <View style={styles._member_header_main}>
                                <View style={styles._member_header_profile}>
                                    <Image source={require("./../../img/memberprofile.png")} style={styles._member_profile} />
                                </View>
                                <View style={styles._member_header_heading_main}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{ fontSize: 16, color: "#000000", fontWeight: 'bold', marginTop: 10 }}>Meet you tutor</Text>
                                        <Text style={{ fontSize: 16, color: "#FF3480", fontWeight: 'bold', paddingLeft: 5, marginTop: 10 }}>John deo</Text>
                                    </View>
                                    <Text style={{ color: "#BEBEBE", fontSize: 15 }}>Member since Jan 2015</Text>
                                </View>
                                <View style={styles._member_header_beg}>
                                    <Image source={require("./../../img/bronze1.png")} style={styles.bronze1_Img} />
                                </View>
                            </View>
                            <View>
                                <View style={styles._member_response_main}>
                                    <Text style={styles._member_response_heading}>Response rate:</Text>
                                    <Text style={styles._member_response_rate}>100%</Text>
                                </View>
                                <View style={styles._member_response_main}>
                                    <Text style={styles._member_response_heading}>Response time:</Text>
                                    <Text style={styles._member_response_rate}>within an hour</Text>
                                </View>
                                <View style={styles._member_response_main}>
                                    <Text style={styles._member_response_heading}>Course Last updated on:</Text>
                                    <Text style={styles._member_response_rate}>2 August 2016</Text>
                                </View>
                            </View>
                            <Text style={styles._about_members_des}>About John</Text>
                            <Text style={styles._about_members_des}>This bitesize class is great way to dip into the subject. It might be the only time you take this course or it can help you decide if you book onto a longer course. It gives you the chance to talk with the tutor and also see our lovely facilities.more...  </Text>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._verification_main}>
                            <View style={styles._verification_row}>
                                <View style={styles._verification_heading_icons}>
                                    <Ionicons name="map" size={20} color="#00A89B" />
                                </View>
                                <View style={styles._verification_heading_main}>
                                    <Text style={styles._verification_heading}>E-mail</Text>
                                </View>
                                <View style={styles._verification_status_icon}>
                                    <Ionicons name="checkmark-circle-sharp" size={24} color="#00A89B" />
                                </View>
                                <View style={styles._verification_empty}></View>
                                <View style={styles._verification_heading_icons}>
                                    <AntDesign name="mobile1" size={20} color="#00A89B" />
                                </View>
                                <View style={styles._verification_heading_main}>
                                    <Text style={styles._verification_heading}>Mobile</Text>
                                </View>
                                <View style={styles._verification_status_icon}>
                                    <Ionicons name="checkmark-circle-sharp" size={24} color="#00A89B" />
                                </View>
                            </View>

                            <View style={styles._verification_row}>
                                <View style={styles._verification_heading_icons}>
                                    <Ionicons name="call" size={20} color="#00A89B" />
                                </View>
                                <View style={styles._verification_heading_main}>
                                    <Text style={styles._verification_heading}>Landline</Text>
                                </View>
                                <View style={styles._verification_status_icon}>
                                    <AntDesign name="closecircle" size={24} color="#FF3480" />
                                </View>
                                <View style={styles._verification_empty}></View>
                                <View style={styles._verification_heading_icons}>
                                    <FontAwesome name="play" size={20} color="#00A89B" />
                                </View>
                                <View style={styles._verification_heading_main}>
                                    <Text style={styles._verification_heading}>Social Media</Text>
                                </View>
                                <View style={styles._verification_status_icon}>
                                    <AntDesign name="closecircle" size={24} color="#FF3480" />
                                </View>
                            </View>

                            <View style={styles._verification_row}>
                                <View style={styles._verification_heading_icons}>
                                    <Ionicons name="ios-location" size={20} color="#00A89B" />
                                </View>
                                <View style={styles._verification_heading_main}>
                                    <Text style={styles._verification_heading}>Address</Text>
                                </View>
                                <View style={styles._verification_status_icon}>
                                    <AntDesign name="closecircle" size={24} color="#FF3480" />
                                </View>
                                <View style={styles._verification_empty}></View>
                                <View style={styles._verification_heading_icons}>
                                    <FontAwesome5 name="credit-card" size={18} color="#00A89B" />
                                </View>
                                <View style={styles._verification_heading_main}>
                                    <Text style={styles._verification_heading}>Credit card</Text>
                                </View>
                                <View style={styles._verification_status_icon}>
                                    <Ionicons name="checkmark-circle-sharp" size={24} color="#00A89B" />
                                </View>
                            </View>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles.Certifications_main}>
                            <Text style={styles._Certifications_heading}>Certifications</Text>
                            <Text style={styles._Certifications_des}>Dance teaching practice and innovations Ballromm Certificate dance teaching society</Text>
                        </View>
                        <View style={styles.Certifications_main}>
                            <Text style={styles._Certifications_heading}>Certifications</Text>
                            <Text style={styles._Certifications_des}>Dance teaching practice and innovations Ballromm Certificate dance teaching society</Text>
                        </View>

                        {/* ===============< >=============== */}
                        <View style={styles._send_message_main}>
                            <TouchableOpacity style={styles._send_message_btn}>
                                <MaterialCommunityIcons name="message-text-outline" size={24} color="white" />
                                <Text style={styles._send_message_text}>SEND A MESSAGE</Text>
                            </TouchableOpacity>
                        </View>

                        {/* ===============< >=============== */}

                        <View style={styles._map_main}>
                            <Map />
                        </View>
                        {/* ===============< >=============== */}
                        <View style={styles._SimilarCourses_main}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={styles._SimilarCourses_card_main}>
                                    {SimilarCoursesData.map((v, i) => {
                                        return (
                                            <View style={styles._SimilarCourses_card}>
                                                <Text style={styles._SimilarCourses_heading}>{v.heading}</Text>
                                                <ImageBackground
                                                    source={v.bgImg}
                                                    style={styles._image}
                                                >
                                                    <TouchableOpacity style={styles._add_to_chart_button}>
                                                        <AntDesign name="hearto" size={20} color="white" />
                                                    </TouchableOpacity>
                                                </ImageBackground>
                                                <Text style={styles._SimilarCourses_des}>{v.des}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>From</Text>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: "#00A89B", marginLeft: 10 }}>$66</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <FontAwesome name="star" size={13} color="#000000" />
                                                    <Text style={{ fontSize: 15, marginLeft: 2 }}>4.84</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 2, color: "#989898" }}>(45)</Text>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                        {/* ===============< >=============== */}
                        <View style={styles._different_pages_navigation}>
                            {DifferentPageData.map((v, i) => {
                                return (
                                    <TouchableOpacity style={styles._different_pages_button}>
                                        <Text style={styles._different_pages_button_text}>{v.value}</Text>
                                        <Entypo name="chevron-small-right" size={24} color="#515151" />
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // ===========< >===========
    _share_header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        margin: 20,
        width: "90%",
        alignSelf: "center",
        marginTop: 30
    },
    _search_button: {
        backgroundColor: "#00A89B",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    _share_intrested_main: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    // ===========< >===========
    _slider_star: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20
    },

    // ===========< >===========
    _sequence_buttons: {
        backgroundColor: "#E0F5F3",
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _sequence_iocns: {
        width: 21,
        height: 21
    },
    _empty_line: {
        // width: "13%",
        height: 3,
        backgroundColor: "#00A89B",
        flex: 1
    },
    _sequence_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        width: "90%",
        alignSelf: "center",

    },

    // ===========< >===========
    _search_text: {
        color: "#677294",
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 10,
        marginLeft: 10
    },
    _card_circle_main: {
        // width: "15%"
    },
    // ===========< >===========
    _about_course_heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20

    },
    _about_course_des: {
        color: "#707070",
        fontSize: 16,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
    // ===========< >===========
    _images_group_main: {
        marginTop: 30
    },
    _show_all_photos_btn: {
        backgroundColor: "#FF3480",
        width: "90%",
        alignSelf: "center",
        borderRadius: 5
    },
    _show_all_photos_btn_text: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 12,
        paddingTop: 10
    },
    _images_gallery_main: {
        margin: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _images_gallery_first_column: {
        width: "48%",
    },
    _images_gallery_second_column: {
        width: "48%",
    },
    gallery_image1: {
        width: "100%",
        height: 196
    },
    gallery_image2: {
        width: "100%",
        height: 125
    },
    gallery_image3: {
        width: "48%",
        height: 60
    },
    // ===========< >===========
    _course_requirement: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    _course_requirement_heading: {
        fontSize: 20,
        fontWeight: "bold"
    },
    _course_requirement_des: {
        fontSize: 15,
    },

    // ===========< >===========
    _short_link_main: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20
    },
    _short_link_title: {
        fontSize: 13,
        color: "#00A89B",
        marginRight: 20
    },
    _short_link: {
        fontSize: 13,
        color: "#707070"
    },

    // ===========< >===========
    _Cancellation_main: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    _Cancellation_heading: {
        fontSize: 20,
        fontWeight: "bold",
    },
    _Rigid: {
        fontSize: 15,
        color: "#00A89B",
        fontWeight: "bold",
        letterSpacing: 1,
        marginTop: 5
    },
    _Cancellation_des: {
        fontSize: 13,
        textTransform: "uppercase",
        marginTop: 5
    },

    // ===========< >===========
    _review_main: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    _review_card_main: {
        width: "100%",
        flexDirection: "row"

    },
    _review_card: {
        backgroundColor: "#E4E4E4",
        width: 270,
        marginRight: 10,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
    },
    _review_user_profile: {
        width: "25%",
    },
    _review_profile: {
        width: 54,
        height: 54,
        borderRadius: 54 / 2
    },
    _review_user_des: {
        width: "75%",
    },
    _review_user_name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00A89B"
    },
    _review_time: {
        fontSize: 13,
        color: "#BEBEBE",
        fontWeight: "bold",
        paddingLeft: 5
    },
    _review_des: {
        fontSize: 13,
        color: "#BEBEBE",
        fontWeight: "bold",
        marginBottom: 10,
        alignItems: "center"
    },
    _read_more_btn: {
        fontSize: 13,
        color: "#BEBEBE",
        fontWeight: "bold",
        alignItems: "center"
    },
    _show_all_review_btn: {
        backgroundColor: "#00A89B",
        width: "90%",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 30
    },
    _show_all_review_btn_text: {
        color: "black",
        fontSize: 17,
        textAlign: "center",
        paddingBottom: 12,
        paddingTop: 10
    },

    // ===========< >===========
    _different_pages_navigation: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    _different_pages_button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        elevation: 2,
        borderRadius: 10,
        padding: 10,
        marginTop: 20
    },
    _different_pages_button_text: {
        fontSize: 18,
        color: "#515151"
    },

    // ===========< >===========
    _SimilarCourses_main: {
        marginTop: 20,
        backgroundColor: "white",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginLeft: 20,
    },
    _SimilarCourses_card_main: {
        flexDirection: "row",
    },
    _SimilarCourses_card: {
        width: 160,
        marginRight: 15,
        borderRadius: 5,
    },
    _SimilarCourses_heading: {
        fontSize: 20,
        color: "black",
        letterSpacing: 0.5,
        marginBottom: 20
    },
    _image: {
        flex: 1,
        resizeMode: "cover",
        width: 160,
        height: 211,
        borderRadius: 10
    },
    _add_to_chart_button: {
        backgroundColor: "#00A89B",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        alignSelf: 'flex-end',
        marginTop: 10
    },
    _SimilarCourses_des: {
        fontSize: 11,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },

    // ===========< >===========
    _map_main: {
        height: 242,
        marginTop: 30,
        width: "100%"
    },

    // ===========< >===========
    _member_card_main: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10
    },
    _member_header_main: {
        flexDirection: "row",
    },
    _member_header_profile: {
        width: "20%"
    },
    _member_header_heading_main: {
        width: "50%"
    },
    _member_header_beg: {
        width: "30%",
    },
    _member_profile: {
        width: 61,
        height: 61,
        borderRadius: 61 / 2
    },
    bronze1_Img: {
        width: 90,
        height: 70,
    },
    _member_response_main: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center"
    },
    _member_response_heading: {
        fontSize: 16,
        color: "#000000",
        letterSpacing: 0.5
    },
    _member_response_rate: {
        fontSize: 16,
        color: "#00A89B",
        marginLeft: 10
    },
    _about_members_des: {
        color: "#707070",
        fontSize: 16,
        marginTop: 10,
    },

    // ===========< >===========
    _verification_main: {
        margin: 20
    },
    _verification_row: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: 30
    },
    _verification_heading_icons: {
        width: "10%",
        backgroundColor: "white",
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5
    },
    _verification_empty: {
        width: "4%"
    },
    _verification_heading_main: {
        width: "28%",
    },
    _verification_status_icon: {
        width: "10%"
    },
    _verification_heading: {
        fontSize: 16,
        color: "#969498",
        fontWeight: 'bold',
        paddingLeft: 5
    },

    // ===========< >===========
    Certifications_main: {
        margin: 20
    },
    _Certifications_heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#00A89B"
    },
    _Certifications_des: {
        color: 12,
        color: "#BEBEBE"
    },

    // ===========< >===========
    _send_message_main: {
        marginTop: 30
    },
    _send_message_btn: {
        backgroundColor: "#FF3480",
        width: "90%",
        alignSelf: "center",
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    _send_message_text: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 12,
        paddingTop: 10,
        paddingLeft: 10
    },

    // ===========< >===========
    _CheckavAilability_main: {
        margin: 20,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 10,
        padding: 20,
    },
    _CheckavAilability_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _CheckavAilability_button: {
        backgroundColor: "#00A89B",
        borderRadius: 10,
        width: "40%"
    },
    _CheckavAilability_button_text: {
        fontSize: 11,
        color: "white",
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    CheckavailabilityIcon: {
        width: 20,
        height: 18,
        marginRight: 5
    },
    _play: {
        alignSelf: "center",
        marginBottom: -45,
        // marginBottom:0,
    }
});
