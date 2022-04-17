import React from 'react'
import image_placeholder from '../assets/image_placeholder.jpg'

export default function Content(props) {
    function onImgLoadError(target) {
        target.onerror = null;
        target.src = image_placeholder;
    }
    if (props.viewMode === 0 || props.viewMode === 1) {
        return (
            <div className={`content-thumbnail-wrapper ${props.viewMode === 1 ? "masnory-item" : ""}`}>
                <img className={`content-thumbnail ${props.viewMode === 0 ? "fixed-size" : ""} ${props.viewMode === 1 ? "masnory-image" : ""}`} src={props.image_url}
                    onError={({ currentTarget }) => { onImgLoadError(currentTarget) }} />
                <div className='content-thumbnail-overlay'></div>
                <div className='content-thumbnail-info'>
                    <h3 className='content-thumbnail-title'>{props.name}</h3>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='content-detailed-wrapper'>
                <img className='content-detailed-image' src={props.image_url}
                    onError={({ currentTarget }) => { onImgLoadError(currentTarget) }} />
                <div className='content-detailed-info'>
                    <h3 className='content-detailed-title'>{props.name}</h3>

                    <div className='content-detailed-description' dangerouslySetInnerHTML={{ __html: props.description }}></div>
                </div>
                <div className='content-description-overlay'>
                    <div className='content-description-overlay-text'>Read More</div>
                </div>
            </div>
        )

    }
}
