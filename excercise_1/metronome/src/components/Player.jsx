import { Play, SkipBack, SkipForward, Pause, Volume2, Mic2, ListMusic } from 'lucide-react';
import { useState } from 'react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="player">
      <div className="player-track-info">
        <img 
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" 
          alt="Current Track" 
          className="player-cover"
        />
        <div className="player-text">
          <h4>Neon Nights</h4>
          <p>Synthwave Sessions</p>
        </div>
      </div>
      
      <div className="player-controls">
        <div className="control-buttons">
          <button className="control-btn"><SkipBack size={20} /></button>
          <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>
          <button className="control-btn"><SkipForward size={20} /></button>
        </div>
        <div className="progress-container">
          <span>0:45</span>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span>3:24</span>
        </div>
      </div>

      <div className="player-volume">
        <button className="control-btn" style={{ marginRight: '10px' }}>
          <Mic2 size={18} />
        </button>
        <button className="control-btn" style={{ marginRight: '10px' }}>
          <ListMusic size={18} />
        </button>
        <Volume2 size={20} style={{ marginRight: '10px' }} />
        <div className="volume-bar">
          <div className="volume-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
