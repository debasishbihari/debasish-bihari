//import logo from './logo.svg';
//import './App.css';
import MultimediaContainer from './components/MultimediaContainer';
import './components/MultimediaContainer.css.css'

function App() {
  const mediaList = [
    { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },  // we can add more media objects as needed
    
  ];

  return (
    <div className='cover'>
      <div className="container mx-auto px-4 py-8">
      <MultimediaContainer mediaList={mediaList} title="Multimedia" />
    </div>
    <div className='title-container'>
      <h1>Multimedia</h1>
    </div>
    </div>
  );
}

export default App;
