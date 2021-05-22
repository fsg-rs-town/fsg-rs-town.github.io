import React, { Component, Fragment } from 'react';
import MainPage from './components/BasicComponents/MainPage';
import Intro from './components/BasicComponents/Intro'
import ResultToIntro from './components/SubComponents/ResultToIntro'
import ScrollToTop from './components/SubComponents/ScrollToTop'
import TESTS from './api/TESTS'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from './components/BasicComponents/Result';
import { Helmet } from 'react-helmet';


class App extends Component {
  constructor(props){
    super(props)
    const _sharable_url = window.location.href;
    let i = 0;
    let _all_tests_url = [];
    while (i<TESTS.length) {
      _all_tests_url.push('/'+TESTS[i].info.mainUrl+'/')
      i = i + 1;
    }
    let j = 0;
    let _all_tests_result_url = [];
    while (j<_all_tests_url.length){
      _all_tests_result_url.push(_all_tests_url[j]+'result/')
      j = j + 1;
    }
    let _final_render_routes = [];
    var k = 0;

    while(k<TESTS.length){
      var l=  0;
      while(l<TESTS[k].results.length){
        _final_render_routes.push([TESTS[k].results[l].query, TESTS[k].info.mainUrl])
        l = l + 1;
      }
      k = k + 1;
    }
    this.state = {
      result_route:'result/',
      all_tests_url:_all_tests_url,
      all_tests_result_url:_all_tests_result_url,
      final_render_routes:_final_render_routes,
      sharable_url:_sharable_url,
      ppl_list:['personalTaro']
    }
  }
  componentDidMount(){
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  reloadPage() {
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    var now = Date.now();
    var tenSec = 10 * 1000;
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) { window.location.reload(); } else {}
  }

  cpcBannerUpperScriptor(){
    return <Fragment>
      <script data-ad-client="ca-pub-7217026491537741" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Fragment>
  }

  cpcBannerFooterScriptor(){
    return <Fragment>
          <ins className="adsbygoogle"
             style={{display:"block"}}
             data-ad-client="ca-pub-7217026491537741"
             data-ad-slot="3635972349"
             data-ad-format="fluid"
             data-ad-layout-key="-fb+5w+4e-db+86"></ins>
    </Fragment>
  }

  render() {
    return(
    <Router>
    <Fragment>

      {this.reloadPage()}

      {/* CPC Banner Upper */}
      {this.cpcBannerUpperScriptor()}

      <div id="optadATF" style={{"minHeight": "110px"}}></div>

      <Router basename='/'>
        <ScrollToTop>
          <Switch>
            {/* "Main" page */}
            <Route path='/' exact>
                <Helmet>
                  {/* <!-- Primary Meta Tags --> */}
                  <title>Тесты от FSG RS</title>
                  <meta name="title" content="Тесты от FSG RS"/>
                  <meta name="description" content="Тесты от FSG RS" data-react-helmet="true"/>
                  <link rel="main-url" href={window.location.href}/>
                  </Helmet>
                <MainPage/>
            </Route>

            {/* go to "Intro" page */}
            {this.state.all_tests_url.map((item)=>(
              <Route
                path={item}
                component={() => <Intro test={item.replaceAll('/','')}/>}
                key={item.replaceAll('/','')}
                exact
              />
            ))}

            {/* go to "Result to Start" page */}
            <Route path={this.state.all_tests_result_url} component={ResultToIntro} exact/>

            {/* go to "Each Result contents" page */}
            {this.state.final_render_routes.map((item)=>(
              <Route
                path={'/'+item[1]+'/'+this.state.result_route+item[0]}
                component={Result}
                key={item[1]+'_'+item[0]} exact/>
            ))}

          </Switch>
        </ScrollToTop>
      </Router>

      {/* CPC Banner footer */}
      {this.cpcBannerFooterScriptor()}

      {/* footer */}
      <div className="intro-footer">
          <p>Информациция носит развлекательный характер.</p>
          <p>© 2021</p>
      </div>
    </Fragment>
    </Router>
    )
  }

}


export default App;
