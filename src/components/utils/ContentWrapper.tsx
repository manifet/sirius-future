const ContentWrapper: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  return <div className="grow shrink w-full flex flex-col">{children}</div>;
};
export default ContentWrapper;
