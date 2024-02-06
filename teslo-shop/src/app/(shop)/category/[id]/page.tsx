import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function({params}: Props) {
  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id );

  const labels: Record<Category, string> = {
    'men': 'for men',
    'women': 'for women',
    'kid': 'for children',
    'unisex': 'for everyone'
  }

  /*if ( id === 'kids' ) {
     notFound();
  }*/

  return (
    <>
      <Title
        title={ `Articles of ${ labels[id] }` }
        subtitle="All the products"
        className="mb-2"  
      />
      <ProductGrid
        products={ products }
      />
    </>
  );
}