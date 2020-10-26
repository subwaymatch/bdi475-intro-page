import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useCycle } from 'framer-motion';
import styles from './Home.module.scss';
import Triangle from 'components/shapes/Triangle';
import StackedRectangles from 'components/shapes/StackedRectangles';
import HalfCircleTilted from 'components/shapes/HalfCircleTilted';
import IllinoisBlockILogo from 'components/shapes/IllinoisBlockILogo';
import DonutCircleSmall from 'components/shapes/DonutCircleSmall';
import DonutCircleMedium from 'components/shapes/DonutCircleMedium';
import Rectangle01 from 'components/shapes/Rectangle01';
import FullCircle from 'components/shapes/FullCircle';

const loaderVariants = {
  animationTopCircle: {
    scale: [0.9, 1],
    transition: {
      scale: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  },
  animationRightRect: {
    x: [-20, 20],
    y: [0, -20],
    rotate: [-30, 30],
    transition: {
      rotate: {
        yoyo: Infinity,
        duration: 4,
      },
      x: {
        yoyo: Infinity,
        duration: 2,
      },
      y: {
        yoyo: Infinity,
        duration: 1,
        ease: 'easeOut',
      },
    },
  },
  animationRightCircle: {
    y: [10, -10],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 1,
        ease: 'easeOut',
      },
    },
  },
  tilt: {
    rotate: [-2, 2, -2],
    scale: [0.98, 1],
    transition: {
      rotate: {
        yoyo: Infinity,
        duration: 3,
      },
      scale: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  },
  tilt2: {
    rotate: [-4, 2, -4],
    scale: [0.92, 1],
    transition: {
      rotate: {
        yoyo: Infinity,
        duration: 2,
      },
      scale: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  },
};

const CourseTopicItem = ({ text }) => {
  return (
    <div className={styles.courseTopicItem}>
      <div className={styles.text}>{text}</div>
      <div className={styles.arrow}>🡒</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>
          BDI475 Introduction to Data Analytics Applications in Business
        </title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a9b7bf" />
        <meta name="msapplication-TileColor" content="#505d64" />
        <meta name="theme-color" content="#505d64"></meta>
      </Head>

      <div className={styles.sideFloatingBar}>
        <span className={styles.univName}>
          University of Illinois at Urbana-Champaign
        </span>{' '}
        <div className={styles.illinoisLogoWrapper}>
          <IllinoisBlockILogo color="#ffc9b9" />
        </div>
        <span className={styles.courses}>Business Data &amp; Innovation</span>{' '}
        <motion.div
          variants={loaderVariants}
          animate="animationTopCircle"
          className={styles.circleWrapper}
        >
          <DonutCircleMedium color="#ffc9b9" />
        </motion.div>
      </div>

      <div className={styles.sideFloatingShapes}>
        <motion.span
          variants={loaderVariants}
          animate="animationRightRect"
          className={styles.rectWrapper}
        >
          <Rectangle01 color="#ffc9b9" />
        </motion.span>

        <motion.span
          variants={loaderVariants}
          animate="animationRightCircle"
          className={styles.circleWrapper}
        >
          <FullCircle color="#4c956c" />
        </motion.span>
      </div>

      <section className={styles.overview}>
        <Container>
          <Row className={styles.courseMetaData}>
            <Col xs={4}>
              <span className={styles.label}>Credit</span>
              <span className={styles.value}>3 Hours</span>
            </Col>

            <Col xs={4}>
              <span className={styles.label}>Term </span>
              <span className={styles.value}>Spring 2020</span>
            </Col>

            <Col xs={4}>
              <span className={styles.label}>Instructor</span>
              <span className={styles.value}>Ye Joo Park</span>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <h1>Introduction to Data Analytics Applications in Business</h1>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div className={styles.lineSpacer} />
            </Col>

            <Col md={8}>
              <p className={styles.courseDesc}>
                BDI 475 introduces the role, methods, and implications of data
                analytics in business. The course will provide you the
                opportunity to apply related theoretical and practical
                principles to a variety of business scenarios.
              </p>
            </Col>
          </Row>

          <Row className={styles.skills}>
            <Col md={4}>
              <h3>Python</h3>
              <span className={styles.skillDesc}>Programming Language</span>
              <motion.div variants={loaderVariants} animate="tilt">
                <Triangle color="#4C956C" />
              </motion.div>
            </Col>

            <Col md={4}>
              <h3>Tableau</h3>
              <span className={styles.skillDesc}>Visualization Software</span>
              <motion.div variants={loaderVariants} animate="tilt">
                <StackedRectangles color="#d68c45" />
              </motion.div>
            </Col>

            <Col md={4}>
              <h3>Analytical Skills</h3>
              <span className={styles.skillDesc}>Logical Thinking</span>
              <motion.div variants={loaderVariants} animate="tilt">
                <HalfCircleTilted color="#ffc9b9" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.courseTopics}>
        <Container>
          <Row>
            <Col md={12}>
              <h2>Course Topics</h2>

              <CourseTopicItem text="Introduction to Python and Logical Thinking" />
              <CourseTopicItem text="Interactive Programming with Jupyter Notebooks" />
              <CourseTopicItem text="Working with Data using Pandas" />
              <CourseTopicItem text="Data Visualization with Python using Seaborn" />
              <CourseTopicItem text="Tableau Data Visualization Software" />
              <CourseTopicItem text="Exploratory Data Analysis" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.prerequisites}>
        <Container>
          <Row>
            <Col md={12}>
              <h2>Prerequisites</h2>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className={styles.item}>
                <Row className="align-items-center">
                  <Col xs={2}>
                    <motion.div variants={loaderVariants} animate="tilt2">
                      <HalfCircleTilted color="#D68C45" />
                    </motion.div>
                  </Col>

                  <Col xs={10}>
                    <h3>Statistics</h3>
                    <p>Just the basics</p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={6}>
              <div className={styles.item}>
                <Row className="align-items-center">
                  <Col xs={2}>
                    <motion.div variants={loaderVariants} animate="tilt2">
                      <DonutCircleSmall color="#4C956C" />
                    </motion.div>
                  </Col>

                  <Col xs={10}>
                    <h3>Laptop</h3>
                    <p>Minimum 4GB of RAM</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <div className={styles.item}>
            <Row className="align-items-center">
              <Col xs={2} md={1}>
                <motion.div variants={loaderVariants} animate="tilt2">
                  <Triangle color="#ffc9b9" />
                </motion.div>
              </Col>
              <Col xs={10} md={11}>
                <h3>No Other Course Required</h3>
                <p>
                  This course does not require any other course as a
                  prerequisite
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <footer className={styles.footer}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} md={9} xs={10}>
              <p>
                If you have any questions or concerns regarding the course, feel
                free to email me at <a>ypark32@illinois.edu</a>.
              </p>
            </Col>

            <Col
              lg={{ span: 1, offset: 3 }}
              md={{ span: 1, offset: 2 }}
              xs={{ span: 2, offset: 0 }}
            >
              <IllinoisBlockILogo color="#ffffff" />
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
