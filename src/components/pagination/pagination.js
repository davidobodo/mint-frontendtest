import React from 'react';
import styled from 'styled-components';

const PaginationConatainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    h3{
        font-size: 13px;
    }

    .pages{
        border: 1px solid #CED0DA;
        padding: 10px 0;
        border-radius: 2px;
    }

    span{
        padding: 10px;
        border-right: 1px solid #CED0DA;
        
        &:last-child{
            border-right: none;
        }
    }

    .number{
        opacity: 0.4;
    }

    .active{
        color: #ffffff;
        background-color: #1875F0;
        border: 1px solid #1875F0;
        opacity: 1 !important;
    }

   
`;

const Pagination = () => {
    return (
        <PaginationConatainer>
            <h3>Showing 1 to 10 of 500 entries</h3>
            <div className='pages'>
                <span>Previous</span>
                <span className='active number'>1</span>
                <span className='number'>2</span>
                <span>Next</span>
            </div>
        </PaginationConatainer>
    )
}

export default Pagination;