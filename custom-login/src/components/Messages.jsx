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

import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Header, Icon, Message, Table } from 'semantic-ui-react';

import config from '../config';

const Messages = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [messages, setMessages] = useState(null);
  const [messageFetchFailed, setMessageFetchFailed] = useState(false);

  // fetch messages
  useEffect(() => {
    if (authState.isAuthenticated) {
      const accessToken = oktaAuth.getAccessToken();
      fetch(config.resourceServer.messagesUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            return Promise.reject();
          }
          return response.json();
        })
        .then((data) => {
          let index = 0;
          const formattedMessages = data.messages.map((message) => {
            const date = new Date(message.date);
            const day = date.toLocaleDateString();
            const time = date.toLocaleTimeString();
            index += 1;
            return {
              date: `${day} ${time}`,
              text: message.text,
              id: `message-${index}`,
            };
          });
          setMessages(formattedMessages);
          setMessageFetchFailed(false);
        })
        .catch((err) => {
          setMessageFetchFailed(true);
          /* eslint-disable no-console */
          console.error(err);
        });
    }
  }, [authState]);

  const possibleErrors = [
    'You\'ve downloaded one of our resource server examples, and it\'s running on port 8000.',
    'Your resource server example is using the same Okta authorization server (issuer) that you have configured this React application to use.',
  ];

  return (
    <div className="cardContainer">
      <Header as="h1">
        <Icon name="money bill alternate outline" />
        My Transactions
      </Header>
      {messageFetchFailed && <Message error header="Failed to fetch messages.  Please verify the following:" list={possibleErrors} />}
      {!messages && !messageFetchFailed && <p>Fetching Messages..</p>}
      {messages
      && (
      <div>
        <p>
          This component makes a
          {' '}
          <code className="codeText">GET</code>
          {' '}
          request to the messages microservice running on
          <code className="codeText"> localhost:8000/api/messages </code>
        </p>
        <p>
          It attaches your current access token in the
          {' '}
          <code className="codeText">Authorization</code>
          {' '}
          header. After authenticating, it outputs the list of transactions on the resource server:
        </p>
        <Table>
          <thead>
            <tr>
              <th>Day of Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr id={message.id} key={message.id}>
                <td>{message.date}</td>
                <td>{message.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h3>Next Steps</h3>
        <div>
          <ul>
            <li>
              <p>
                Now that we have seen authentication in action, continue on to the
                {' '}
                <a href="/admin"> administrator tab</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      )}
    </div>
  );
};

export default Messages;
