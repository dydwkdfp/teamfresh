import { useState ,React} from 'react'
import { AutodeliveryResult, AutodeliveryCheckButton, AutodeliveryContainer, AutodeliveryExplanation, AutodeliveryExplanationContainer, AutodeliveryExplanationExample, AutodeliveryHr, AutodeliveryLogo, AutodeliverySearchbar, AutodeliverySearchbarContainer, AutodeliveryTitle, AutodeliveryTopContainer, AutodeliveryWrapper, AutoSearchIcon } from '../styles/AutoDeliveryStyle'
import logo from '../img/logo.png'
import axios from 'axios'

const Autodelivery = () => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    const onChange = (e) =>{
        setCity(e.target.value);
    }


    const GetApiData = async() =>{
        try{
            setError(null);
            setData(null);
            setLoading(true);

            const responce = await axios.get(`http://localhost:8000/Delivery/${encodeURIComponent(city)}"`);

            await setData(responce.data);


        }catch (e){
            setError(e);
        }
        setLoading(false);
    };
    
    if (loading) return (
        <div>
            Loading...
        </div>
    )
    if(error) return (
        <div>
            Error!
        </div>
    )

    console.log(error);

    return (
        <div>
            <AutodeliveryContainer>
                <AutodeliveryWrapper>
                    <AutodeliveryTopContainer>
                    <AutodeliveryLogo src={logo}/>
                    <AutodeliveryTitle>
                        새벽배송 가능여부 조회
                    </AutodeliveryTitle>
                    <AutodeliveryHr/>
                    </AutodeliveryTopContainer>
                    <AutodeliverySearchbarContainer>
                        <AutoSearchIcon/>
                        <AutodeliverySearchbar onChange={onChange}>
                        </AutodeliverySearchbar>
                    </AutodeliverySearchbarContainer>
                    {(data !== null ? 
                        <AutodeliveryResult colorprops={data.result.delyverYn}>
                            {data.result.delyverResult} 지역 입니다.
                        </AutodeliveryResult> : 
                        <>
                    <AutodeliveryExplanationContainer>
                        <AutodeliveryExplanation>
                        도로명 + 건물번호
                        </AutodeliveryExplanation>
                        <AutodeliveryExplanationExample>
                        예) 판교역로 235,  제주 첨단로 242
                        </AutodeliveryExplanationExample>
                    </AutodeliveryExplanationContainer>
                    <AutodeliveryExplanationContainer>
                        <AutodeliveryExplanation>
                        지역명(동/리) + 번지
                        </AutodeliveryExplanation>
                        <AutodeliveryExplanationExample>
                        예) 삼평동 681,  제주 영평동 2181
                        </AutodeliveryExplanationExample>
                    </AutodeliveryExplanationContainer>
                    <AutodeliveryExplanationContainer>
                        <AutodeliveryExplanation>
                        지역명(동/리) + 건물명(아파트명)
                        </AutodeliveryExplanation>
                        <AutodeliveryExplanationExample>
                        예) 분당 주공,  연수동 주공3차
                        </AutodeliveryExplanationExample>
                    </AutodeliveryExplanationContainer>
                    <AutodeliveryExplanationContainer>
                        <AutodeliveryExplanation>
                        사서함명 + 번호
                        </AutodeliveryExplanation>
                        <AutodeliveryExplanationExample>
                        예) 분당우체국사서함 1~100
                        </AutodeliveryExplanationExample>
                    </AutodeliveryExplanationContainer>
                    </>
                    )
                    }
                    <AutodeliveryCheckButton onClick={GetApiData}>
                        조회하기
                    </AutodeliveryCheckButton>
                </AutodeliveryWrapper>
            </AutodeliveryContainer>
        </div>
    )
}

export default Autodelivery
