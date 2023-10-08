import React from 'react';
import Image from 'next/image'

const Images = ({ src, alt, width, height, className, objectFit, sizes, layout }) => {
    return (
        <>
            {
                layout == 'fill' ?
                    <Image
                        src={src}
                        alt={alt || 'Aspire Softserv'}
                        className={className}
                        blurDataURL
                        objectFit={objectFit}
                        sizes={sizes}
                        layout={layout}
                    /> :
                    <Image
                        src={src}
                        alt={alt || 'Aspire Softserv'}
                        width={width || "400px"}
                        height={height || "150px"}
                        className={className}
                        blurDataURL
                        objectFit={objectFit}
                        sizes={sizes}
                        layout={layout}
                    />
            }
        </>
    )
}

export default Images
