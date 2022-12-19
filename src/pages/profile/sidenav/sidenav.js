import { card, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {Envelope, Instagram, Github, Gitlab, GeoAlt, phone } from "react-bootstrap-icons";
import avatar from "../../../assets/images/test3.png";
import "../sidenav/sidenav.css";

const sidenav = () => {
    const history = useHistory()
    return (
        <>
        <card className="border-0 p-3">
            <Image className="mx-auto my-4" src={avatar} width={100} height={100} roundedCircle />
        <div>
        <h5 className="m-0" style={{ fontWeight:"700" }}>
            Louis Tomlinson
        </h5>
        <p className="m-0">
            <small> Web Development </small>
        </p>
        <span className="location">
        <GeoAlt size={14} className="mr-2" />
            Purwokerto, Jawa Tengah
        </span>
        <span className="phone">
        <phone size={14} className="mr-2" />
            0812-3456-789
        </span>
        <p className="m-0 text">Freelance</p>
        <p className="mt-3 text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            dolores nisi similique, eligendi autem sint corporis. Dolores, modi
            quam! Doloribus expedita sunt architecto accusamus saepe quaerat
            repellat a ad eligendi!
        </p>
        </div>
        <div className="mt-3 w-100">
        <Button variant="primary" onClick={() => history.push("/hire")} block>
            Hire
        </Button>
        </div>
        <div className="mt-3">
        <h5 className="mt-3" style={{ fontWeight: "700" }}>
            Skill
        </h5>
        <div className="my-3 d-flex flex-wrap">
            <span className="skill">Phyton</span>
            <span className="skill">Laravel</span>
            <span className="skill">Golang</span>
            <span className="skill">JavaScript</span>
            <span className="skill">PHP</span>
            <span className="skill">HTML</span>
            <span className="skill">C++</span>
            <span className="skill">Kotlin</span>
            <span className="skill">Swift</span>
        </div>
        </div>
        <div className="mt-3 text">
        <div className="mt-3">
            <Envelope size={16} />
            <span className="ml-2">louistomlinson@gmail.com</span>
        </div>
        <div className="mt-3">
            <Instagram size={16} />
            <span className="ml-2">@Louist91</span>
        </div>
        <div className="mt-3">
            <Github size={16} />
            <span className="ml-2">@Louistommo</span>
        </div>
        <div className="mt-3">
            <Gitlab size={16} />
            <span className="ml-2">@Louistommo91</span>
        </div>
        <div className="mt-3">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.6501 14.39L12.0001 22.13L1.35014 14.39C1.20737 14.285 1.10146 14.1375 1.04758 13.9687C0.993694 13.7998 0.994592 13.6183 1.05014 13.45L2.27014 9.66996L4.71014 2.15996C4.73381 2.09877 4.77148 2.04397 4.82014 1.99996C4.89938 1.92758 5.00282 1.88745 5.11014 1.88745C5.21746 1.88745 5.3209 1.92758 5.40014 1.99996C5.45153 2.04963 5.48939 2.11158 5.51014 2.17996L7.95014 9.66996H16.0501L18.4901 2.15996C18.5138 2.09877 18.5515 2.04397 18.6001 1.99996C18.6794 1.92758 18.7828 1.88745 18.8901 1.88745C18.9975 1.88745 19.1009 1.92758 19.1801 1.99996C19.2315 2.04963 19.2694 2.11158 19.2901 2.17996L21.7301 9.68996L23.0001 13.45C23.0507 13.6234 23.0439 13.8086 22.9808 13.9779C22.9178 14.1473 22.8018 14.2918 22.6501 14.39V14.39Z"
                stroke="#9EA0A5"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>

            <span className="ml-2">louistomlinson@gmail.com</span>
        </div>
        </div>
        </card>
        </>
    );
};

export default sidenav;