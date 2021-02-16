import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import posts from '../../../data/posts'
import postss from '../../../data/postss'
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import axios from 'axios'

export default function Home() {
    
    let { width } = Dimensions.get("window");
    let { height } = Dimensions.get("window");
    const [posta, setPosta] = useState(postss);
    const [videos, setVideos] = useState([])

    const dataProviderMaker = (data) => (new DataProvider((r1, r2) => r1 !== r2)).cloneWithRows(data)
   
    const Axios = axios.create({
                baseURL: "https://europe-west1-boom-dev-7ad08.cloudfunctions.net/videoFeed",
            });
            
    useEffect(() => {
        const fetchData = async() => {
            const res = await Axios({
                method: 'POST',
                url: '/',
                data: {"page": 0},
            });

            setVideos(res.data)
        }
        fetchData()
        setDataProvider(dataProviderMaker(videos))
    },[])
    const [dataProvider, setDataProvider] = useState(dataProviderMaker(videos))
    const layoutProvider = new LayoutProvider((index) => 1,
    (type, dim) => {
                    dim.width = width;
                    dim.height = height;
        
    })

        const RowRenderer = (type, video) => {
 
        return(
                <Post video={video} />
            )
        }

        const loadNextPage = async () => {
            if(videos.length < 12) {
                const ress = await Axios({
                                    method: 'post',
                                    url: '/',
                                    data: { "page": 1 }
                                  });
                            
                                setVideos([...videos,...ress.data])
                                setDataProvider(dataProviderMaker(videos))
            }
                            console.log(videos)
        }

    return (
        <>
            {videos.length > 0 ? 
                (<View>
                    <RecyclerListView
                        style={{flex: 1, minHeight: height, minWidth: width,}}
                        layoutProvider={layoutProvider}
                        dataProvider={dataProvider}
                        rowRenderer={RowRenderer}
                        onEndReached={loadNextPage}
                        onEndReachedThreshold={10}
                        scrollViewProps={{
                            showsVerticalScrollIndicator: false,
                            snapToInterval: height,
                            snapToAlignment: 'start',
                        }}
                    />
                </View>):(
                    <View>
                        <Text>Loading...</Text>
                    </View>
                )}  
        </>
    )
}

const styles = StyleSheet.create({})
   