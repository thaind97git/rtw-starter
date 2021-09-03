const { useLocation } = require('react-router-dom');

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

export const getQuery = (name = ''): string => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery().get(name);
};

export default useQuery;
