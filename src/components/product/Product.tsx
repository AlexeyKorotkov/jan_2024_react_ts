import React, {FC} from 'react';

export interface IProductProps {


    "id"?: number,
    "title"?: string,
    "description"?: string,
    "price"?: number,
    "discountPercentage"?: number,
    "rating"?: number,
    "stock"?: number,
    "brand"?: string,
    "category"?: string,
    "images"?: string [],

}

type IProductTypeProps = IProductProps & { children?: React.ReactNode }
const Product: FC <IProductTypeProps> = ({
                                             title,
                                             description,
                                             price,
                                             brand,
                                             images}) => {
    return (
        <div>
            <h2>{title}.{description}.{price}.{brand}</h2>

                {
                    // images?.map((image,index)=><li key={index}>{image}</li> )
                images?.map((image,index)=> <img key={index} src={image} alt={brand}/>)

                }
                {/*<img src={[images]} alt={brand}/>*/}



        </div>
    );
};

export default Product;