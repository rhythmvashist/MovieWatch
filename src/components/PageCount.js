import React from 'react'
import { Pagination } from '@material-ui/lab';
import './style/PageCount.css'

function PageCount({pageNumber,setPageNumber}) {

    return (
        <div className='page_count'> 
            <Pagination page={pageNumber} onChange ={(event,page)=>setPageNumber(page)} count={1000} on/>   
        </div>
    )
}

export default PageCount

