import React from 'react';

interface TitleProps {
  classes?: string;
  text?: string;
}

const Title: React.FC<TitleProps> = ({ classes, text }) => {
  return (
    <div>
      <h1 className={!classes ? 'title text-center' : 'title'}>
        {!text ? 'Title' : text}
      </h1>
    </div>
  );
};

export default Title;
