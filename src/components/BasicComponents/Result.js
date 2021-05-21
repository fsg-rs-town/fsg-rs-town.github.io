import React, { Component, Fragment } from 'react';
import Intro from './Intro'
import TESTS from '../../api/TESTS'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from '../../App'
import { Card } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import HorizontalScrolling from '../SubComponents/horizontalScrolling'
import COPYBTN from '../../api/DefaultImg/result-copy-link-btn.png';
import AGAINBTN from '../../api/DefaultImg/result-to-again-btn.png';
import TOHOMEBTN from '../../api/DefaultImg/result-to-home-btn.png';
import { Helmet } from 'react-helmet';

class Result extends Component {
    constructor(props){
        super(props)

        // for applying meta tag url with slash -> prevent doulbe slash at the last chars in the sharable url
        let _sharable_url = window.location.href
        if(window.location.href.slice(-1) === '/'){
            _sharable_url = window.location.href.slice(0, -1)
        } else {
            _sharable_url = window.location.href
        }

        const _current_url = _sharable_url.split('/').filter(function(t) {return t !== ""})
        const _current_test = _current_url.reverse()[2]
        const _current_result = _current_url[0]

        this.state = {
            mode:"result",
            sharable_url:_sharable_url,
            current_url:_current_url,
            current_test:_current_test,
            current_result:_current_result,
            num_shares_count:0,
        }
        this._onBackToStartButtonClick = this._onBackToStartButtonClick.bind(this)
        this._onShareButtonClick = this._onShareButtonClick.bind(this);
        this._onPPLBannerClick = this._onPPLBannerClick.bind(this);
        this.horizontalNewTestRenderer = this.horizontalNewTestRenderer.bind(this)
    }
    
    _onBackToStartButtonClick(){
        this.setState({
            mode:"intro"
        })
    }
    _onShareButtonClick(){
        this.setState({
            num_shares_count:this.state.num_shares_count+1
        })
        alert("링크가 복사됐어요!");
    }

    _onPPLBannerClick(){
    }

    cpcBannerResultFooterScriptor(){
        return <Fragment>
            {/* 결과 푸터 */}
          <ins className="adsbygoogle"
             style={{display:"block"}}
             data-ad-client="ca-pub-7217026491537741"
             data-ad-slot="3635972349"
             data-ad-format="fluid"
             data-ad-layout-key="-fb+5w+4e-db+86"></ins>
        </Fragment>
    }
    horizontalNewTestRenderer(){
        // Delete NewTestMenu for PPL contents
        let ppl_list = ['personalTaro']
        if(!ppl_list.includes(this.state.current_test)) {
            return(
                <HorizontalScrolling test={this.state.current_test}/>
            )   
        }
    }

