import React, { useEffect, useState } from 'react'

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Link, useParams } from 'react-router-dom';

import '../Detail Games Tabs/style.css'
import { PacmanLoader } from 'react-spinners';



function DetailGameTab() {

  const [detail, setDetail] = useState([])
  const [achievement, setAchievement] = useState([])
  const [creators, setCreators] = useState([])


  const { id } = useParams()

  let platform = detail?.platforms?.map(platform => platform.requirements)
  // let development = creators?.map(positions => positions.positions)
  // console.log(development);
  console.log(platform);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
      .then(res => res.json())
      .then(res => setDetail(res))
    // .then(res => console.log(res))
  }, [])

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}/achievements?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
      .then(res => res.json())
      .then(res => setAchievement(res.results))
    // .then(res => console.log(res))
  }, [])

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}/development-team?key=b8abad1909e84a40a30128c4c9e64c27&dates=2022-09-01,2023-09-30`)
      .then(res => res.json())
      .then(res => setCreators(res.results))
    // .then(res => console.log(res))
  }, [])

  
  // console.log(creators);
  // console.log(detail);

  // console.log(achievement);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className='detail-game-tabs'>
        <div className='container'>
          <div className='row'>
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ color: '#fff', button: {fontFamily: "poppins"}, span: { marginBottom: '0'} }} textColor="default" TabIndicatorProps={{sx:{backgroundColor: '#fa9021'}}}>
                    <Tab label="Platforms" value="1" />
                    <Tab label="Achievements" value="2" />
                    <Tab label="Creators" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {/* <p>{platform}</p> */}
                  <div className='detail-game-platform'>

                    <div className='detail-game-tab-platform d-flex flex-wrap justify-content-between'>
                      <div className='col-xl-5 col-md-12 col-sm-12'>
                        {detail?.platforms?.map((item, index) =>

                          <p dangerouslySetInnerHTML={{ __html: item.requirements.minimum }} style={{ fontSize: "13px" }}></p>
                        )}
                      </div>

                      <div className='col-xl-5 col-md-12 col-sm-12'>
                        {detail?.platforms?.map((item, index) =>
                          <p dangerouslySetInnerHTML={{ __html: (item.requirements.recommended) }} style={{ fontSize: "13px" }}></p>
                        )}
                      </div>
                    </div>

                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className='detail-game-achievement d-flex flex-wrap flex-row'>
                    {achievement?.map((item) =>
                      <div className='detail-achievement-game-item col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex'>
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
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  {creators.length ? <div className='detail-game-development d-flex'>
                    {creators?.map(item =>
                      <div className='detail-development-item'>
                        <div className='detail-development-item-image'>
                          <div className='detail-development-image-avatar d-flex justify-content-center'>
                            <img src={item.image} />
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
                  </div> : <div className='pacman-loader'><PacmanLoader
                    color={"#fa9021"}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  /> </div> }
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>

    </div >
  )
}

export default DetailGameTab