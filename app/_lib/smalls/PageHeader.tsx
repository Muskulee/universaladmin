type PageHeaderProps = {
  headerTitle?: string;
  headerSubTitle?: string;
};

const PageHeader = ({ headerTitle, headerSubTitle }: PageHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-6xl font-bold text-center mb-8 mt-20 ">
        {headerTitle}
      </h1>
      <p className="mb-6 px-20 text-3xl text-center font-bold leading-snug text-white sm:text-2xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
        {headerSubTitle}
      </p>
    </div>
  );
};

export default PageHeader;
