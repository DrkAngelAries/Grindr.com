import React from 'react'
import {IndexLink, Link} from 'react-router'
import css from './Download.scss'
import {createMarkup} from '../../../components/Helpers'
import type {PageObject}
from '../../../store/interfaces/home'
import Phone from '../assets/cascade.png'
import google_play from '../assets/google_play.png'
import app_store from '../assets/app_store.png'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
  const meta = {
    title: 'Grindr |  The World’s Largest Social Networking App for Gay, Bi, Trans, and Queer People.',
    description: 'Grindr is the world’s #1 FREE mobile social networking app for gay, bi, trans, and queer people to connect. Chat and meet up with interesting and attractive people for free, or upgrade to Grindr XTRA for more features, more fun, and more chances to connect.',
    canonical: 'http://www.grindr.com/download',
    meta: {
      charSet: 'utf-8',
      name: {
        keywords: 'Grindr |  The World’s Largest Social Networking App for Gay, Bi, Trans, and Queer People.'
      },
      itemProp: {
        name: 'Grindr |  The World’s Largest Social Networking App for Gay, Bi, Trans, and Queer People.',
        description: 'Grindr is the world’s #1 FREE mobile social networking app for gay, bi, trans, and queer people to connect. Chat and meet up with interesting and attractive people for free, or upgrade to Grindr XTRA for more features, more fun, and more chances to connect.',
        canonical: 'http://www.grindr.com/download'
      },
      property: {
        'og:title': 'Grindr |  The World’s Largest Social Networking App for Gay, Bi, Trans, and Queer People.',
        'og:type': 'article',
        'og:site_name': 'Gay Dating App & Social Network – Chat & Date on Grindr',
        'og:url': 'http://www.grindr.com/',
        'twitter:site': '@Grindr',
        'twitter:title': 'Grindr |  The World’s Largest Social Networking App for Gay, Bi, Trans, and Queer People.',
        'twitter:card': 'summary',
        'twitter:description': 'Grindr is the world’s #1 FREE mobile social networking app for gay, bi, trans, and queer people to connect. Chat and meet up with interesting and attractive people for free, or upgrade to Grindr XTRA for more features, more fun, and more chances to connect.'
      }
    },
    auto: {
      ograph: true
    }
  }
  return <DocumentMeta {...meta}/>
}

export const Download = ({item}) => (<div className="download container page">
  <div className="temp-video">
    <iframe src="//players.brightcove.net/5428591958001/S18F4UGdb_default/index.html?videoId=5764169229001" allowFullScreen={true}></iframe>
  </div>
  {putMetaData(item)}
  <div className="headings">
    <h1>{item.title}</h1>
    <h4>THE WORLD’S LARGEST SOCIAL NETWORKING APP FOR GAY, BI, TRANS, AND QUEER PEOPLE.</h4>
    <p>Chat. Make Friends. Meet up</p>
  </div>
  <div className="col-lg-4 icons_wrapper left kill-padding visible-lg">
    <div className="col-lg-4 pull-right bullets kill-padding">
      <div className="points point1"><img className="icons" src="/img/icons/Location-arrow.svg"/>DISCOVER YOUR WORLD<span>See who’s nearby anywhere, anytime.</span>
      </div>
      <div className="points point2"><img className="icons" src="/img/icons/Person.svg"/>FIND YOUR TYPE<span>Customize your search with filters and swipe between profiles.</span>
      </div>
      <div className="points point3"><img className="icons" src="/img/icons/Message.svg"/>SAY HI<span>Chat and share pics for free.</span>
      </div>
    </div>
  </div>

  <div className="col-lg-4 phone_wrapper kill-padding">
    <div className="links_wrapper hidden-lg">
      <a className="ad_buttons app_store" target="_blank" href="https://app.appsflyer.com/id319881193?pid=grindr_download_ios_button"><img src={app_store}/></a>
      <a className="ad_buttons google_play" target="_blank" href="https://app.appsflyer.com/com.grindrapp.android?pid=grindr_download_android_button"><img src={google_play}/></a>
    </div>
    <img src={Phone} className="phone"/>
    <div className="links_wrapper visible-lg">
      <a className="ad_buttons pull-left app_store" target="_blank" href="https://app.appsflyer.com/id319881193?pid=grindr_download_ios_button"><img src={app_store}/></a>
      <a className="ad_buttons pull-right google_play" target="_blank" href="https://app.appsflyer.com/com.grindrapp.android?pid=grindr_download_android_button"><img src={google_play}/></a>
    </div>
  </div>
  <div className="col-lg-4 icons_wrapper kill-padding">
    <div className="col-sm-6 col-md-12 hidden-lg bullets kill-padding">
      <div className="points point1"><img className="icons" src="/img/icons/Location-arrow.svg"/>DISCOVER YOUR WORLD<span>See who’s nearby anywhere, anytime.</span>
      </div>
      <div className="points point2"><img className="icons" src="/img/icons/Person.svg"/>FIND YOUR TYPE<span>Customize your search with filters and swipe between profiles.</span>
      </div>
      <div className="points point3"><img className="icons" src="/img/icons/Message.svg"/>SAY HI<span>Chat and share pics for free.</span>
      </div>
    </div>

    <div className="col-sm-6 col-md-12 col-lg-4 bullets kill-padding">
      <div className="points point4"><img className="icons" src="/img/icons/Rocket.svg"/>EXPLORE NEW PLACES<span>Browse and connect with people anywhere in the world.</span>
      </div>
      <div className="points point5"><img className="icons" src="/img/icons/Fav-Star.svg"/>WANT MORE?<span>Upgrade to Grindr XTRA to see 6x the profiles and zero ads.</span>
      </div>
      <div className="points point6"><img className="icons" src="/img/icons/Pin.svg"/>GET FACE TO FACE<span>Make plans and meet up easily.</span>
      </div>
    </div>
  </div>

</div>)

Download.propTypes = {
  item: React.PropTypes.object
}

export default Download
