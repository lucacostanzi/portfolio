import React from 'react';
import { Media, Content } from 'reactbulma';

const Bio = () => (
  <div className="columns " style={{ marginBottom: 200, marginTop: 200 }} >
    <div className="column is-8 is-offset-2 " style={{ padding: 20 }} >
      <Media>
        <Media.Left>
          <figure className="image is-64x64" ><img alt="" src="images/pic3.jpg" />
          </figure>
        </Media.Left>
        <Media.Content>
          <Content>
            <div className=" is-size-5 content" style={{ overflow: 'hidden' }} >
              <p className="title is-4" >Luca Costanzi</p>
              <p className="subtitle is-6 has-text-link" style={{ lineHeight: 'inherit' }} >luca.costanzi@gmail.com</p>
            </div>
          </Content>
        </Media.Content>
      </Media>
      <div className="is-size-5 content" >
        I'm a 35 years old full stack developer at Kasper Digitale Media. In the last years I've been involved in
        many medium to large sized projects for clients ranging from Nissan to Partena Ziekenfonds.
        My weapon of choice has been php and its ecosystem, but in the last years, driven by an interest in
        new technologies, I've been moving more towards Javascript and front-end developing with React.
      </div>

    </div>
  </div>
);


export default Bio;
