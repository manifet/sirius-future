const PagesWrapper: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  return <div className="w-full max-w-[1390px] flex items-end">{children}</div>;
};
export default PagesWrapper;
