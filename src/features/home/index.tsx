import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@/components/button';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <div className="row">
      <Button warning onClick={() => history.push('/todos')}>
        Go to todo-list
      </Button>
    </div>
  );
};

export default Home;
