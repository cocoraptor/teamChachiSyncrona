type Props = {
  children?: React.ReactNode;
};

export const MainWrapper = ({ children }: Props): React.ReactNode => {
  return (
    <div className="card">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainWrapper;
