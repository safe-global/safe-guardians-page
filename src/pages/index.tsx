import * as React from 'react'
import Footer from '../components/home/Footer'
import GetInvolved from '../components/home/GetInvolved'
import Guardians from '../components/home/Guardians'
import Header from '../components/home/Header'
import MainSection from '../components/home/MainSection'
import PoweredBy from '../components/home/PoweredBy'
import Layout from '../components/layout'

export default () => (
  <Layout title="Safe Guardians">
    <Header />
    <MainSection />
    <Guardians />
    <PoweredBy />
    <GetInvolved />
    <Footer />
  </Layout>
)
