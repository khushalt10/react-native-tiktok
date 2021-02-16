import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import posts from '../../../data/posts'
import postss from '../../../data/postss'
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import axios from 'axios'

// export default function Home() {

//     let { width } = Dimensions.get("window");
//     let { height } = Dimensions.get("window");
//     const [videos, setVideos] = useState([]);
//     const Axios = axios.create({
//         baseURL: "https://europe-west1-boom-dev-7ad08.cloudfunctions.net/videoFeed",
//     });
    
//     const dataProviderMaker = (data) => (new DataProvider((r1, r2) => r1 !== r2)).cloneWithRows(data)
//     const [dataProvider, setDataProvider] = useState(dataProviderMaker(videos))
    
//     useEffect(() => {
         
//             const fetchData = async () => {
//                 try {
//                     const res = await Axios({
//                         method: 'post',
//                         url: '/',
//                         data: { "page": 0 }
//                       });
                      
//                     setVideos(res.data)

//                 } catch (error) {
//                 console.log(error)   
//                 }}
//                 fetchData()
//                 setDataProvider(dataProviderMaker(videos))

//       }, [])
//       const ViewTypes = {
//           Full: 1
//       }

//     const layoutProvider = new LayoutProvider(() => 1,
//     (type, dim) => {
//                     dim.width = width;
//                     dim.height = height;
        
//     })
    
//     const rowRenderer = (type, video) => {
 
//         return(
//             <Post video={video} />
//         )
//     }

//     const loadNextPage = async () => {
//             const ress = await Axios({
//                 method: 'post',
//                 url: '/',
//                 data: { "page": 1 }
//               });
        
//             setVideos([...videos,ress.data])
//     }

//     return (<>
//             <View style={{minHeight: height, minWidth: width, flex: 1, flexDirection: 'column', }}>
//             {videos.length ? ( <RecyclerListView 
//                 style={{flex: 1, minHeight: height, minWidth: width,}}
//                 layoutProvider={layoutProvider}
//                 dataProvider={dataProvider}
//                 rowRenderer={rowRenderer}
//                 onEndReached={loadNextPage}
//                 scrollViewProps={{
//                     showsVerticalScrollIndicator: false,
//                     snapToInterval: height,
//                     snapToAlignment: 'start',
//                 }}
//             /> ): (<View><Text>....Loading</Text></View>)
          
// }</View>
       
//         </>
        
//     )
// }

export default function Home() {
    
    let { width } = Dimensions.get("window");
    let { height } = Dimensions.get("window");
    const [posta, setPosta] = useState(postss);

    const dataProviderMaker = (data) => (new DataProvider((r1, r2) => r1 !== r2)).cloneWithRows(data)
    const [dataProvider, setDataProvider] = useState(dataProviderMaker(posta))

    const layoutProvider = new LayoutProvider((index) => 1,
    (type, dim) => {
                    dim.width = width;
                    dim.height = height;
        
    })

        const RowRenderer = (type, post) => {
 
        return(
                <Post post={post} />
            )
        }

        const loadNextPage = async () => {
            setPosta([...postss,...posts])
            setDataProvider(dataProviderMaker(posta))
         
            console.warn('Enddd')
        }

    return (
        <>
            {posta.length > 0 ? 
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
   