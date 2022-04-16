import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoaderComponent from './components/Loader';
import EndComponent from './components/End';
import Content from './components/Content';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState(0);
  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(0);
  const itemsPerPage = 60;

  const getContent = async () => {
    const res = await fetch(
      'http://xoosha.com/ws/1/test.php?offset=' + itemsPerPage * page
    );
    const data = await res.json();
    setItems([...items, ...data]);
    setpage(page + 1);
  }
  useEffect(() => {
    if (page === 0)
      getContent();

    (searchTerm !== "") ? setResult(items.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()))) : setResult([...items]);

  }, [searchTerm, items]);


  return (
    <div className="App">
      <Header viewMode={viewMode} setViewMode={setViewMode} setSearchTerm={setSearchTerm} />
      <div id="scrollableDiv">
        <InfiniteScroll
          dataLength={items.length}
          next={getContent}
          scrollableTarget="scrollableDiv"
          hasMore={hasMore}
          loader={<LoaderComponent />}
          endMessage={<EndComponent />}
          className="masnory-container"
        >
          {viewMode === 0 &&
            result.map((item) => {
              return <Content viewMode={viewMode} key={item.page_id} image_url={item.image_url} name={item.name}></Content>
            })
          }
          {viewMode === 1 &&
            result.map((item) => {
              return <Content viewMode={viewMode} key={item.page_id} image_url={item.image_url} name={item.name}></Content>
            })
          }
          {viewMode === 2 &&
            result.map((item) => {
              return <Content viewMode={viewMode} key={item.page_id} image_url={item.image_url} name={item.name} description={item.description}></Content>
            })
          }
        </InfiniteScroll>
      </div>

    </div >
  );
}

export default App;
