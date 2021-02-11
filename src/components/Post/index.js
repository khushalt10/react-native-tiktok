import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Video from 'react-native-video'

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    vid:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },

})
