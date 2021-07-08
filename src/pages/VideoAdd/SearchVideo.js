import React , {useEffect, useState} from 'react';
import PreviewVideo from "./PreviewVideo.js"
import { CircularProgress } from '@material-ui/core';
import { getVideo } from '../../Services/VideoApi.js';


export default function CreatePost() {

  const [preview, setpreview] = useState({})
  const [Url, setUrl] = useState("");
  const [loading, setloading] = useState(false)

  useEffect( () => {
    setloading (true)
    if (Url.length) {
   getVideo(Url).then(({data})=>{
    setpreview(data)
    setloading (false)
   });
  }
  }, [Url])
  
  return (
    <>
      <div
        className='card gedf-card'
        style={{ margin: '14px auto',borderRadius: '20px' }}>
      <div className='card-body'>
          <form id='formP' onSubmit={(e)=>{e.preventDefault();}} noValidate>
            <div className='tab-content' id='myTabContent'>
              <div
              style={{textAlign:'center'}}
                className='tab-pane fade show active'
                id='posts'
                role='tabpanel'
                aria-labelledby='posts-tab'>
                <div className='form-group'>
                <div class="d-flex justify-content-between align-items-center">
          <img alt='zsfs' width="100" style={{marginBottom:"10px"}}src='vimeo.png' />
                <div className='d-flex justify-content-center align-items-center' style={{width: '82%',textAlign:"center",margin:'auto'}} >
                <input
                    required
                    className='form-control'
                    id='message'
                    name='body'
                    placeholder='exemple : https://vimeo.com/556442696'
                    value={Url}
                    onChange={(e)=>{setUrl(e.target.value)}}
                  />
                </div>
                </div>
                </div>
               {loading 
               ? Url.length && <CircularProgress />
               : <PreviewVideo data={preview}/>
                } 
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
        .main-media-options{
          border-top: 1px solid #494b4d;
    border-bottom: 1px solid #494b4d;
    padding: 7px;
        }
        `}
      </style>
    </>
  );
}