    newTestLinkRenderer(){
        let personalColorListGB = ["personalColorEng", "personalColorCN", "personalColorES", "personalColorArb"]
        if(this.state.current_test === "personalColor") {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/persoanlColorFactNew-thumb.png"
            let new_test_link = "https://fsg-rs-town.github.io/personalColorFact/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        } else if(this.state.current_test === "personalColorJP") {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/personalColorFactEngNew-thumb.png"
            let new_test_link = "https://fsg-rs-town.github.io/personalColorFactEng/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        } else if(this.state.current_test === "personalColorInd") {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/personalColorFactIndNew-thumb.png"
            let new_test_link = "https://fsg-rs-town.github.io/personalColorFactInd/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        } else if(personalColorListGB.includes(this.state.current_test)) {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/personalColorFactEngNew-thumb.png"
            let new_test_link = "https://fsg-rs-town.github.io/personalColorFactEng/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        }
    }

    introPageRender(){

        const current_tests_path = '/' + this.state.current_test + '/';
        return(
            <Router basename='/fsg-rs-town.github.io/'>
                <Switch>
                    <Route path={current_tests_path} component={()=><Intro test={this.state.current_test}/>} exact/>
                    <Redirect to={current_tests_path} />
                </Switch>
            </Router>
        )
    }

    resultRender(){
        // searching the result content by current url path

        let final_type = ''
        let final_desc = ''
        let img_src = ''
        let test_current = ''
        let desc_test_current = ''
        let i = 0;
        let _current_test_contents ;
        while(i<TESTS.length){
            if(TESTS[i].info.mainUrl === this.state.current_test){
                _current_test_contents = TESTS[i] // for storytelling
                let j = 0;
                while(j<TESTS[i].results.length){
                    if(TESTS[i].results[j].query === this.state.current_result){
                        final_type = TESTS[i].results[j].type
                        final_desc = TESTS[i].results[j].desc
                        img_src = TESTS[i].results[j].img_src
                        test_current = TESTS[i].info.mainTitle
                        desc_test_current = TESTS[i].info.subTitle
                        break
                    }
                    j = j + 1;
                }
                // break
            }
            i = i + 1;
        }
        

        // return final result option
        // in case of storyTelling Type Quiz
        if(_current_test_contents.info.scoreType === "storyTelling" || _current_test_contents.info.scoreType === "typeCountingMBTI" || _current_test_contents.info.scoreType === "dualMBTI"){
            // meta tag for PPL test contents
            let ppl_list = ['personalTaro', 'hanbokBTI', 'hanbokBTIEng', 'hanbokBTIJP']
            if(ppl_list.includes(this.state.current_test)) {
                let og_img_url = "https://images.ktestone.com/meta/" + this.state.current_test + "/" + this.state.current_result + ".png"
                return (
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current}-케이테스트</title>
                            <meta name="title" content={test_current+'-케이테스트'}/>
                            <meta name="description" content={final_desc + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current+'-케이테스트'}/>
                            <meta property="og:description" content={final_desc + ':' + desc_test_current}/>
                            <meta property="og:image" content={og_img_url}/>
                            <meta property="og:image:width" content="800"/>
                            <meta property="og:image:height" content="400"/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current+'-케이테스트'}/>
                            <meta property="twitter:description" content={final_desc + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={og_img_url}/>
                            <meta property="og:image:width" content="800"/>
                            <meta property="og:image:height" content="400"/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        <img src={img_src} className='result-img' alt={final_type} />
                    </Fragment>
                )
            // meta tag for native test contents
            } else if(this.state.current_test === "driveTest") {
                return(
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current}-케이테스트</title>
                            <meta name="title" content={test_current+'-케이테스트'}/>
                            <meta name="description" content={this.state.current_result + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current+'-케이테스트'}/>
                            <meta property="og:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="og:image" content={img_src}/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current+'-케이테스트'}/>
                            <meta property="twitter:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={img_src}/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        <Card className="result-card" bg="light">
                            <Card.Body className="result-p">
                                <Card.Text>{final_desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Fragment>
                )
            } else {
                return (
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current}-케이테스트</title>
                            <meta name="title" content={test_current+'-케이테스트'}/>
                            <meta name="description" content={this.state.current_result + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current+'-케이테스트'}/>
                            <meta property="og:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="og:image" content={img_src}/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current+'-케이테스트'}/>
                            <meta property="twitter:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={img_src}/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        <img src={img_src} className='result-img' alt={final_type} />
                    </Fragment>
                )
            }
            
        //  and other case of Type Quizes
        } else {
            // if there are not description text === only result img
            if(final_desc === ``){
                return (
                    <Fragment>
                        <img src={img_src} className='result-img' alt={final_type} />
                    </Fragment>

                )
            } else {
                return (
                    <Fragment>
                        <img src={img_src} className='result-img' alt={final_type} />
                        <Card className="result-card" bg="light">
                            <Card.Body className="result-p">
                                <Card.Text>{final_desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Fragment>
                )
            }
        }

    }

    mainPageRender(){
        return(
            <Router >
                <Switch>
                    <Route path='/' component={App} exact/>
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }

    goBack(){
        this.props.history.goBack();
    }

    resultPageRender(){
        return(
            <Fragment>
                
                <div className="result">
                    <div className="result-header">
                        <h5 className="result-title">결과는...</h5>
                        <div className="result-value">
                            {this.resultRender()}
                        </div>
                    </div>

                    <div className="share">
                        <h5 className="share-title">친구에게 공유하기</h5>
                        <div className="share">
                            <CopyToClipboard text={this.state.sharable_url+'/'}>
                                <img
                                    src={COPYBTN}
                                    onClick={this._onShareButtonClick}
                                    className="share-btn-img"
                                    alt="링크 복사"
                                    />
                            </CopyToClipboard>
                        </div>
                        <div className="re-test-btn">
                            <img
                                src={AGAINBTN}
                                className="re-test-btn-img"
                                onClick={this._onBackToStartButtonClick}
                                alt="테스트 다시하기"/>
                        </div>
                    </div>
                    <div className="back-to-main">
                        <img
                            src={TOHOMEBTN}
                            onClick={function(e) {
                                e.preventDefault();
                                this.setState({
                                    mode:"main"
                                })
                            }.bind(this)}
                            className="back-to-main-btn-img"
                            alt="다른 테스트 하러가기"
                            />
                    </div>
                </div>
                {/* New Test banners */}
                {this.horizontalNewTestRenderer()}

                {/* CPC Banner Result footer */}
                {this.cpcBannerResultFooterScriptor()}
            </Fragment>
        );
    }
    
    pageRenderer(){
        let _page = []
        if(this.state.mode === "result") {
            _page = this.resultPageRender()
        } else if (this.state.mode === "intro") {
            _page =  this.introPageRender()
        } else if (this.state.mode === "main") {
            _page = this.mainPageRender()
        }
        return _page
    }


    render(){
        return(
            <div>
                {this.pageRenderer()}
            </div>
        );
    }
}

export default Result;
