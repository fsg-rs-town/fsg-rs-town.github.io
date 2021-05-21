import React, { Component } from 'react';
import { Fragment } from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../loading-animation.json'
import ScriptTag from 'react-script-tag'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


class Loading extends Component {
  componentDidMount(){
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render(){
    return <Fragment>
      {/* 로딩 중앙 */}
          <ins className="adsbygoogle"
             style={{display:"block"}}
             data-ad-client="ca-pub-7217026491537741"
             data-ad-slot="3635972349"
             data-ad-format="fluid"
             data-ad-layout-key="-fb+5w+4e-db+86"></ins>
      <div className="loading" >
          <Lottie options={defaultOptions} height={120} width={120}/>
      </div>
    </Fragment>
  }
}

export default Loading;

// https://github.com/chenqingspring/react-lottie
