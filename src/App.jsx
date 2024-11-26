import "./App.css";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Images from "./components/Images";
import logo from "./assets/Logo.png";
import Menu from "./components/Menu";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "./components/Button";
import HeadingA from "./components/HeadingA";
import Heading from "./components/Heading";
import CardImg1 from "./assets/CardImg1.png";
import CardImg2 from "./assets/CardImg2.png";
import CardImg3 from "./assets/CardImg3.png";
import AboutImage from "./assets/AboutImage.png";
import AboutImage1 from "./assets/AboutImage1.png";
import ab from "./assets/1.png";
import abA from "./assets/2.png";
import abB from "./assets/3.png";
import abC from "./assets/4.png";
import abD from "./assets/5.png";
import abE from "./assets/6.png";

const Navbar = () => (
  <>
    <div id="nav" className="fixed inset-0 bg-navclr bg-transparent z-50">
      <Container>
        <Flex className={"py-5  items-center justify-between"}>
          <div className="">
            <Images src={logo} alt={logo} />
          </div>
          <div className=" font-sans">
            <Flex className={"gap-[40px]"}>
              <Flex className={"items-center gap-1"}>
                <Menu
                  mText={"Home"}
                  className={
                    "text-mText text-[18px] font-semibold hover:text-btnclr"
                  }
                />
                <FaAngleDown />
              </Flex>
              <Flex className={"items-center gap-1"}>
                <Menu
                  mText={"About"}
                  className={
                    "text-mText text-[18px] font-semibold hover:text-btnclr"
                  }
                />
                <FaAngleDown />
              </Flex>
              <Flex className={"items-center gap-1"}>
                <Menu
                  mText={"Service"}
                  className={
                    "text-mText text-[18px] font-semibold hover:text-btnclr"
                  }
                />
                <FaAngleDown />
              </Flex>
              <Flex className={"items-center gap-2"}>
                <Menu
                  mText={"Portfolio"}
                  className={
                    "text-mText text-[18px] font-semibold hover:text-btnclr"
                  }
                />
                <FaAngleDown />
              </Flex>
              <Flex className={"items-center gap-1"}>
                <Menu
                  mText={"Price"}
                  className={
                    "text-mText text-[18px] font-semibold hover:text-btnclr"
                  }
                />
                <FaAngleDown />
              </Flex>
              <Flex className={"items-center gap-1"}>
                <Menu
                  mText={"Blog"}
                  className={
                    "text-mText text-[18px] font-semibold hover:text-btnclr"
                  }
                />
                <FaAngleDown />
              </Flex>
            </Flex>
          </div>
          <div className=" font-sans">
            <Button
              btnText={"Contact Us"}
              className={
                "h-[64px] w-[150px] text-navclr bg-btnclr rounded-full"
              }
            />
          </div>
        </Flex>
      </Container>
    </div>
  </>
);
const Banner = () => (
  <>
    <div className="bg-banBg py-60 bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="pt-[320px pb-[77px]">
          <HeadingA
            text={"We Are Digital #Marketing# Agency"}
            className={"font-extrabold text-[72px] font-sans pr-[280px]"}
          />
          <Heading
            text={
              "Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "
            }
            as={"p"}
            className={"text-pText text-5 font-sans pt-5 pb-[64px] pr-[773px]"}
          />
          <Button
            btnText={"Get Free Quato"}
            className={
              "w-[232px] h-[62px] bg-btnclr rounded-full text-white text-5 font-bold font-sans"
            }
          />
        </div>
      </Container>
    </div>
  </>
);
const Service = () => (
  <div className="bg-abutBG">
    <Container className={"pb-[75px]"}>
      <div className="text-center">
        <Heading
          text={"Our Services"}
          className={"text-mText text-[48px] font-sans"}
          as={"h3"}
        />
        <Heading
          text={"We have been providing great flooring solutions service."}
          className={"text-pText text-[18px] font-sans px-[450px] pb-[52px]"}
          as={"p"}
        />
      </div>
      <Flex className={"gap-[30px]"}>
        <div className="bg-cardBg1 p-[28px] rounded-[20px]">
          <Images src={CardImg1} alt={CardImg1} className={"m-auto pb-7"} />
          <Heading
            text={"MARKETING STRATEGY"}
            as={"h4"}
            className={
              "text-[20px]  font-semibold font-sans text-cardText text-center pb-[18px]"
            }
          />
          <Heading
            text={
              "Social Media has changed the way we interact & do business while creating"
            }
            as={"p"}
            className={
              "text-[18px] px-[44px] mb-[26px] font-sans text-pText text-center"
            }
          />
          <div>
            <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[-260%] -translate-y-[15%] "></div>
            <Button
              btnText={"Read more"}
              className={
                "relative bg-transparent ml-[100px] font-bold text-[18px] text-cardText "
              }
            />
          </div>
        </div>
        <div className="bg-cardTextB p-[28px] rounded-[20px]">
          <Images src={CardImg2} alt={CardImg2} className={"m-auto pb-7"} />
          <Heading
            text={"Social Marketing"}
            as={"h4"}
            className={
              "text-[20px]  font-semibold font-sans text-cardText text-center pb-[18px]"
            }
          />
          <Heading
            text={
              "Social Media has changed the way we interact & do business while creating a new avenue."
            }
            as={"p"}
            className={
              "text-[18px] px-[44px] mb-[26px] font-sans text-pText text-center"
            }
          />
          <div>
            <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[-260%] -translate-y-[15%] "></div>
            <Button
              btnText={"Read more"}
              className={
                "relative bg-transparent ml-[100px] font-bold text-[18px] text-cardText "
              }
            />
          </div>
        </div>
        <div className="bg-cardTextC p-[28px] rounded-[20px]">
          <Images src={CardImg3} alt={CardImg3} className={"m-auto pb-7"} />
          <Heading
            text={"Content Marketing"}
            as={"h4"}
            className={
              "text-[20px]  font-semibold font-sans text-cardText text-center pb-[18px]"
            }
          />
          <Heading
            text={
              "Content Marketing is the other fold of online advertisement. If you are looking to build"
            }
            as={"p"}
            className={
              "text-[18px] px-[44px] mb-[26px] font-sans text-pText text-center"
            }
          />
          <div>
            <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[-260%] -translate-y-[15%] "></div>
            <Button
              btnText={"Read more"}
              className={
                "relative bg-transparent ml-[100px] font-bold text-[18px] text-cardText "
              }
            />
          </div>
        </div>
      </Flex>
    </Container>
  </div>
);
const AboutUs = () => (
  <div className="bg-abutBG py-[30px]">
    <Container>
      <Flex className={" justify-between gap-[130px]"}>
        <div className="w-1/2">
          <Images src={AboutImage} alt={AboutImage} />
        </div>
        <div className="w-1/2">
          <Images src={AboutImage1} />
          <Heading
            text={"Who We Are"}
            as={"h4"}
            className={"pt-4 text-[48px] font-extrabold font-sans text-mText"}
          />
          <Heading
            text={
              "We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, "
            }
            as={"h4"}
            className={
              "pt-4 text-[18px] pr-[100px] font-sans text-pText relative"
            }
          />
          <Heading
            text={"Join the 10.000+ Companys Trusting "}
            as={"p"}
            className={"text-pText text-2 absolute -translate-y-[110%]"}
          />
          <div className="pt-[30px]">
            <Flex>
              <Images src={ab} alt={ab} />
              <Images src={abA} alt={abA} />
              <Images src={abB} alt={abB} />
            </Flex>
          </div>
          <div>
            <Flex>
              <Images src={abC} alt={abC} />
              <Images src={abD} alt={abD} />
              <Images src={abE} alt={abE} />
            </Flex>
          </div>
        </div>
      </Flex>
    </Container>
  </div>
);
const Showcase = () => (
  <div className="bg-abutBG py-[100px]">
    <Container>
      <div>
        <Images src={AboutImage1} alt={AboutImage1} className={"m-auto pb-4"} />
        <Heading
          text={"Work Showcase "}
          as={"h3"}
          className={
            "text-[48px] font-extrabold text-mText text-center pb-[48px]"
          }
        />
      </div>
      <div className="text-center flex gap-x-[40px] font-sans font-semibold text-pText pb-[52px]">
        <Menu mText={"All"} className="hover:text-btnclr" />
        <Menu mText={"Digital Mkt"} className="hover:text-btnclr" />
        <Menu mText={"Branding"} className="hover:text-btnclr" />
        <Menu mText={"Content Mkt"} className="hover:text-btnclr" />
        <Menu mText={"Social Media Mkt"} className="hover:text-btnclr" />
      </div>
      <div className="">
        <Flex className={"justify-between pb-[30px]"}>
          <div className="w-[276px] h-[344px] bg-boxBG rounded-[20px]"></div>
          <div className="w-[561px] h-[344px] bg-boxBG rounded-[20px]"></div>
          <div className="w-[270px] h-[344px] bg-boxBG rounded-[20px]"></div>
        </Flex>
        <Flex className={"justify-between"}>
          <div className="w-[413px] h-[432px] bg-boxBG rounded-[20px]"></div>
          <div className="w-[327px] h-[432px] bg-boxBG rounded-[20px]"></div>
          <div className="w-[370px] h-[432px] bg-boxBG rounded-[20px]"></div>
        </Flex>
      </div>
    </Container>
  </div>
);
const Process = () => (
  <div className="bg-abutBG">
    <Container>
      <div>
        <Images src={AboutImage1} alt={AboutImage1} className={"m-auto pb-4"} />
        <Heading
          text={"Our creative process."}
          as={"h3"}
          className={
            "text-[48px] font-extrabold text-mText text-center pb-[20px]"
          }
        />
        <Heading
          text={
            "We provide digital experience services to startups and small businesses."
          }
          as={"p"}
          className={"text-[18px] text-pText text-center pb-[52px] px-[385px]"}
        />
      </div>
      <Flex className={"gap-x-7 z-0"}>
        <div className="">
          <div className="bg-cardBg1 p-6 w-[465px] h-[207px] rounded-[20px] mt-[110px] pb-[58px] animate__animated animate__backInDown ">
            <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[0%] -translate-y-[15%] z-[-1]"></div>
            <Heading
              text={"Step-1"}
              as={"p"}
              className={
                "relative bg-transparent ml-4  font-bold text-[18px] text-cardText"
              }
            />
            <Heading
              text={"Global SEO Research"}
              as={"h5"}
              className={
                "text-[30px] font-sans font-semibold text-cardText pt-4"
              }
            />
            <Heading
              text={
                "Practical tools and features make it easier to build and manage your site."
              }
              as={"p"}
              className={"text-[18px] font-sans text-pText pr-[87px]"}
            />
          </div>
          <div className="w-[570px] h-[324px] bg-boxBG rounded-[20px] my-[58px]  animate__animated animate__backInLeft"></div>
          <div className="bg-cardTextC p-6 w-[465px] h-[207px] rounded-[20px] pb-[58px]  animate__animated animate__backInUp">
            <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[0%] -translate-y-[15%] "></div>
            <Heading
              text={"Step-3"}
              as={"p"}
              className={
                "relative bg-transparent ml-4  font-bold text-[18px] text-cardText"
              }
            />
            <Heading
              text={"Launching the Application"}
              as={"h5"}
              className={
                "text-[30px] font-sans font-semibold text-cardText pt-4"
              }
            />
            <Heading
              text={
                "Practical tools and features make it easier to build and manage your site."
              }
              as={"p"}
              className={"text-[18px] font-sans text-pText pr-[87px]"}
            />
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="">
          <div className="w-[570px] h-[324px] bg-boxBG rounded-[20px] my-[58px] animate__animated animate__backInRight"></div>
          <div className="bg-cardTextB p-6 w-[465px] h-[207px] rounded-[20px] pb-[58px] animate__animated  animate__backInDown">
            <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[0%] -translate-y-[15%]  "></div>
            <Heading
              text={"Step-2"}
              as={"p"}
              className={
                "relative bg-transparent ml-4  font-bold text-[18px] text-cardText "
              }
            />
            <Heading
              text={"Launching the Application"}
              as={"h5"}
              className={
                "text-[30px] font-sans font-semibold text-cardText pt-4"
              }
            />
            <Heading
              text={
                "Practical tools and features make it easier to build and manage your site."
              }
              as={"p"}
              className={"text-[18px] font-sans text-pText pr-[87px]"}
            />
          </div>
          <div className="w-[570px] h-[324px] bg-boxBG rounded-[20px] my-[58px] animate__animated animate__backInRight"></div>
        </div>
      </Flex>
    </Container>
  </div>
);
const Rewiev = () => (
  <div className="bg-abutBG py-10">
    <Container>
      <Flex className={"justify-between"}>
        <div className="w-[348px] h-[386px] bg-transparent ">
          <Images src={AboutImage1} alt={AboutImage1} />
          <Heading
            text={"Client Review"}
            as={"h4"}
            className={"text-[48px] font-sans font-extrabold text-mText"}
          />
          <Heading
            text={
              "people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  "
            }
            as={"p"}
            className={"text-[18px] text-pText"}
          />
          <Flex className={"gap-x-[25px]"}>
            <div className="w-[64px] h-[64px] bg-btnclr rounded-full opacity-35">
              <FaAngleLeft
                className={
                  "text-white absolute -translate-x-[-150%] -translate-y-[-150%] "
                }
              />
            </div>
            <div className="w-[64px] h-[64px] bg-btnclr rounded-full">
              <FaAngleRight
                className={
                  "text-white absolute -translate-x-[-150%] -translate-y-[-150%]"
                }
              />
            </div>
          </Flex>
        </div>
        {/* ---------------------------Second Card--------------     */}
        <div className="bg-cardTextB w-[370px] h-[378px] rounded-[20px] pt-[25px] pl-[50px] relative">
          <Heading
            text={
              "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
            }
            as={"p"}
            className={" pr-[80px] text-[18px] text-pText"}
          />
          <Heading
            text={"Jane Cooper"}
            as={"h5"}
            className={
              "font-semibold text-[24px] font-sans ms-24 pt-[24px] text-cardText"
            }
          />
          <Heading
            text={"Fashion Designer"}
            as={"p"}
            className={" text-[18px] font-sans ms-24  text-cardText"}
          />
          <div className="w-[37px] h-[37px] bg-btnclr rounded-full absolute bottom-[65px] left-[100px] text-white">
            <span className=" absolute -translate-x-1/2 -translate-y-1/2 top-4 left-5">
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.319789 13L0 12.4291C0.390854 10.8723 1.02155 8.9348 1.89209 6.61677C2.76263 4.29874 3.69534 2.09315 4.69025 0H7.96809C6.79553 4.39388 5.88057 8.72721 5.22323 13H0.319789Z"
                  fill="white"
                />
                <path
                  d="M17.6003 0L18 0.570858C17.5381 2.30073 16.8719 4.31603 16.0013 6.61677C15.1308 8.9002 14.2247 11.0279 13.2831 13H10.0319C11.2755 8.06986 12.1816 3.73653 12.7501 0H17.6003Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* -----------------------------Third card-----------       */}
        <div className="bg-navclr w-[370px] h-[378px] rounded-[20px] pt-[25px] pl-[50px] relative">
          <Heading
            text={
              "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
            }
            as={"p"}
            className={" pr-[80px] text-[18px] text-pText"}
          />
          <Flex>
            <div className="h-[94px] w-[94px] rounded-full bg-boxBG"></div>
            <div>
              <Heading
                text={"Eleanor Pena"}
                as={"h5"}
                className={
                  "font-semibold text-[24px] font-sans pl-4 pt-[24px] text-cardText"
                }
              />
              <Heading
                text={"Architecture"}
                as={"p"}
                className={" text-[18px] font-sans pl-4  text-cardText"}
              />
              <div className="w-[37px] h-[37px] bg-btnclr rounded-full absolute bottom-[65px] left-[100px] text-white">
                <span className=" absolute -translate-x-1/2 -translate-y-1/2 top-4 left-5">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.319789 13L0 12.4291C0.390854 10.8723 1.02155 8.9348 1.89209 6.61677C2.76263 4.29874 3.69534 2.09315 4.69025 0H7.96809C6.79553 4.39388 5.88057 8.72721 5.22323 13H0.319789Z"
                      fill="white"
                    />
                    <path
                      d="M17.6003 0L18 0.570858C17.5381 2.30073 16.8719 4.31603 16.0013 6.61677C15.1308 8.9002 14.2247 11.0279 13.2831 13H10.0319C11.2755 8.06986 12.1816 3.73653 12.7501 0H17.6003Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Flex>
        </div>
      </Flex>
    </Container>
  </div>
);
const Blog = () => (
  <div className="bg-abutBG py-[40px]">
    <Container>
      <div className="">
        <Images src={AboutImage1} alt={AboutImage1} className={"m-auto"} />
        <Heading
          text={"Our Latest Blog"}
          as={"h4"}
          className={" font-extrabold text-[48px] text-mText text-center"}
        />
        <Heading
          text={
            "We provide digital experience services to startups and small businesses."
          }
          as={"p"}
          className={
            "  text-[18px] text-pText px-[376px] text-center pb-[52px]"
          }
        />
      </div>
      <Flex className={'justify-between'}>
        <div className="">
          <div className="w-[369px] h-[241px] bg-boxBG rounded-t-[20px]"></div>
          <div className="rounded-b-[20px] bg-[#FFF] w-[369px] h-[241px] pl-[30px]">
            <Heading
              text={"How to Be Ahead of Stock Changes"}
              as={"h6"}
              className={"font-medium text-[24px] pr-[130px] pt-[30px] pb-[16px] text-mText"}
            />
            <Heading text={"By John  - 5 Comments"} as={"p"} className={"pb-[34px] text-pText text-[18px]"} />
            <div>
              <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[+20%] -translate-y-[15%] "></div>
              <Button
                btnText={"Read more"}
                className={
                  "relative bg-transparent  font-bold text-[18px] pl-3 text-cardText "
                }
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[369px] h-[241px] bg-boxBG rounded-t-[20px]"></div>
          <div className="rounded-b-[20px] bg-[#EFEFEF] w-[369px] h-[241px] pl-[30px]">
            <Heading
              text={"How to Be Ahead of Stock Changes"}
              as={"h6"}
              className={"font-medium text-[24px] pr-[130px] pt-[30px] pb-[16px] text-mText"}
            />
            <Heading text={"By John  - 5 Comments"} as={"p"} className={"pb-[34px] text-pText text-[18px]"} />
            <div>
              <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[+20%] -translate-y-[15%] "></div>
              <Button
                btnText={"Read more"}
                className={
                  "relative bg-transparent  font-bold text-[18px] pl-3 text-cardText "
                }
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[369px] h-[241px] bg-boxBG rounded-t-[20px]"></div>
          <div className="rounded-b-[20px] bg-[#FFF] w-[369px] h-[241px] pl-[30px]">
            <Heading
              text={"How to Be Ahead of Stock Changes"}
              as={"h6"}
              className={"font-medium text-[24px] pr-[130px] pt-[30px] pb-[16px] text-mText"}
            />
            <Heading text={"By John  - 5 Comments"} as={"p"} className={"pb-[34px] text-pText text-[18px]"} />
            <div>
              <div className="w-[33px] h-[33px] bg-btnclr rounded-full  absolute   -translate-x-[+20%] -translate-y-[15%] "></div>
              <Button
                btnText={"Read more"}
                className={
                  "relative bg-transparent  font-bold text-[18px] pl-3 text-cardText "
                }
              />
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  </div>
);
const Footer =() =>(
  <div className="bg-navclr pt-[140px] pb-[57px]">
    <Container>

     <div>
     <Flex className={''}>
      <div className="w-[40%]">
        <Images src={logo} alt={logo}/>
        <Heading  text={'Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.'} as={'p'} className={'text-pText text-[18px] pt-[44px]'}/>
      </div>
      <div className="">
        <Flex>
          {/* --------------------Features ------------- */}
      <div className="pl-[50px]">
        <Menu mText={"Features"} className={'text-[24px] font-semibold text-[#413F45] pb-[48px]'}/>
        <Menu mText={"Home"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"About"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"Benifit"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"Pricing"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"Blog"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
      </div>
      {/* ----------------------------- Products------------------ */}
      <div className="pl-[100px]">
        <Menu mText={"Products"} className={'text-[24px] font-semibold text-[#413F45] pb-[48px]'}/>
        <Menu mText={"Task Management"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"Company growth"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"Time tracking"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
      </div>
      {/* ---------------------------Support--------------------------- */}
      <div className="pl-[100px]">
        <Menu mText={"Support"} className={'text-[24px] font-semibold text-[#413F45] pb-[48px]'}/>
        <Menu mText={"Customer service"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"Accessibility"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
        <Menu mText={"Contact us"} className={'text-pText text-[20px] font-semibold pb-[30px]'}/>
      </div>
        </Flex>
      </div>
      </Flex>
     </div>
     <div className="pt-[60px]">
      <Flex>
        <Heading text={'@20201 Innovate.All rights reserved.'} as={'p'} className={'text-[18px] text-pText'}/>
        <Heading text={'Privacy policy'} as={'p'} className={'text-[18px] text-pText pr-[60px] ms-auto'}/>
        <Heading text={'Terms & condition'} as={'p'} className={'text-[18px] text-pText'}/>
      </Flex>
     </div>

    </Container>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <AboutUs />
      <Showcase />
      <Process />
      <Rewiev />
      <Blog />
      <Footer />
    </>
  );
}

export default App;







