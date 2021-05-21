import React from 'react'
import { Fragment } from 'react'

export default function OtherLangIcons(props) {
    function factBTILinkRenderer(){
        if(props.currentTest === "personalColorFact") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorFactEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorFactInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorFactEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorFact/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorFactInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorFactInd") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorFactEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorFact/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    }
    function dringkingHabitLinkRenderer(){
        if(props.currentTest === "dringkingHabit") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/dringkingHabitEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/dringkingHabitJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "dringkingHabitEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/dringkingHabit/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/dringkingHabitJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "dringkingHabitJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/dringkingHabit/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/dringkingHabitEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        }
    }
    
    function personalColorLinkRenderer(){
        if(props.currentTest === "personalColor") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorES") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorArb") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorInd") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorRus") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorMalay") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                </div>
            )
        }
    }

    function personalIncenseLinkRenderer(){
        if(props.currentTest === "personalIncense") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalIncenseEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalIncenseJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalIncenseJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalIncense/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalIncenseEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalIncenseEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalIncense/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/personalIncenseJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } 
    }

    function hanbokBTILinkgRenderer(){
        if(props.currentTest === "hanbokBTI") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/hanbokBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/hanbokBTIJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "hanbokBTIJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/hanbokBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/hanbokBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "hanbokBTIEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/hanbokBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/fsg-rs-town.github.io/hanbokBTIJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } 
    }
    return (
        <Fragment>
            {factBTILinkRenderer()}
            {dringkingHabitLinkRenderer()}
            {personalColorLinkRenderer()}
            {personalIncenseLinkRenderer()}
            {hanbokBTILinkgRenderer()}
        </Fragment>
    )
}
