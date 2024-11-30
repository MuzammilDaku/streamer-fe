import Image from "next/image";
import styles from "../styles/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClapperboard, faHeart, faHouse, faRightFromBracket, faSliders, faTv } from "@fortawesome/free-solid-svg-icons";
export default function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className="container py-4" style={{ height: "100%" }}>
        <div className="logo d-flex align-items-center">
          <Image
            src={"/logo_stream.png"}
            width={40}
            height={40}
            alt="Watch Streaming ALl"
          ></Image>
          <span
            className="text-light mx-2"
            style={{ fontSize: "24px", lineHeight: "23px" }}
          >
            WATCH
          </span>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ flexDirection: "column", height: "100%" }}
        >
          <div className="my-5 mx-2">
            <div className={`d-flex align-items-center ${styles['sidebar-item']}`}>
            <FontAwesomeIcon
            className={styles.svg}
                icon={faHouse}
                color="#cbcbca"
                height={"24px"}
                width={"24px"}
                style={{ height: "24px", width: "24px" }}
              />
              <div className={`${styles["text-color"]} mx-2`}>Home</div>
            </div>
            <div className={`d-flex align-items-center ${styles['sidebar-item']} my-4`}>
              <FontAwesomeIcon
            className={styles.svg}

                icon={faTv}
                color="#cbcbca"
                height={"24px"}
                width={"24px"}
                style={{ height: "24px", width: "24px" }}
              />
              <div className={`${styles["text-color"]} mx-2`}>
                Live TV Streaming
              </div>
            </div>
            <div className={`d-flex align-items-center ${styles['sidebar-item']} my-4`}>
              <FontAwesomeIcon
            className={styles.svg}

                icon={faClapperboard}
                color="#cbcbca"
                height={"24px"}
                width={"24px"}
                style={{ height: "24px", width: "24px" }}
              />
              <div className={`${styles["text-color"]} mx-2`}>Movies</div>
            </div>
          </div>
          <div className="my-5 mx-2">
            <div className={`d-flex align-items-center ${styles['sidebar-item']}`}>
            <FontAwesomeIcon
            className={styles.svg}

                icon={faHeart}
                color="#cbcbca"
                height={"24px"}
                width={"24px"}
                style={{ height: "24px", width: "24px" }}
              />
              <div className={`${styles["text-color"]} mx-2`}>Favourites</div>
            </div>
            <div className={`d-flex align-items-center ${styles['sidebar-item']} my-4`}>
            <FontAwesomeIcon
            className={styles.svg}

                icon={faCalendar}
                color="#cbcbca"
                height={"24px"}
                width={"24px"}
                style={{ height: "24px", width: "24px" }}
              />
              <div className={`${styles["text-color"]} mx-2`}>Coming Soon</div>
            </div>
          </div>
          <div className="my-5 mx-2">
            <div className={`d-flex align-items-center ${styles['sidebar-item']}`}>
            <FontAwesomeIcon
                icon={faSliders}
            className={styles.svg}

                color="#cbcbca"
                height={"24px"}
                width={"24px"}
                style={{ height: "24px", width: "24px" }}
              />
              <div className={`${styles["text-color"]} mx-2`}>Settings</div>
            </div>
            <div className={`d-flex align-items-center ${styles['sidebar-item']} my-4`}>
            <FontAwesomeIcon
                icon={faRightFromBracket}
            className={styles.svg}

                color="#cbcbca"
                height={"24px"}
                width={"24px"}
                style={{ height: "24px", width: "24px" }}
              />
              <div className={`${styles["text-color"]} mx-2`}>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
