import React from 'react'
import { ReactComponent as ViewThumbnailIcon } from '../assets/view_thumbnail.svg'
import { ReactComponent as ViewUnevenIcon } from '../assets/view_uneven.svg'
import { ReactComponent as ViewDetailedIcon } from '../assets/view_detailed.svg'

import { useState } from 'react'

export default function ViewMode(props) {
    function handleClick(item) {
        props.setViewMode(item)
    }
    return (
        <div className='view-mode-container'>
            <ViewThumbnailIcon className={`view-mode-item ${props.viewMode === 0 && 'view-mode-item-active'}`} onClick={() => { handleClick(0) }} />
            <ViewUnevenIcon className={`view-mode-item ${props.viewMode === 1 && 'view-mode-item-active'}`} onClick={() => { handleClick(1) }} />
            <ViewDetailedIcon className={`view-mode-item ${props.viewMode === 2 && 'view-mode-item-active'}`} onClick={() => { handleClick(2) }} style={{ marginRight: "24px" }} />
        </div>
    )
}
