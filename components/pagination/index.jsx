// import Pagination from 'react-bootstrap/Pagination';
const Pagination = ({ count, active, size }) => {
  let pageCount = count / size;

  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <div key={number} active={number === active}>
        {number}
      </div>
    );
  }

  return <>{items}</>;
};

export default Pagination;
