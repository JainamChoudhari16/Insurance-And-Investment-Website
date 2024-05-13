import Card from "./Card";
import homeImage from "../Images/ins/homeImage.png";
import autoImage from "../Images/ins/autoImage.png";
import travelImage from "../Images/ins/travelImage.png";
import lifeImage from "../Images/ins/lifeImage.png";
import kidcareImage from "../Images/ins/kidcareImage.png";
import healthImage from "../Images/ins/healthImage.png";
function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Life Insurance"
          imgsrc={lifeImage}
          desc="Ensure your loved ones' future with our life insurance solutions, offering financial security and support."
          linktopage="/products/life"
        />
        <Card
          title="Health Insurance"
          imgsrc={healthImage}
          desc="Stay healthy and secure with our health insurance plans, providing coverage for your medical needs."
          linktopage="/products/life"
        />
        <Card
          title="Auto Insurance"
          imgsrc={autoImage}
          desc="Drive with confidence knowing you're covered by our reliable auto insurance, offering protection on the road."
          linktopage="/products/life"
        />
        <Card
          title="KidCare Insurance"
          imgsrc={kidcareImage}
          desc="Protect your child's well-being with our KidCare insurance, prioritizing their health and happiness."
          linktopage="/products/life"
        />
        <Card
          title="Home Insurance"
          imgsrc={homeImage}
          desc="Secure your home with our comprehensive insurance coverage, tailored to protect your property and belongings."
          linktopage="/products/life"
        />
        <Card
          title="Travel Insurance"
          imgsrc={travelImage}
          desc="Explore the world worry-free with our travel insurance, providing peace of mind for your adventures."
          linktopage="/products/life"
        />
      </div>
    </div>
  );
}

export default Products;
