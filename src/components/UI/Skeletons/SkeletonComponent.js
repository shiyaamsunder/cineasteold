import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonComponent = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-card"> 
            <SkeletonElement type="image"/>
            <SkeletonElement type="title"/>
            <SkeletonElement type="rating"/>
            </div>
        </div>
    )
}

export default SkeletonComponent
