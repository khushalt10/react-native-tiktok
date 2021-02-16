import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Video from 'react-native-video'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import axios from 'axios'

export default function Post (props) {

    const [paused, setPaused] = useState(false)
    // const [post, setPost] = useState(props.post)
    const [isLiked, setIsLiked] = useState(false)
    const [videos, setVideos] = useState([]);
    const onPlayPause = () => {
        setPaused(!paused)
    }
    
    const onLikePress = () => {
        // const liksToAdd = isLiked ? -1 : 1;
        // setPost({
        //     ...post,
        //     likes: post.likes + liksToAdd
        // })
        setIsLiked(!isLiked)
    }
 

    return (
        <>
        {props.video ? (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPause} >
              
                <Video 
                    source={{ uri: props.video.playbackUrl}}
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
                
                        <TouchableOpacity onPress={onLikePress} style={styles.iconContainer}>
                            <Entypo name={'heart'} size={40} color={isLiked ? "red" : "white"} />
                            <Text style={styles.statsLabel}>123</Text>
                        </TouchableOpacity>

                        <View style={styles.iconContainer}>
                            <FontAwesome name={'commenting'} size={40} color={"white"} />
                            <Text style={styles.statsLabel}>112</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Fontisto name={'share-a'} size={33} color={"white"} />
                            <Text style={styles.statsLabel}>12</Text>
                        </View>
                </View>

                <View style={styles.bottom}>
                    <View>
                        <Text style={styles.handle}>@_khussshal_✔</Text>
                        <Text style={styles.description}>YEah that's the stuff</Text>

                        <View style={styles.songRow}>
                            <Entypo name={'beamed-note'} size={24} color={"white"} />
                            <Text style={styles.songName}>Cardigan - Taylor Swift</Text>
                        </View>
                    </View>

                    <Image style={styles.songImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAlfohLWJgqES6PoqdkhSOpLgAEwxpglNTA&usqp=CAU'}} />
                </View>
            </View>
        </View>

        ): (<View></View>)}
        </>
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
