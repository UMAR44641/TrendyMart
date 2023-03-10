import React, { useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";


const Button = styled.button`
  border: 1px solid black;
  margin: 0 auto;
  width: 85%;
  position: absolute;
  font-weight: bold;
  top: 56%;
  bottom: 34%;
  display: none;
  background: rgba(255, 255, 255, 0.6) none repeat scroll 0% 0% / auto
    padding-box border-box;
  z-index: 99;
`;
const Container = styled.div`
  border: 1px solid #f5f5f5;
  position: relative;
  padding: 0 20px;
  overflow: hidden;
  height: 370px;
  &:hover ${Button} {
    display: block;
  }
`;

const SlideItem = styled.img`
  height: 100%;
  width: 90%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: auto;
`;


const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  text-align: center;
  margin-top: -40px;
  & span {
    font-size: 12px;
    color: gray;
  }
  & h6 {
    font-size: 13px;
    font-weight: bold;
    margin: 0;
  }
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "2.5rem",
        width: "2.5rem",
        marginRight: "-25px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "2.5rem",
        width: "2.5rem",
        marginLeft: "-25px",
      }}
      onClick={onClick}
    />
  );
}

const RecommendSlider = ({category}) => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    getData();
  }, [category]);
  const getData = async () => {
    let res = await fetch(
      `https://courageous-tuxedo-dog.cyclic.app/products?category=${category}`
    );
    res = await res.json();
    setData(res);
  };

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 816,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ width: "75%", margin: "auto", marginTop: "50px" }}>
      <div style={{ width: "100%", margin: "auto" }}>
        <h1
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          RECOMMENDED FOR YOU
        </h1>
      </div>
      <Slider {...settings}>
        {data?.slice(22, 40).map((e) => (
          <Container>
            <Link to={`/products/${e._id}`}>
              <div
                style={{
                  display: "flex",
                  border: "none",
                  justifyContent: "center",
                  padding: "20px 8px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "240px",
                    overflow: "hidden",
                  }}
                >
                  <SlideItem src={e.url} />
                </div>
              </div>
              <TextDiv>
                <h5
                  style={{
                    color: "black",
                    fontSize: "17px",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "17px",
                  }}
                >
                  {e.title}
                </h5>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                  }}
                >
                  INR {e.price}
                </p>
              </TextDiv>
            </Link>
          </Container>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendSlider;
