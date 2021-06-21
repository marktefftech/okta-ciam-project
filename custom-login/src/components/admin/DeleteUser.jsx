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
import { Header, Icon} from 'semantic-ui-react';
import React, { useState } from 'react';


const Admin = () => {

  const [userId, setUserId] = useState();

  const handleSubmit= (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "SSWS 00Mp_W4Bv5jGlnZaA1jZmW-aELECIKOXxZ6XBJRqOm");

    var raw = "";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    var userIdString = {userId}
    var url = "https://coachella.okta.com/" + "/api/v1/users/" + userId + "/lifecycle/deactivate"

    fetch( url , requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        alert("Successfully deactivated the user");
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="cardContainerAdmin">
      <div>
        <Header as="h1">
          <Icon name="circle notched" />
          {' '}
          Deactivate Users
          {' '}
        </Header>
        <form onSubmit={e=>handleSubmit(e)}>
        <label>User ID</label>
        <br />
        <input 
          name='userId' 
          type='text'
          onChange={e => setUserId(e.target.value)}
          value={userId}
        />
        <br/>
        <br/>
        <input 
          className='submitButton'
          type='submit' 
          value="Good bye"
        />
        </form>
      </div>
    </div>
  );
};

export default Admin;
