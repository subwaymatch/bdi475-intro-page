import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Home.module.scss';
import Triangle from 'components/shapes/Triangle';
import StackedRectangles from 'components/shapes/StackedRectangles';
import HalfCircleTilted from 'components/shapes/HalfCircleTilted';
import IllinoisBlockILogo from 'components/shapes/IllinoisBlockILogo';
import DonutCircleSmall from 'components/shapes/DonutCircleSmall';
import DonutCircleMedium from 'components/shapes/DonutCircleMedium';
import Rectangle01 from 'components/shapes/Rectangle01';
import FullCircle from 'components/shapes/FullCircle';

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
      </Head>

      <div className={styles.sideFloatingBar}>
        <span className={styles.univName}>
          University of Illinois at Urbana-Champaign
        </span>{' '}
        <div className={styles.illinoisLogoWrapper}>
          <IllinoisBlockILogo color="#ffc9b9" />
        </div>
        <span className={styles.courses}>Business Data &amp; Innovation</span>{' '}
        <div className={styles.circleWrapper}>
          <DonutCircleMedium color="#ffc9b9" />
        </div>
      </div>

      <div className={styles.sideFloatingShapes}>
        <span className={styles.rectWrapper}>
          <Rectangle01 color="#ffc9b9" />
        </span>

        <span className={styles.circleWrapper}>
          <FullCircle color="#4c956c" />
        </span>
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
              <Triangle color="#4C956C" />
            </Col>

            <Col md={4}>
              <h3>Tableau</h3>
              <span className={styles.skillDesc}>Visualization Software</span>
              <StackedRectangles color="#d68c45" />
            </Col>

            <Col md={4}>
              <h3>Analytical Skills</h3>
              <span className={styles.skillDesc}>Logical Thinking</span>
              <HalfCircleTilted color="#ffc9b9" />
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
                    <HalfCircleTilted color="#D68C45" />
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
                    <DonutCircleSmall color="#4C956C" />
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
                <Triangle color="#ffc9b9" />
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
