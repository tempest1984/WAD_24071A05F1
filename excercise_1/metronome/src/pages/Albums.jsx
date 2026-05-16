const Albums = () => {
  const albums = [
    { id: 1, title: 'After Hours', artist: 'The Weeknd', year: '2020', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop' },
    { id: 2, title: 'Random Access Memories', artist: 'Daft Punk', year: '2013', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop' },
    { id: 3, title: 'Currents', artist: 'Tame Impala', year: '2015', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400&auto=format&fit=crop' },
    { id: 4, title: 'Hurry Up, We\'re Dreaming', artist: 'M83', year: '2011', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400&auto=format&fit=crop' },
    { id: 5, title: 'Trilogy', artist: 'The Weeknd', year: '2012', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop' },
    { id: 6, title: 'Discovery', artist: 'Daft Punk', year: '2001', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Albums</h1>
      </div>

      <div className="grid-cards">
        {albums.map(album => (
          <div key={album.id} className="music-card">
            <img src={album.img} alt={album.title} className="card-img" />
            <h3 className="card-title">{album.title}</h3>
            <p className="card-subtitle">{album.artist} • {album.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
