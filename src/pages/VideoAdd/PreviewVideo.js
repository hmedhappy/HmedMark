import React from 'react'
import Button from '@material-ui/core/Button';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import notify from '../../Utils/Notifier';

export default function ImagePreview({data,setVideos}) {

    const {author_name,provider_url,title,html,video_id:_id} = data ; 

    const addToList = () => {
        const old = JSON.parse(localStorage.getItem('listVid') || "[]") ;
        if (old.some(e=>e.video_id===_id)) {
            notify('Deja Existant',0,3000)
        }else{
            localStorage.setItem("listVid",JSON.stringify([data,...old]))
            notify('Video Ajouté',1,2000)
        }
    }

    const removeToList = () => {
     const old = JSON.parse(localStorage.getItem('listVid') || "[]") ;
     localStorage.setItem("listVid",JSON.stringify(old.filter(e=>e.video_id!==_id)))
     setVideos(old.filter(e=>e.video_id!==_id));
     notify('Video Supprimé',1)
 }
       
    return (
        <>
{ provider_url && <div class="card gedf-card" style={{margin: '10px 0px',borderRadius: '20px'}}>

<div class="card-header" style={{borderBottom: '1px solid #494b4d',backgroundColor:'#18191a',borderRadius:'20px 20px 0px 0px'}}>
    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
            <div class="mr-2">
                <img alt="phto" class="rounded-circle" width="45" src={"https://seeklogo.com/images/V/vimeo-icon-logo-441934AEB1-seeklogo.com.png"}/>
            </div>
            <div class="ml-2">
                <div class="h5 m-0">{title}</div>
                <div class="h7 text-muted">{author_name}</div>
            </div>
        </div>
        {window.location.pathname === "/Listvideo"
        ?<Button onClick={()=>removeToList()}  className="photo-add" startIcon={<HighlightOffIcon style={{color:'red',fontSize:"35px"}}/>} ></Button>
        :<Button onClick={()=>addToList()} className="photo-add" startIcon={<VideoCallIcon style={{color:'white',fontSize:"25px"}}/>} ></Button>

        }

    </div>
</div>

<div class="card-body d-flex flex-column" style={{padding:"0",backgroundColor: '#18191a',borderRadius: '0px 0px 20px 20px'}}>
<div className="Container" dangerouslySetInnerHTML={{__html: html}}></div>

</div>
</div>}
<style jsx>
    {`
    iframe{
    width: -webkit-fill-available !important;
    }
    `}
</style>
</>
    )
}
