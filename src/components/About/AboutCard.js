import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I am <span className="purple">Anand Panda </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            <br />
            Currently seeking internships and full-time opportunities in Machine Learning, I'm a passionate programmer and tech enthusiast who thrives on exploring new technologies.
            <br />
            <br />
            <br />
            I'm in my final year pursuing a B.Tech in Computer Science and Engineering at KIIT, Bhubaneswar. As a ML Enthusiast with a strong foundation in Data Structures and Algorithms, I've honed my skills in Machine Learning Frameworks (BERT, OpenAI, TensorFlow), NLP (FastAPI, Hugging Face Transformers), Database Management (MongoDB, SQL), and Cloud technologies (AWS, Docker, Kubernetes), along with extensive experience in developing and deploying scalable AI solutions
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
