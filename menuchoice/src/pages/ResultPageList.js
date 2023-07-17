import React from "react";
import styles from "./Result.module.css";

import {Card, CardImg, CardText} from 'reactstrap';

import {IoIosArrowBack} from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResultSlider=()=>{
    const settings={
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return(
        <Slider {...settings}>
            <div style="line-height: 200%">
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/salady_sample.png'}/>
                    <CardText>
                        샐러디 숙명여대점<br/>
                        영업시간<br/>
                        08:00~21:00<br/>
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/monster_sample.png'}/>
                    <CardText>
                        몬스터플레이스<br/>
                        영업시간<br/>
                        08:00~20:30<br/>
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/salady_sample.png'}/>
                    <CardText>
                        샐러디 숙명여대점<br/>
                        영업시간<br/>
                        08:00~21:00<br/>
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/monster_sample.png'}/>
                    <CardText>
                        몬스터플레이스<br/>
                        영업시간<br/>
                        08:00~20:30<br/>
                    </CardText>
                </Card>
            </div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </Slider>
    )
}

const ResultPageList=()=>{
    return(
        <div>
            <div className="back" style={{textAlign: 'left'}}><IoIosArrowBack size="30" color="white"/></div>
            <h1 className={styles.title}>당신의 선택 결과</h1>

            <div>
                <img src={process.env.PUBLIC_URL + 'img/result_sample.png'}/>
            </div>

            <hr/>
            <div>
                <ResultSlider/>
            </div>
            <hr/>
            
            <h5 className={styles.scroll}>좌우로 스크롤 하여 확인해보세요 :)</h5>
        </div>
    );
};

export default ResultPageList;