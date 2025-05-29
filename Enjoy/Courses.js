 // Courses.js
import React, { Component } from 'react';
import './Courses.css';
class Courses extends Component {
  renderSection(title, courses, duration, fees, note = '') {
    return (
        <> 
      <div className="section">
        <h3>{title}</h3>
        <div className="icons">
          {courses.map((course, index) => (
            <div key={index} className="icon-box">
              <i className={`bi ${course.icon} icon`}></i>
              <p>{course.label}</p>
            </div>
          ))}
        </div>
        <p className="details">Duration: {duration} 
            <br/>
             Fees: {fees} {note && `| ${note}`}</p>
        
      </div>
      <a className="or">OR</a>
      <br/>
     
      </>
       
    );
  }

  render() {
    return (
      <div className="courses-container">
        <h2>Pick any one of the following</h2>

        {this.renderSection('Web Development', [
          { label: 'HTML 5', icon: 'bi-filetype-html' },
          { label: 'CSS 3', icon: 'bi-filetype-css' },
          { label: 'Bootstrap', icon: 'bi-bootstrap' },
          { label: 'GitHub', icon: 'bi-github' }
        ], '1 month', '₹5,000')}

        {this.renderSection('Programming Language (Any one)', [
          { label: 'Python', icon: 'bi-filetype-py' },
          { label: 'C++', icon: 'bi-filetype-cpp' },
          { label: 'Java', icon: 'bi-filetype-java' },
          { label: 'JavaScript', icon: 'bi-filetype-js' },
          { label: 'TypeScript', icon: 'bi-filetype-tsx' },
          { label: 'Ruby', icon: 'bi-gem' },
          { label: 'Swift', icon: 'bi-lightning-fill' },
          { label: 'C', icon: 'bi-filetype-c' }
        ], '2 months', '₹7,000')}

        {this.renderSection('Mobile Development', [
          { label: 'Android Development', icon: 'bi-phone' },
          { label: 'iOS Development', icon: 'bi-phone-fill' },
          { label: 'Mobile Designing', icon: 'bi-phone-landscape' }
        ], '2 months', '₹12,000')}

        {this.renderSection('Manual Testing', [
          { label: 'Web App Testing', icon: 'bi-globe' },
          { label: 'Mobile Testing', icon: 'bi-phone' },
          { label: 'API Testing', icon: 'bi-gear-wide-connected' },
          { label: 'DB Testing', icon: 'bi-database' }
        ], '2 months', '₹12,000')}

        {this.renderSection('Automation (Any one)', [
          { label: 'Selenium', icon: 'bi-cpu' },
          { label: 'Cypress', icon: 'bi-diagram-3' }
        ], '2 months', '₹12,000', 'Prerequisites: Manual Testing, JavaScript, Java')}

        {this.renderSection('DBMS', [
          { label: 'Python', icon: 'bi-filetype-py' },
          { label: 'DBMS', icon: 'bi-database' }
        ], '2 months', '₹12,000')}
      </div>
    );
  }
}
export default Courses;
