import { useState, useEffect } from "react";
import styled from "styled-components";
import Project from "./Project";

const ProjectBox = () => {
  const [list, setList] = useState();
  const category = window.location.pathname.split("/")[2];
  const projectList = [
    {
      id: 0,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2022/12/main_500-3.jpg",
      title: "Talk Show",
      content: "2022",
      category: "webinar",
    },
    {
      id: 1,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2022/12/main_500-2.jpg",
      title: "Virtual System",
      content: "2022",
      category: "webinar",
    },
    {
      id: 2,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2022/12/hybrid-2.png",
      title: "Hybrid Symposium",
      content: "2022",
      category: "webinar, others",
    },
    {
      id: 3,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2022/12/main_500.jpg",
      title: "Webinar",
      content: "2022",
      category: "webinar",
    },
    {
      id: 4,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2020/02/메인-5.jpg",
      title: "Lexcion diorama",
      content: "DEC 2019 / SEOUL",
      category: "others",
    },
    {
      id: 5,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2020/02/메인-3.jpg",
      title: "BAYER",
      content: "KCR2019/ SEP 2019 / SEOUL",
      category: "space",
    },
    {
      id: 6,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2020/02/메인-2.jpg",
      title: "Gilead",
      content: "The Liver Week / JUN 2019 / BUSAN, KOREA",
      category: "space, others",
    },
    {
      id: 7,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2020/02/메인.jpg",
      title: "LG Chem",
      content: "IDF / DEC 2019 / BUSAN, KOREA",
      category: "space",
    },
    {
      id: 8,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2019/09/메인.jpg",
      title: "THE K9 X Lexcion",
      content: "/ JUN 2019 / Incheon",
      category: "space, boothtainer",
    },
    {
      id: 9,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2019/05/메인.jpg",
      title: "BAYER",
      content: "/ KCR2017/ OCT 2017 / SEOUL",
      category: "space",
    },
    {
      id: 10,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/12/GDteam_project-thumb_04.Takeda_Madipine_181210.jpg",
      title: "Takeda Madipine Ad",
      content: "/ Apr 2017",
      category: "graphic",
    },
    {
      id: 11,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/12/GDteam_project-thumb_03.CKD_Dilatrend_181210.jpg",
      title: "CKD Dilatrend SR Ads",
      content: "/ Apr 2017",
      category: "graphic",
    },
    {
      id: 12,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/12/GDteam_project-thumb_02.MSD_keytruda_181210.jpg",
      title: "MSD Keytruda Ad",
      content: "/ Jan 2018",
      category: "graphic",
    },
    {
      id: 13,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/12/GDteam_project-thumb_01.Leopharma_Enstilum_181210.jpg",
      title: "LEO Pharma Enstilum Launch",
      content: "/ June 2018",
      category: "graphic",
    },
    {
      id: 14,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-23.jpg",
      title: "AMGEN",
      content: "/ ICBMT / AUG 2018 / BUSAN",
      category: "space",
    },
    {
      id: 15,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-21.jpg",
      title: "LG Chem",
      content: "/ ADA / JUN 2018 / USA",
      category: "space",
    },
    {
      id: 16,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-19.jpg",
      title: "2018 Yuhan Symposium",
      content: " / 2018 ~",
      category: "planning",
    },
    {
      id: 17,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-17.jpg",
      title: "SAMSUNG BIOEPIS",
      content: " / ESMO / SEP 2017 / SPAIN",
      category: "space",
    },
    {
      id: 18,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-15.jpg",
      title: "2018 MSD Annual Meeting",
      content: " / MAR 2018/ Paradise City Hotel",
      category: "planning",
    },
    {
      id: 19,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-14.jpg",
      title: "BAYER",
      content: " / ILCA / SEP 2017 / KOREA",
      category: "space",
    },
    {
      id: 20,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-11.jpg",
      title: "2018 Takeda Symposium",
      content: " / 2018 ~",
      category: "planning",
    },
    {
      id: 21,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-9.jpg",
      title: "SAMSUNG BIOEPIS",
      content: " / EULAR / JUN 2016 / UK",
      category: "space",
    },
    {
      id: 22,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-7.jpg",
      title: "Lexicon boothtainer",
      content: " / MAY 2018",
      category: "boothtainer",
    },
    {
      id: 23,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-5.jpg",
      title: "MSD DAY 2016",
      content: " / AUG 2016 / Seoul",
      category: "planning",
    },
    {
      id: 24,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인-2.jpg",
      title: "promotion Hall",
      content: "/ Pyeongchang Olympic 2018 / JAN 2018",
      category: "boothtainer",
    },
    {
      id: 25,
      url: "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/메인.jpg",
      title: "SAMSUNG BIOEPIS",
      content: " / ACG / OCT 2016 / USA",
      category: "space",
    },
  ];

  const getCategory = () => {
    if (category === "all") {
      setList(projectList);
    } else {
      const result = projectList.filter((projects) =>
        projects.category.includes(category)
      );
      setList(result);
    }
  };

  useEffect(() => {
    getCategory();
  }, [category]);

  return (
    <Container>
      {list?.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 0;
  margin: 0 auto 0 auto;
`;

export default ProjectBox;
