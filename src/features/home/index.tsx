import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@/components/button';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <div className="row">
      <div className="container">
        <Button warning onClick={() => history.push('/todos')}>
          Go to todo-list
        </Button>
      </div>
    </div>
  );
};

export default Home;
