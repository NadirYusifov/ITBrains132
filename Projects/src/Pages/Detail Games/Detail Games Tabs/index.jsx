import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

// ========== Material UI ========== 
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

// ========== Image add ==========
import ProfilNoImage from '../../../Assets/profil-no-image.jpg'

// ========== Style.css ==========
import '../Detail Games Tabs/style.css'

// ========== Loader Hooks ==========
import { PacmanLoader } from 'react-spinners';


function DetailGameTab() {
  const [detail, setDetail] = useState([])
  const [achievement, setAchievement] = useState([])
  const [creators, setCreators] = useState([])
  const { id } = useParams()

  // ========== useEffect Api ==========
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=b9bc2788ba394d238eee7389bf54a97a`)
      .then(res => res.json())
      .then(res => setDetail(res))
    // .then(res => console.log(res))
  }, [])

  //========== useEffecct API ========== 
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}/achievements?key=b9bc2788ba394d238eee7389bf54a97a`)
      .then(res => res.json())
      .then(res => setAchievement(res))
    // .then(res => console.log(res))
  }, [])

  // ========== useEffect API ==========
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}/development-team?key=b9bc2788ba394d238eee7389bf54a97a`)
      .then(res => res.json())
      .then(res => setCreators(res.results))
    // .then(res => console.log(res))
  }, [])

  console.log(detail);

  // ========== Tabs Value ==========
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* ========== Detail Games Section 3 Start (Games Tabs) ========== */}
      <div className='detail-game-tabs'>
        <div className='container'>
          <div className='row'>
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ color: '#fff', button: { fontFamily: "poppins", fontSize: '16px'}, span: { marginBottom: '0' } }} textColor='inherit' TabIndicatorProps={{ sx: {backgroundColor: '#fa9021'} }}>
                    <Tab label="Platforms" value="1" />
                    <Tab label="Achievements" value="2" />
                    <Tab label="Creators" value="3" />
                  </TabList>
                </Box>
                {/* ========== Detail Games Tabs 1 Start ========== */}
                <TabPanel value="1">
                  <div className='detail-game-platform'>
                    {detail?.platforms?.length ? <div className='detail-game-tab-platform d-flex flex-wrap justify-content-between'>
                      <div className='col-xl-5 col-md-12 col-sm-12'>
                        {detail?.platforms?.map((item) =>
                          <p dangerouslySetInnerHTML={{ __html: item.requirements.minimum }}></p>
                        )}
                      </div>

                      <div className='col-xl-5 col-md-12 col-sm-12'>
                        {detail?.platforms?.map((item) =>
                          <p dangerouslySetInnerHTML={{ __html: (item.requirements.recommended) }}></p>
                        )}
                      </div>
                    </div> : <div className='detail-game-error d-block text-center'><span>🥲</span> <p>Sorry, no desired results</p></div>}
                  </div>
                </TabPanel>
                {/* ========== Detail Games Tabs 1 End ========== */}

                {/* ========== Detail Games Tabs 2 Start ========== */}
                <TabPanel value="2"></TabPanel>
                <TabPanel value="2">
                  {achievement?.results?.length ? <div className='detail-game-achievement d-flex flex-wrap flex-row'>
                    {achievement?.results.map((item) =>
                      <div className='detail-achievement-game-item col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex align-items-center'>
                        <div className='detail-achievement-image'>
                          <img src={item.image} />
                        </div>
                        <div className='detial-achievement-content'>
                          <div className='detail-achievement-percent'>
                            <span>{item.percent}%</span>
                          </div>
                          <div className='detail-achievement-name'>
                            <h6>{item.name}</h6>
                            <div className='detail-achievement-info'>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div> : <div className='detail-game-error d-block text-center'> <span>🥲</span> <p>Sorry, no desired results</p> </div>}
                </TabPanel>
                {/* ========== Detail Games Tabs 2 End ========== */}

                {/* ========== Detail Games Tabs 3 Start ========== */}
                <TabPanel value="3"></TabPanel>
                <TabPanel value="3">
                  {creators.length ? <div className='detail-game-development d-flex'>
                    {creators?.map(item =>
                      <div className='detail-development-item'>
                        <div className='detail-development-item-image'>
                          <div className='detail-development-image-avatar d-flex justify-content-center' style={{ backgroundImage: 'linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%' }}>
                            <img src={item.image ? item.image : ProfilNoImage} />
                          </div>
                          <div className='detail-development-background-image'>
                            <img src={item.image_background} />
                          </div>
                        </div>

                        <div className='detail-development-content'>
                          <div className='detail-development-name'>
                            <h6>{item.name}</h6>
                          </div>
                          <div className='detail-development-positions'>
                            {item?.positions?.map((item, index) =>
                              <p>
                                {!!index && ', '}
                                {item.name}
                              </p>
                            )}
                          </div>
                          <div className='detail-development-game'>
                            {item?.games?.map(item =>
                              <Link to={`/detail/${item.slug}`} reloadDocument={`/detail/${item.slug}`}><p>{item.name}</p></Link>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div> : <div className='detail-game-error d-block text-center'> <span>😶‍🌫️</span> <p>Sorry, no desired results</p> </div>}
                </TabPanel>
                {/* ========== Detail Games Tabs 3 End ========== */}

              </TabContext>
            </Box>
          </div>
        </div>
      </div>
      {/* ========== Detail Games Section 3 End (Games Tabs) ========== */}
    </>
  )
}

export default DetailGameTab