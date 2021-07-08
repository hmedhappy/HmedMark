import React from 'react'
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import notify from '../../Utils/Notifier';

export default function ImagePreview({data,setImages}) {

    const { farm ,server,id,secret} = data
    const urlimage = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

       const addToList = () => {
           const old = JSON.parse(localStorage.getItem('listphot') || "[]") ;
           if (old.some(e=>e.id===id)) {
               notify('Deja Existant',0,3000)
           }else{
               localStorage.setItem("listphot",JSON.stringify([data,...old]))
               notify('Photo Ajoutée',1,2000)

           }
       }

       const removeToList = () => {
        const old = JSON.parse(localStorage.getItem('listphot') || "[]") ;
        localStorage.setItem("listphot",JSON.stringify(old.filter(e=>e.id!==id)))
        setImages(old.filter(e=>e.id!==id));
        notify('Photo Supprimé',1)

    }
    return (
        <>
{ urlimage && 
<div id={id} class="card gedf-card" style={{margin: '10px 0px',borderRadius: '20px',padding:"10px"}}>
<div class="card-body d-flex flex-column" style={{padding:"0",backgroundColor: '#18191a',borderRadius: '0px 0px 20px 20px'}}>
<img alt={id} src={urlimage} style={{width :'-webkit-fill-available !important',height:"-webkit-fill-available"}}/>
{window.location.pathname === "/Listimage" 
? <Button onClick={()=>removeToList()} className="photo-add" startIcon={<HighlightOffIcon style={{color:'red',fontSize:"35px"}}/>} style={{position: 'absolute',bottom:'5% !important',right: '0% !important'}}></Button>
 
: <Button onClick={()=>addToList()} className="photo-add" startIcon={<AddAPhotoIcon style={{color:'white',fontSize:"25px"}}/>} style={{position: 'absolute',bottom:'5% !important',right: '0% !important'}}></Button>
}
</div>
</div>}
</>
    )
}
