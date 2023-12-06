import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("9d95e552-6085-43d8-a0ea-fa54c6641b15");

  return (
    <Container>
      <div className="space-y-10 pb-10">
          <div style={{paddingTop: "40px"}}>
            <h1 className="text-center text-6xl tracking-widest" style={{paddingBottom: "10px"}}>LORRAINE <br /></h1>
            <p className="text-center text-sm tracking-widest">Experience exquisite taste</p>
          </div>
        <Billboard 
          data={billboard}
        />
        <h3 className="font-bold text-3xl text-center">Our Products</h3>
        <div style = {{paddingBottom: "45px"}}>
        <h2 className="text-center leading-loose">Step into a realm where fashion meets innovation. <br />
          Our curated collection isn't just about garments; it's a gateway to a world 
          where every piece tells a story of creativity and style. <br /> Experience the fusion of striking designs, 
          cutting-edge fabrics, and avant-garde trends meticulously crafted to ignite your imagination. <br />
          Each visit promises a journey through a kaleidoscope of innovation, inviting you to explore
           and embrace the extraordinary. <br /> Discover a new dimension in fashion as you delve into our 
           captivating range, designed to inspire and elevate your wardrobe to unparalleled heights.</h2>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;