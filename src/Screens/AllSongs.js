import React from 'react';
/*import firebase from 'firebase';
import PlayMusic from './PlayMusic';*/
class AllSongs extends React.Component
{

   render()
   {
        return (
            <div className="screen-music">
                <div className='screen-music-instruction'>
                    <p>
                        Press "<i className="fas fa-play"></i>/<i className="fas fa-pause"></i>" button to play/pause.
                    </p>
                </div>
            </div>
        )
   }
}

export default AllSongs;