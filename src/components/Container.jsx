const Container = ({ children, contnavbar }) => {
  return <div className={`container ${contnavbar}`}>{children}</div>;
};

export default Container;
