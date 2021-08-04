/* eslint-disable */
/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
import React, { Component } from 'react';
import '../index.css';
import { Accordion, Icon, Image } from 'semantic-ui-react';


export default class Flows extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  }

  render () {
  const { activeIndex } = this.state;

  return (
    <div>
      <div className="flowContainer">
        <h2 className="flowText">Authorization Code Flow</h2>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Authorization Code Flow for Web Applications
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Image size="massive" src="/img/flows/web.png" />
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Authorization Code Flow for Native Apps
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Image size="massive" src="/img/flows/native.png" />
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Authorization Code Flow for Single Page Apps
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Image size="massive" src="/img/flows/spa.png" />
          </Accordion.Content>
        </ Accordion>
      </div>
      <br />
      <div className="flowContainer">
        <h2 className="flowText">Client Credentials Flow</h2>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Client Credentials Grant for M2M Applications
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </Accordion.Content>
        </ Accordion>
      </div>
      <br />
      <div className="flowContainer">
        <h2 className="flowText">Resource Owner Password (Deprecated)</h2>
      </div>
      <br />
      <div className="flowContainer">
        <h2 className="flowText">Implicit Flow (Deprecated)</h2>
      </div>
      {/* <img src={"https://p.kindpng.com/picc/s/123-1239680_star-wars-lightsaber-science-fiction-blue-lightsaber-glow.png"} alt="Logo" /> */}
    </div>
  );
  }
};

