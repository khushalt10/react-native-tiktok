import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Video from 'react-native-video'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function Post () {

    const [paused, setPaused] = useState(false)
    const onPlayPause = () => {
        setPaused(!paused)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPause}>
                <Video 
                    source={{ uri: "https://player.vimeo.com/external/418966971.sd.mp4?s=c296b90fbcd612daeb52447ef814b6ac87e45f98&profile_id=165&oauth2_token_id=57447761"}}
                    style={styles.vid}
                    resizeMode={'cover'}
                    onError={(e) => console.log(e)}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>

            <View style={styles.info}>
                <View style={styles.right}>
                        <Image style={styles.profilePicture} source={{uri: 'https://amazing-brown-d808cb.netlify.app/images/sea.jpg'}} />
                
                        <View style={styles.iconContainer}>
                            <Entypo name={'heart'} size={40} color={"white"} />
                            <Text style={styles.statsLabel}>23</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <FontAwesome name={'commenting'} size={40} color={"white"} />
                            <Text style={styles.statsLabel}>23</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Fontisto name={'share-a'} size={33} color={"white"} />
                            <Text style={styles.statsLabel}>23</Text>
                        </View>
                </View>

                <View style={styles.bottom}>
                    <View>
                        <Text style={styles.handle}>@_khussshal_✔</Text>
                        <Text style={styles.description}>YEah, that's the stuff!</Text>

                        <View style={styles.songRow}>
                            <Entypo name={'beamed-note'} size={24} color={"white"} />
                            <Text style={styles.songName}>Bohemian Rhapsody - Queens</Text>
                        </View>
                    </View>

                    <Image style={styles.songImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDf-d5TohDKH-ax8NYZAO5IsFGaU4AOutSLQ&usqp=CAU"}} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '100',
        marginBottom: 10
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10
    },
    iconContainer: {
        alignItems: 'center'
    },
    info:{
        height: Dimensions.get('window').height - 40,
        justifyContent: 'flex-end',
        marginRight: 10
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    right: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between'
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#4c4c4c'
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5
    },
    vid:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },

})
