import React from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import styles from 'assets/jss/material-kit-react/views/components.js'
import Tabs from './Tabs.js'

const useStyles = makeStyles(styles)

export default function Home(props) {
  const classes = useStyles()
  const { ...rest } = props

  return (
    <div>
      <Header
        brand='HEALWARE'
        rightLinks={<HeaderLinks />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/bg8.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>HEALWARE</h1>
                <h3 className={classes.subtitle}>
                  Artificial Intelligence platform for medical prognosis of severe yet curable diseases.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Tabs />
        </div>
      </div>
      <Footer />
    </div>
  )
}
