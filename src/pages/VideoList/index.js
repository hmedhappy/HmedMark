import React, { useEffect, useState } from 'react'
import PreviewVideo from '../VideoAdd/PreviewVideo'

export default function Index() {
    const [listVideos, setVideos] = useState([])
    useEffect(() => {
       if (localStorage.getItem('listVid')) {
       const videos =  JSON.parse(localStorage.getItem('listVid'));
       setVideos(videos)
       }
    }, [])
    return (
        <div>
            {listVideos.length 
            ? <>
            <div

style={{textAlign:'center',width:'50%',margin:'auto'}}
  className='tab-pane fade show active heyy'
  id='posts'
  role='tabpanel'
  aria-labelledby='posts-tab'>
              {listVideos.map(e=><PreviewVideo data={e} setVideos={setVideos}/>)}

</div>
            </>
            : <h1>List Vide</h1>}
        </div>
    )
}
