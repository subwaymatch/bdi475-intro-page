import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Home.module.scss';
import Triangle from 'components/shapes/Triangle';
import StackedRectangles from 'components/shapes/StackedRectangles';
import HalfCircleTilted from 'components/shapes/HalfCircleTilted';

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
      <section className={styles.overview}>
        <Container>
          <Row className={styles.courseMetaData}>
            <Col md={4}>
              <span className={styles.label}>Credit</span>
              <span className={styles.value}>3 Hours</span>
            </Col>

            <Col md={4}>
              <span className={styles.label}>Term </span>
              <span className={styles.value}>Spring 2020</span>
            </Col>

            <Col md={4}>
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

          <Row className={styles.skillsRow}>
            <Col md={4}>
              <h3>Python</h3>
              <span className={styles.skillDesc}>Programming Language</span>
              <Triangle />
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
    </div>
  );
}
