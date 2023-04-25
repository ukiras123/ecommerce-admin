import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState();

  const getProductDetails = async (id) => {
    const { data: product } = await axios(`/api/products?id=${id}`);
    setProduct(product);
  };
  useEffect(() => {
    if (!id) {
      return;
    }
    getProductDetails(id);
  }, [id]);
  return (
    <Layout>
      <h1>Edit Product</h1>
      {product && <ProductForm {...product}></ProductForm>}
    </Layout>
  );
}

export default EditProductPage;
