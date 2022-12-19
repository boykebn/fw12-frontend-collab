import {
    Navbar,
    Container,
    Card,
    Image,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import "../profile/profile-page.css";
import Navbar1 from "../../components/Navbar";
import Footer from "../../components/Footer";
import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio2.png";
import portfolio3 from "../../assets/images/portfolio3.png";
import portfolio4 from "../../assets/images/portfolio4.png";
import portfolio5 from "../../assets/images/portfolio5.png";
import portfolio6 from "../../assets/images/portfolio6.png";
import suitcase from "../../assets/images/suitcase.png";
import sidenav from "../profile/sidenav/sidenav";

const profile = () => {
    return (
        <div style={{ backgroundColor: "#E5E5E5" }}>
    <Navbar1 />
    <Navbar bg="custem mb-2" style={{ height: "250px" }}>
        <div className="edit">
        <Button variant="success" size="sm" >Edit Profile</Button>
        </div>
    </Navbar>
    <Container style={{ marginTop: "-200px", marginBottom: "80px" }}>
        <Row>
        <Col md={5} lg={4} className="mb-3">
        <sidenav />
        </Col>
        <Col md={7} lg={8}>
            <Card className="p-3 border-0">
            <h6 style={{ fontWeight: "700" }}>Pengalaman Kerja</h6>
            <Row>
                <Col lg={4}>
                <Image src={portfolio1} className="w-100 my-3" />
                <p className="text-center">Remainder app</p>
                </Col>
                <Col lg={4}>
                <Image src={portfolio2} className="w-100 my-3" />
                <p className="text-center">Social media app</p>
                </Col>
                <Col lg={4}>
                <Image src={portfolio3} className="w-100 my-3" />
                <p className="text-center">Project management app</p>
                </Col>
                <Col lg={4}>
                <Image src={portfolio4} className="w-100 my-3" />
                <p className="text-center">Remainder app</p>
                </Col>
                <Col lg={4}>
                <Image src={portfolio5} className="w-100 my-3" />
                <p className="text-center">Social media app</p>
                </Col>
                <Col lg={4}>
                <Image src={portfolio6} className="w-100 my-3" />
                <p className="text-center">Project management app</p>
                </Col>
            </Row>
            </Card>
            <Card className="p-3 border-0 mt-4">
            <h6 style={{ fontWeight: "700" }}>Pengalaman Kerja</h6>
            <div className="d-flex">
                <div className="m-3">
                <Image src={suitcase} width={50} height={50} />
                </div>
                <div>
                <h5 className="position">Engineer</h5>
                <p className="company">Tokopedia</p>
                <div>
                    <span className="text">July 2019 - January 2020</span>
                    <span className="text">6 months</span>
                </div>
                <p className="text mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi deserunt repellendus atque? Sit doloribus tempora
                    repellendus aliquam commodi deleniti corrupti?
                </p>
                </div>
            </div>
            <div className="d-flex">
                <div className="m-3">
                <Image src={suitcase} width={50} height={50} />
                </div>
                <div>
                <h5 className="position">Engineer</h5>
                <p className="company">Tokopedia</p>
                <div>
                    <span className="text">July 2019 - January 2020</span>
                    <span className="text">6 months</span>
                </div>
                <p className="text mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi deserunt repellendus atque? Sit doloribus tempora
                    repellendus aliquam commodi deleniti corrupti?
                </p>
                </div>
            </div>
            </Card>
        </Col>
        </Row>
    </Container>
    <Footer />
    </div>
    );
};

export default profile;