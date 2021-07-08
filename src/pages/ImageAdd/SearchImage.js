import React , {useEffect, useState} from 'react';
import PreviewImage from "./PreviewImage.js"
import { CircularProgress } from '@material-ui/core';
import PaginationTable from '../../Utils/Pagination';
import { getImage } from '../../Services/PhotoApi.js';



export default function CreatePost() {

  const [result, setresult] = useState([])
  const [search, setsearch] = useState("flower");
  const [loading, setloading] = useState(false) ;
  const [paginationData, setpaginationData] = useState({});
  const [currentPage, setcurrentPage] = useState(1)

  useEffect( () => {
    setloading (true);
    if (search?.length >= 3) {

    getImage(search,currentPage)?.then(({data})=>{
      const { photos , stat} = data ;
      if (stat==="ok") {
        const { page , pages , perpage , total , photo} = photos ;
        setpaginationData({page , pages , perpage , total})
       setresult(photo);
      }
     setloading (false)
    })
  }


  //  api_key: "419ec9b959abbb57a1aa8a3a13ed1a70",
  //   secret:"4be73363300c672b"
  
  }, [search,currentPage])
  
  const handleChange = (event, value) => {
    setcurrentPage(value);
  };


 
  return (
    <>
      <div
        className='card gedf-card'
        style={{ margin: '14px auto',borderRadius: '20px' }}>
      <div className='card-body'>
            <div className='tab-content' id='myTabContent'>
          <form id='formP' onSubmit={(e)=>{e.preventDefault();}} noValidate>
          <div className='form-group'>
                <div class="d-flex justify-content-between align-items-center">
            <img alt='ss' width="100" style={{marginRight:"10px"}}src='flicker.png' />
                <div className='d-flex justify-content-center align-items-center' style={{width: '100%',margin:'auto',textAlign:"center"}} >
                <input
                    required
                    className='form-control'
                    id='message'
                    name='body'
                    placeholder='exemple : Flower.. - Baby..'
                    onChange={(e)=>{setsearch(e.target.value)}}
                  />

                </div>
                </div>
                </div>
                </form>
                <div className='result-info d-flex justify-content-center align-items-center'>
                  <h4> {paginationData.total} {' photos trouvées :'}</h4>
                <PaginationTable
                color='standard'
               itemsPerPage={12}
               totalItems={paginationData?.pages}
               handleChange={handleChange}
               currentPage={paginationData?.page}
               />

                </div>
              <div
              style={{textAlign:'center'}}
                className='tab-pane fade show active heyy'
                id='posts'
                role='tabpanel'
                aria-labelledby='posts-tab'>
               {loading 
               ? search.length && <CircularProgress />
               : 
               <>
               
               {result.map(e=><PreviewImage data={e}/>)}
               
               </>
                } 
              </div>
           
            </div>
        </div>
      </div>
      <style jsx>
        {`
        .main-media-options{
          border-top: 1px solid #494b4d;
    border-bottom: 1px solid #494b4d;
    padding: 7px;
        }
        .heyy{
          display: grid !important;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(3, 400px);
  place-content: center;

        }

        .MuiPaginationItem-root{
          color:white !important ;
        }
        `}
      </style>
    </>
  );
}
