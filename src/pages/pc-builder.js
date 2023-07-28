import RootLayout from "@/components/Layouts/RootLayout";

const PcBuilder = () => {
  return (
    <div>
      <h1>Pc bulder</h1>
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
