  
import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  
`;

export const StoryTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  font-weight:500;
  margin: 0;
  text-decoration: none;
  a {
    color: #2e2e2c;
    text-decoration: none;
    font-weight:nomral;
  }
`;

export const StoryBody = styled.div`
  font-style: italic;
 
`;

export const StoryBodyElement = styled.span`
margin: 0 8px 0 0;
font-size:10px;
a{
    color: #0277bd;
    -webkit-text-decoration: none;
    text-decoration: none
}
`;