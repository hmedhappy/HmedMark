import React, { useEffect, useState } from 'react'
import PreviewImage from '../ImageAdd/PreviewImage'

export default function Index() {
    const [listImages, setImages] = useState([]) ;
    useEffect(() => {
       if (localStorage.getItem('listphot')) {
       const images =  JSON.parse(localStorage.getItem('listphot'));
       setImages(images)
       }
    }, [])
    return (
        <div>
            {listImages.length 
            ? 
            <div className="single-see">
            <div

              style={{textAlign:'center',width:'30%',margin:'auto'}}
                className='tab-pane fade show active heyy'
                id='posts'
                role='tabpanel'
                aria-labelledby='posts-tab'>
                            {listImages.map(e=><PreviewImage data={e} setImages={setImages}/>)}

              </div>
            
            </div>
            : <p>List Vide...</p>}
        </div>
    )
}
