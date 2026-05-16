import { Play, Clock } from 'lucide-react';

const Playlist = () => {
  const tracks = [
    { id: 1, title: 'Starboy', artist: 'The Weeknd', album: 'Starboy', duration: '3:50', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=100&auto=format&fit=crop' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=100&auto=format&fit=crop' },
    { id: 3, title: 'Save Your Tears', artist: 'The Weeknd', album: 'After Hours', duration: '3:35', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=100&auto=format&fit=crop' },
    { id: 4, title: 'Die For You', artist: 'The Weeknd', album: 'Starboy', duration: '4:20', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=100&auto=format&fit=crop' },
    { id: 5, title: 'I Feel It Coming', artist: 'The Weeknd', album: 'Starboy', duration: '3:48', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=100&auto=format&fit=crop' },
  ];

  return (
    <div className="page-container">
      <div className="playlist-header">
        <img 
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop" 
          alt="Playlist Cover" 
          className="playlist-cover"
        />
        <div className="playlist-info">
          <p>Public Playlist</p>
          <h1>The Weeknd Essentials</h1>
          <p>5 songs, 18 min 53 sec</p>
        </div>
      </div>

      <div className="track-list">
        <div className="track-header">
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span style={{ textAlign: 'right' }}><Clock size={16} /></span>
        </div>
        
        {tracks.map((track, index) => (
          <div key={track.id} className="track-row">
            <span className="track-num">{index + 1}</span>
            <div className="track-title">
              <img src={track.img} alt={track.title} />
              <div>
                <div style={{ fontWeight: '500' }}>{track.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{track.artist}</div>
              </div>
            </div>
            <span className="track-album">{track.album}</span>
            <span className="track-duration">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
