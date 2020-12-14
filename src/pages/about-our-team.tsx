import React from "react";
import "../styles/about-our-team.css";

function About(): JSX.Element {
  return (
    <div className='AboutOurTeam'>
      <h1 className='Title'>About Us</h1>
      <hr className='ruler'></hr>
      <p className='description'>
      Team 5032 is Meadowvale Secondary School’s robotics team, located in Mississauga, Ontario. Since our establishment in 2014, we annually compete in the First Robotics Competition. Our accomplishments include competing in the FRC provincial competition (2017) and finishing in second place for the FRC Humber College competition (2020).
      <br></br>
      <p></p>
      <br></br>
      As firm believers of providing all students with opportunities in the STEM and Business fields, we also assist our local middle school’s First Lego League Team.
      <br></br>
      <p></p>
      <br></br>
      Our continued growth and success over the past 7 years is a reflection of the countless members, mentors, and sponsors that have supported us throughout the years and allow us to positively impact our community by bringing people together through STEM.
      </p>
      <h2 className='Title'>Our Team</h2>
      <p className='description'>
      Our team is composed of a diverse group of students aged 14 to 18, all working together, learning and teaching each other in a positive and motivational environment. Our team is made up of multiple division heads who are responsible for their respective sections. These Leads perform jobs such as teaching and mentoring team members and leading their sections through specific tasks like designing or manufacturing. Since separate sections have different responsibilities in regards to building our robot, we are able to function like a well-oiled machine.
      </p>
      <h3 className='Title'>Mechanical</h3>
      <p className='description'>
      The mechanical team is responsible for putting the many parts of our robot together. They use tools like drills, wrenches, impact drivers, bolts and screws to achieve their tasks. They are also responsible for manufacturing certain parts of the robot.
      </p>
      <h3 className='Title'>Design</h3>
      <p className='description'>
      Our design team is responsible for the CAD of our robot, which is based on the requirements of the year’s competition outlined by FIRST. They primarily use Fusion 360 to CAD these designs. Furthermore, they help manage a CNC machine which we use to manufacture parts.
      </p>
      <h3 className='Title'>Electrical</h3>
      <p className='description'>
      Our Electrical team is responsible for the wiring of our robot. These members of our team use components like roboRIOs, Power distribution panels, and motor controllers to complete a circuit that meets the needs of the many components of our robot and ensures that they can function safely and properly.
      </p>
      <h3 className='Title'>Programming</h3>
      <p className='description'>
      The programming team writes and tests code in various programming languages which allows our robot to work in the way that we intend it to. The tireless efforts of the programming team also allows our drive team to effectively use controllers, vision systems, which also allows us to autonomously control our robot during the autonomous period of the competition.
      </p>
      <h3 className='Title'>Business</h3>
      <p className='description'>
      Our Business team is responsible for the creation of promotional material which allows us to secure funding from sponsors. They also help manage the club’s finances and the organization of numerous events such as fundraisers and other community outreach programs. Furthermore, they monitor the team’s presence on our Instagram account and website, and manage our award submissions.
      </p>
      <h3 className='Title'>Drive Team</h3>
      <p className='description'>
      Our drive team is responsible for driving our robot during the competition. This team generally consists of a human player and drivers. The drivers are responsible for controlling the movements of the robot, and a single driver may control a few components. However, the role of the human player changes based on the scenario of the competition.
      </p>
      <h3 className='Title'>Mentors</h3>
      <p className='description'>
      The mentors are the foundation of our team. They help us organize events and help us manage the team’s finances and materials. They also teach us many skills like programming, machining and designing throughout the year that carry over to the build season and allow us to build a highly competitive robot.
      </p>
      <br></br>
      <p></p>
      <br></br>
    </div>
  );
}

export default About;
