import styled from "styled-components";

export const CommentWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;
  color: #37474f;
  font-size: 12px;
  line-height: 24px;
  &:first-of-type {
    border-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CommentBodyElement = styled.span`
  margin: 0 8px 0 0;
  font-size: 10px;
  color: #90a4ae;
  a {
    color: #90a4ae;
  }
`;
