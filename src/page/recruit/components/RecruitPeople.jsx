import styled from "styled-components";
import RecruitPeopleImg from "./RecruitPeopleImg";

const RecruitPeople = () => {
  const imgList = [
    {
      url: "http://into-on.com/wp-content/uploads/2018/11/1_gray.jpg",
      colorUrl: "http://into-on.com/wp-content/uploads/2018/11/1.jpg",
    },
    {
      url: "http://into-on.com/wp-content/uploads/2018/11/2_gray.jpg",
      colorUrl: "http://into-on.com/wp-content/uploads/2018/11/2.jpg",
    },
    {
      url: "http://into-on.com/wp-content/uploads/2018/11/3_gray.jpg",
      colorUrl: "http://into-on.com/wp-content/uploads/2018/11/3.jpg",
    },
    {
      url: "http://into-on.com/wp-content/uploads/2018/11/4_gray.jpg",
      colorUrl: "http://into-on.com/wp-content/uploads/2018/11/4.jpg",
    },
    {
      url: "http://into-on.com/wp-content/uploads/2018/11/5_gray.jpg",
      colorUrl: "http://into-on.com/wp-content/uploads/2018/11/5.jpg",
    },
    {
      url: "http://into-on.com/wp-content/uploads/2018/11/6_gray.jpg",
      colorUrl: "http://into-on.com/wp-content/uploads/2018/11/6.jpg",
    },
  ];
  return (
    <Container>
      {imgList.map((img, i) => {
        return (
          <RecruitPeopleImg key={i} url={img.url} colorUrl={img.colorUrl} />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: left;
  justify-content: center;
  flex-direction: row;
  text-align: left;
  max-width: 1200px;
  margin-top: 50px;
  margin-left: 130px;
`;

export default RecruitPeople;
