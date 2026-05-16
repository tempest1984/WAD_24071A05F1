const Home = () => {
  const featured = [
    { id: 1, title: 'Midnight City', subtitle: 'M83', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400&auto=format&fit=crop' },
    { id: 2, title: 'Starboy', subtitle: 'The Weeknd', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop' },
    { id: 3, title: 'Currents', subtitle: 'Tame Impala', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400&auto=format&fit=crop' },
    { id: 4, title: 'Discovery', subtitle: 'Daft Punk', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop' },
  ];

  const recent = [
    { id: 5, title: 'Daily Mix 1', subtitle: 'Made for you', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop' },
    { id: 6, title: 'Chill Vibes', subtitle: 'Relax and unwind', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=400&auto=format&fit=crop' },
    { id: 7, title: 'Workout', subtitle: 'Get pumped', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
    { id: 8, title: 'Focus', subtitle: 'Deep work mode', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Good Evening</h1>
      </div>

      <h2 className="section-title">Featured Albums</h2>
      <div className="grid-cards">
        {featured.map(item => (
          <div key={item.id} className="music-card">
            <img src={item.img} alt={item.title} className="card-img" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Recently Played</h2>
      <div className="grid-cards">
        {recent.map(item => (
          <div key={item.id} className="music-card">
            <img src={item.img} alt={item.title} className="card-img" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
