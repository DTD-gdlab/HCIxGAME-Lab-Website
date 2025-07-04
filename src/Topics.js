import React, { useState, useEffect } from 'react';
import icon1 from './img/Topics_icon1.png'
import icon2 from './img/Topics_icon2.png'
import icon3 from './img/Topics_icon3.png'
import icon4 from './img/Topics_icon4.png'
import icon5 from './img/Topics_icon5.png'
import './Topics.css';
import TopicsData from './Topics.json';

function Topics() {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setTopics([...TopicsData]);
  }, []);

  // icon
  const iconNum = (id) => {
    let icon = ''
    if (id === 1) {
      icon = icon1
    }
    else if (id === 2) {
      icon = icon2
    }
    else if (id === 3) {
      icon = icon3
    }
    else if (id === 4) {
      icon = icon4
    }
    else if (id === 5) {
      icon = icon5
    }
    else {
      icon = icon1
    }
    return icon
  }

  return (
    <div id="topics" className='topics_box' >
      {/* <p>主題內容...</p> */}
      <div className='container'>
        <ul className='topics_cards'>
          {topics.map((topic) => (
            <li className='topics_outer' key={topic.id}>
              <div className='topics_card'>
                <div className='head'>
                  <div className='icon'>
                    <img src={iconNum(topic.id)} alt={`topic ${topic.id}`}></img>
                  </div>
                  <div className='title'>
                    <h4>{topic.title}</h4>
                    <h6 className='hidden_sm'>{topic.title_en}</h6>
                  </div>
                </div>
                <div className='body'>
                  <p>
                    {topic.describe}
                  </p>
                </div>
              </div>

            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default Topics;
