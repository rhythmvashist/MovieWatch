import React from 'react'
import { Pagination } from '@material-ui/lab';
import './style/PageCount.css'

function PageCount({pageNumber,setPageNumber}) {

    const  setPageNumer =(event,page)=> {
        event.preventDefault();
        console.log(page)
        setPageNumber(page);  
    } 

    function onChangePage(event,page){
        setPageNumber(page);
    }

    return (
        <div className='page_count'> 
            <Pagination page={pageNumber} onChange ={onChangePage} count={1000} on/>   
        </div>
    )
}

export default PageCount

