import { useState, useEffect } from "react";
import { useProduct } from "../lib/hooks";

export function ProductDetail({id}){
    const { data, error, isLoading } = useProduct(id);
    const [product, setProduct] = useState([]) as any;

    useEffect(() => {
      if (data) {
        setProduct([{
          nombre: data.name,
          descripcion: data.description,
          sku: data.sku,
        }]);
      }
    }, [data]);

    if(error) return (<div>No existe dicho producto</div>);
    if(isLoading) return (<div>Fetching product</div>)

  return (
   <div>
      Soy el detalle del producto
    <div>
      {product.map((e: any)=>{
        return (
          <div>
            <h3>{e.nombre}</h3>
            <p>{e.descripcion}</p>
            <p>{e.sku}</p>
          </div>
        )
      })
      }
    </div>
   </div>
  );
}