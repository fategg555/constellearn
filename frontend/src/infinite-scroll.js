import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Thumbnail from './thumbnail';

function infiniteScroll() {
    return (
        <div class="inf">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            {/* <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true} // Replace with a condition based on your data source
                loader={<p> Loading... </p>}
                endMessage={<p> You've unlocked the wisdom of the Cosmos ...  </p>}
            >
            <ul>
                {items.map(item => (
                <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            </InfiniteScroll>
            {error && <p>Error: {error.message}</p>} */}
        </div>
    )
}
  
export default infiniteScroll;
  