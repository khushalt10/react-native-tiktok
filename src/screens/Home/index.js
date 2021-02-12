import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import posts from '../../../data/posts'
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

export default function Home() {

    let { width } = Dimensions.get("window");
    let { height } = Dimensions.get("window");
    const dataProviderMaker = (data) => (new DataProvider((r1, r2) => r1 !== r2)).cloneWithRows(data)
    const [dataProvider, setDataProvider] = useState(dataProviderMaker(posts))
    
    useEffect(() => {
        setDataProvider(dataProviderMaker(posts))
      }, [posts])

    const layoutProvider = new LayoutProvider(() => 0
    , (type, dim) => {
                dim.width = width;
                dim.height = height;
    })
    
    const rowRenderer = (type, post) => {
        const { user, song, songName, likes, description} = post;
        return(
            <Post post={post} />
        )
    }

    return (
        <View style={{minHeight: height, minWidth: width, flex: 1, flexDirection: 'column', }}>
            <RecyclerListView 
                // style={{flex: 1}}
                rowRenderer={rowRenderer}
                dataProvider={dataProvider}
                layoutProvider={layoutProvider}
                scrollViewProps={{
                    showsVerticalScrollIndicator: false,
                    snapToInterval: height,
                    snapToAlignment: 'start',
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
   