import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {faHome, faEnvelope, faUserGraduate,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadingText from '../HeadingText/HeadingText';

const Education = () => {
  return (
    <div className='educationside'>
      <br/>
      <HeadingText title={'Education'} titlePrimary={'Degree'} />
      <VerticalTimeline lineColor='#5a7bc8'>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "#5a7bc8", color:"white"}}
        icon={<FontAwesomeIcon icon={faHome}/>}>
          <h3 className='degree'> My school high school, Abia state</h3>
          <p className='degpee'>High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "#5a7bc8", color:"white"}}
        icon={<FontAwesomeIcon icon={faUserGraduate}/>}>
          <h3 className='degree'> My school high school, Abia state</h3>
          <p className='degpee'>High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "#5a7bc8", color:"white"}}
        icon={<FontAwesomeIcon icon={faEnvelope}/>}>
          <h3 className='degree'> My school high school, Abia state</h3>
          <p className='degpee'>High School Diploma </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
   
  )
}

export default Education
