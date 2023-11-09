import { Breadcrumbs, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Bread Crumbs/style.css'
import { SportsEsports } from '@mui/icons-material'

function BreadCrumbs() {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=b9bc2788ba394d238eee7389bf54a97a`)
            .then(res => res.json())
            .then(res => setDetail(res))
        // .then(res => console.log(res))
    }, [])

  return (
    <>
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <Breadcrumbs separator='>' color={'#fff'} sx={{fontFamily: 'Poppins', fontSize: '18px', display: 'flex', alignItems: 'center'}}>
                        <Link href='/games' underline='hover' color={'#fff'} >
                            <SportsEsports sx={{marginRight: '5px'}}/>
                            All Games
                        </Link>
                        <Typography color={'#fff'} sx={{fontFamily: 'Poppins', fontSize: '18px'}}>
                            {detail.name}
                        </Typography>
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    </>
  )
}

export default BreadCrumbs