import React from 'react';

const Education = ({ educations }) => (
	<section id="education" className="row">
		<aside className="col-sm-3">
			<h3>Education</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{educations.map(education => (
        <div className="col-sm-12" key={education.institution}>
          <h4 className="strike-through">
            <span>{education.institution}</span>
            <span className="date">
              {education.startDate} — {education.endDate}
            </span>
          </h4>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default Education;
