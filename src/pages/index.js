import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = (props) => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories categories={props?.categories} />
      <FeaturedProducts products={props?.products} />
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const categoriesRes = await fetch(`${process.env.API_URL}/api/v1/category`);
  const productsRes = await fetch(`${process.env.API_URL}/api/v1/products`);
  const categories = await categoriesRes.json();
  const products = await productsRes.json();
  // console.log(products);

  return {
    props: {
      categories: categories?.data || [],
      products: products?.data || [],
    },
  };
};
