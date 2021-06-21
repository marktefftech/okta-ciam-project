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
import React from 'react';
import '../index.css';


const Flows = () => {

  return (
    <div>
      <div className="flowContainer">
        <h2 className="flowText">Authorization Code Flow</h2>
      </div>
      <br />
      <div className="flowContainer">
        <h2 className="flowText">Authorization Code Flow with PKCE</h2>
      </div>
      <br />
      <div className="flowContainer">
        <h2 className="flowText">Resource Owner Password</h2>
      </div>
      <br />
      <div className="flowContainer">
        <h2 className="flowText">Client Credentials Flow</h2>
      </div>
      <br />
      <div className="flowContainer">
        <h2 className="flowText">Implicit Flow</h2>
      </div>
      {/* <img src={"https://p.kindpng.com/picc/s/123-1239680_star-wars-lightsaber-science-fiction-blue-lightsaber-glow.png"} alt="Logo" /> */}
    </div>
  );
};

export default Flows;
