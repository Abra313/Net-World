import React from 'react';

const StoryPost = ({ image }) => {
    return (
        <div className='w-[80px] h-[90px] rounded-[5px]'>
            <img src={image} alt="story" className='w-[80px] h-[90px] rounded-[5px]' />
        </div>
    );
};

export default StoryPost;

  
