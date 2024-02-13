import styles from "./index.module.css";
const TravelAgency = () => {
  return (
    <div className={styles.travelAgency}>
      <div className={styles.decoration}>
        <div className={styles.circle}>
          <div className={styles.div} />
          <img
            className={styles.icon}
            alt="background-circle-2"
            id="background-circle-2"
            src="/02@2x.png"
          />
        </div>
        <img
          className={styles.ellipseIcon}
          alt=""
          id="circle-deco"
          src="/ellipse@2x.png"
        />
        <img
          className={styles.vectorIcon}
          alt="map"
          id="map-deco"
          src="/vector.svg"
        />
        <img
          className={styles.girlWearingAHatHoldingCreIcon}
          alt="girl"
          id="girl-deco"
          src="/girlwearingahatholdingcreditcardandsuitcas20210831124934utc-1@2x.png"
        />
        <img
          className={styles.lineIcon}
          alt=""
          id="line-deco"
          src="/line.svg"
        />
        <img
          className={styles.planeIcon}
          alt="plane-deco"
          id="plane-deco"
          src="/plane@2x.png"
        />
      </div>
      <div className={styles.navbar}>
        <div className={styles.background} />
        <a className={styles.soultravel} id="logo">
          <span>Soul</span>
          <span className={styles.travel}>Travel</span>
          <span>.</span>
        </a>
        <div className={styles.menu}>
          <div className={styles.destination}>Destination</div>
          <div className={styles.destination}>Package</div>
          <div className={styles.destination}>Blog</div>
          <div className={styles.destination}>About Us</div>
          <div className={styles.destination}>Contact</div>
        </div>
        <button className={styles.button}>
          <div className={styles.rectangle} />
          <div className={styles.signIn}>Sign In</div>
        </button>
        <button className={styles.signUp}>Sign Up</button>
        <div className={styles.rectangle1} />
      </div>
      <div className={styles.title}>
        <div className={styles.packYourLuggage}>
          Pack your luggage and pick your destination, we will provide you the
          flight ticket, hotel booking and best guides
        </div>
        <div className={styles.letsGoTheContainer}>
          <p className={styles.letsGo}>{`Let's go! `}</p>
          <p className={styles.letsGo}>
            <span className={styles.the}>{`The `}</span>
            <span className={styles.travel}>adventure</span>
            <span> is waiting for you</span>
          </p>
        </div>
      </div>
      <div className={styles.hotline}>
        <img className={styles.icon1} alt="" src="/icon.svg" />
        <div className={styles.number}>
          <div className={styles.destination}>Customer Service</div>
          <b className={styles.b}>+12 345 6789 0</b>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <img className={styles.passportIcon} alt="" src="/passport.svg" />
          <div className={styles.flightTickets}>Flight Tickets</div>
        </div>
        <div className={styles.text1}>
          <img className={styles.passportIcon} alt="" src="/room-key.svg" />
          <div className={styles.flightTickets}>Hotel Booking</div>
        </div>
        <div className={styles.text2}>
          <img
            className={styles.passportIcon}
            alt=""
            src="/direction-sign.svg"
          />
          <div className={styles.flightTickets}>Tour Guide</div>
        </div>
        <div className={styles.text3}>
          <img className={styles.passportIcon} alt="" src="/distance.svg" />
          <div className={styles.flightTickets}>Local Events</div>
        </div>
      </div>
      <div className={styles.bookingForm}>
        <div className={styles.tabs} id="option-container">
          <div className={styles.div1} id="flight-container">
            <div className={styles.plane}>
              <img className={styles.vectorIcon1} alt="" />
              <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
            </div>
            <strong className={styles.flight}>Flight</strong>
          </div>
          <div className={styles.div2} id="hotel-container">
            <div className={styles.plane}>
              <img className={styles.vectorIcon1} alt="" />
              <img className={styles.vectorIcon6} alt="" src="/vector4.svg" />
              <img className={styles.vectorIcon7} alt="" src="/vector5.svg" />
              <img className={styles.vectorIcon8} alt="" src="/vector6.svg" />
              <img className={styles.vectorIcon9} alt="" src="/vector7.svg" />
              <img className={styles.vectorIcon10} alt="" src="/vector8.svg" />
              <img className={styles.vectorIcon11} alt="" src="/vector8.svg" />
              <img className={styles.vectorIcon12} alt="" src="/vector8.svg" />
              <img className={styles.vectorIcon13} alt="" src="/vector9.svg" />
              <img className={styles.vectorIcon14} alt="" src="/vector9.svg" />
              <img className={styles.vectorIcon15} alt="" src="/vector9.svg" />
              <img className={styles.vectorIcon16} alt="" src="/vector10.svg" />
              <img className={styles.vectorIcon17} alt="" src="/vector11.svg" />
              <img className={styles.vectorIcon18} alt="" src="/vector10.svg" />
              <img className={styles.vectorIcon19} alt="" src="/vector11.svg" />
              <img className={styles.vectorIcon20} alt="" src="/vector12.svg" />
              <img className={styles.vectorIcon21} alt="" src="/vector12.svg" />
              <img className={styles.vectorIcon22} alt="" src="/vector13.svg" />
              <img className={styles.vectorIcon23} alt="" src="/vector13.svg" />
            </div>
            <strong className={styles.rent}>Hotel</strong>
          </div>
          <div className={styles.div3} id="rnt-container">
            <div className={styles.plane}>
              <img className={styles.vectorIcon1} alt="" />
              <img className={styles.vectorIcon25} alt="" src="/vector14.svg" />
              <img className={styles.vectorIcon26} alt="" src="/vector15.svg" />
              <img className={styles.vectorIcon27} alt="" src="/vector16.svg" />
              <img className={styles.vectorIcon28} alt="" src="/vector16.svg" />
              <img className={styles.vectorIcon29} alt="" src="/vector17.svg" />
              <img className={styles.vectorIcon30} alt="" src="/vector18.svg" />
              <img className={styles.vectorIcon31} alt="" src="/vector19.svg" />
            </div>
            <strong className={styles.rent}>Rent</strong>
          </div>
        </div>
        <div className={styles.content1} id="form-container">
          <div className={styles.form}>
            <div className={styles.destination1}>
              <div className={styles.destination}>Destination</div>
              <div className={styles.form1}>
                <div className={styles.content2}>
                  <strong className={styles.parisFrance} id="Paris, France">
                    Paris, France
                  </strong>
                  <div className={styles.location}>
                    <img
                      className={styles.vectorIcon32}
                      alt=""
                      src="/vector20.svg"
                    />
                  </div>
                </div>
                <img className={styles.plane} alt="" src="/chevrondown.svg" />
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.date}>
              <div className={styles.destination}>Date</div>
              <div className={styles.form1}>
                <div className={styles.date2}>
                  <div className={styles.calendar}>
                    <img
                      className={styles.vectorIcon33}
                      alt=""
                      src="/vector21.svg"
                    />
                  </div>
                  <b className={styles.july2021}>17 July 2021</b>
                </div>
                <img className={styles.plane} alt="" src="/chevrondown.svg" />
              </div>
            </div>
          </div>
          <button className={styles.button1}>
            <div className={styles.search}>Search</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelAgency;
