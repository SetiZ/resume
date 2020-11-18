import React from 'react';

const Languages = ({ languages }) => (
	<section id="languages" className="row">
		<aside className="col-sm-3">
			<h3>Languages</h3>
		</aside>
		<div className="col-sm-9">
      <div className="row">
          <div className="language">
            <ul className="keywords">
              {languages.keywords.map(keyword => (
                <li>{keyword}</li>
              ))}
            </ul>
          </div>
			</div>
		</div>
	</section>);

export default Languages;
