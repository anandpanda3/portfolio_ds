import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import text from "../../Assets/Projects/text.png";
import chess from "../../Assets/Projects/chess.png";
import stackly from "../../Assets/Projects/stackly.png";
import bert from "../../Assets/Projects/bert.png";
import paaro from "../../Assets/Projects/paaro.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackly}
              isBlog={false}
              title="Stackly - Learn Smart, Stack Fast"
              description="Stackly is a search engine created for learning any computer science tech stack or domains. It is built using Streamlit, a popular Python library for creating web apps, and course data from OSSU - Open Source Society University. Stackly helps users to learn new technologies quickly and efficiently by providing a way to search for relevant online courses and resources."
              ghLink="https://github.com/anandpanda3/Stackly_"
              demoLink="https://stackly.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paaro}
              isBlog={false}
              title="P.A.A.R.O"
              description="PAARO is a Python-based virtual assistant that responds to voice commands and can perform various tasks such as web scraping, downloading Instagram profile data, detecting mood, and playing music from YouTube. The assistant can also retrieve metadata from images and tell you the current time."
              ghLink="https://github.com/anandpanda3/P.A.A.R.O"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess Engine"
              description="Developed a Python-based chess engine that uses the Minimax algorithm for decision-making, allowing it to evaluate possible moves and choose the best strategy.Integrated Alpha-Beta Pruning to optimize the engine's performance by reducing the number of nodes evaluated, increasing efficiency in move selection."
              ghLink="https://github.com/anandpanda3/chess-engine"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="AI Customer Chatbot"
              description="This project involves building an AI-powered customer support chatbot using Next.js and the OpenAI API. The goal is to create a responsive chat interface that can handle user queries and provide accurate responses using a Large Language Model (LLM)."
              ghLink="https://github.com/anandpanda3/AI-Customer-Support"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bert}
              isBlog={false}
              title="BERT for Sentiment Analysis API Deployment"
              description="Deployed a pre-trained BERT model using FastAPI to analyze text sentiment (negative, neutral, positive). The API processes text inputs, classifies sentiment, and returns confidence scores. Fine-tuned the model with a custom dataset from Google Play reviews to improve classification accuracy for real-world applications, ensuring robust performance."
              ghLink="https://github.com/anandpanda3/Deploy-BERT-Sentiment-Analysis-"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="End-to-End Text Summarization System"
              description="Developed and deployed a custom text summarization system using Python, FastAPI, and Docker. Automated deployment on AWS (EC2, ECR) with Terraform, and integrated CI/CD pipelines via GitHub Actions. The system efficiently summarizes large text data and ensures scalable, seamless performance through containerization and cloud services."
              ghLink="https://github.com/anandpanda/text-summarizer"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
