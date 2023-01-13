import styled from "styled-components"

const AboutWhat = () => {
    return(
        <Container>
            <h2>what we do</h2>
            <ul>
                <li>
                    <img alt="icon01" src="http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon01.png
"/>
                    <LiBox>
                    <span>기획</span>
                    <p>맞춤형 컨셉, 행사의 기획과 제안 그리고 운영까지 토탈 솔루션을 제공해드립니다. 전문 기획자들의 다양한 경험과 참신한 아이디어로 높은 만족도의 결과물을 얻으실 수 있습니다.</p>
                    </LiBox>
                </li>
                <li>
                    <img alt="icon02" src="http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon02.png"/>
                    <LiBox>
                    <span>디자인</span>
                    <p>광고디자인, 전시디자인, 공간디자인의 전문 인력들이 개성과 소신으로 브랜드의 가치를 높이고, 독창적인 홍보의 장을 마련해 드립니다.</p>
                    </LiBox>
                </li>
                
                <li>
                    <img alt="icon03" src="http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon03.png"/>
                    <LiBox>
                    <span>전시</span>
                    <p>전국 17개 전문전시장에 등록되어있으며 제작, 시공, 해체 그리고 다양한 물품의 렌탈등 모든 서비스를 제공합니다.</p>
                    </LiBox>
                </li>
                
                <li>
                    <img alt="icon04" src="	http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon04.png"/>
                    <LiBox>
                    <span>물류</span>
                    <p>온라인 시스템 운영으로 물류의 보관, 입ㆍ출고, 정산서비스를 합리적 비용으로 이용할 수 있으며 최고의 배송업체와 제휴하여 국내외 배송서비스가 가능합니다.</p>
                    </LiBox>
                </li>
                
                <li>
                    <img alt="icon05" src=""/>
                    <LiBox>
                    <span>정보기술</span>
                    <p>웹 개발, 모바일 개발. 사이트 제작, 심포지엄 진행, 온라인 방송촬영, Veeva 컨텐츠 개발이 가능합니다.
                        <br></br>
경쟁사 대비 가장 많은 Veeva multichannel certification 보유</p>
                    </LiBox>
                </li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1200px;
    padding-top: 5%;
    padding-right: 30px;
    padding-bottom: 5%;
    padding-left: 30px;
    margin: 0px auto 20px auto;
    visibility: visible;
    animation-duration: 0.7s;
    font-family: NanumSquare, dotum, 돋움, sans-serif;

    ul {
        display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    }

    li {
    padding: 30px 0 30px 0px;
    list-style: none;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    }
    
    span {
        display: block;
    color: #e71e38;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 700;
    }
`
const LiBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 40px;
`
export default AboutWhat