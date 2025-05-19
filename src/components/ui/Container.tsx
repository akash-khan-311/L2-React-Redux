type TContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto px-3 md:px-0">
      {children}
    </div>
  );
};

export default Container;
