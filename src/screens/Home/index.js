import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'

const post = {
    id: 'p1',
    videoUri: 'https://player.vimeo.com/external/418966971.sd.mp4?s=c296b90fbcd612daeb52447ef814b6ac87e45f98&profile_id=165&oauth2_token_id=57447761',
    user: {
        id: 'u1',
        username: '_khussshal_',
        imageUri: 'https://amazing-brown-d808cb.netlify.app/images/sea.jpg'
    },
    description: 'YEah that\'s the stuff',
    song: 'Bohemian Rhapsody - Queen',
    songImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDf-d5TohDKH-ax8NYZAO5IsFGaU4AOutSLQ&usqp=CAU',
    likes: 123,
    comments: 123,
    shares: 12
}

export default function Home() {
    return (
        <View>
            <Post post={post} />
        </View>
    )
}

const styles = StyleSheet.create({})
   