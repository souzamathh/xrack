import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorSelector from './ColorSelector';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  size?: string;
  dimensions?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = "" }) => {
  const [selectedColor, setSelectedColor] = useState('black');

  // Definir imagens por cor para cada produto
  const getImageByColor = (productId: string, color: string) => {
    const imagesByProductAndColor = {
      // Travessas Smart
      'smart': {
        'black': "/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png",
        'silver': "/lovable-uploads/1240ebf0-2af6-41b2-8b14-f1d4c7230d10.png",
        'graphite': "/lovable-uploads/6b62308b-28bc-4a19-bbeb-cc7f4e50e571.png"
      },
      // Travessas Style
      'style': {
        'black': "/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png",
        'silver': "/lovable-uploads/9169976d-f990-4d90-809c-af2bc7f90b5a.png",
        'graphite': "/lovable-uploads/1ef1429c-62e5-45d1-8103-1062783b90f7.png"
      },
      // Travessas Slim
      'slim': {
        'black': "/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png",
        'silver': "/lovable-uploads/2e4cf8fc-8d4c-4118-9386-6b7973d767f9.png",
        'graphite': "/lovable-uploads/dff748ae-2dc7-4726-908b-380326a09a56.png"
      },
      // Travessas Locker
      'locker': {
        'black': "/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png",
        'silver': "/lovable-uploads/6b65f466-455f-4a14-ad66-1f9812b255c0.png",
        'graphite': "/lovable-uploads/55bea723-7902-4f67-bf21-91eb042c8554.png"
      },
      // Travessas Tubular
      'tubular': {
        'black': "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png",
        'silver': "/lovable-uploads/5c131f44-e3f3-4a2f-8739-ecb95b4e6842.png",
        'graphite': "/lovable-uploads/3685848f-39f6-4bf5-926a-4120e4509509.png"
      },
      // Travessas Way
      'way': {
        'black': "/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png",
        'silver': "/lovable-uploads/a3369dab-60f9-44a7-9207-806ebb627bd2.png",
        'graphite': "/lovable-uploads/uno-way-grafite-1.png"
      },
      // Bagageiro 307-2
      'gradeado-307-2-96x96-preto': {
        'black': "/lovable-uploads/bc8a9f53-598f-443e-a034-446bcf3eafa6.png",
        'silver': "/lovable-uploads/b2dfa986-e873-4771-9c73-30990b4f0403.png"
      },
      // Bagageiro 511
      'gradeado-511-127x96-preto': {
        'black': "/lovable-uploads/56860209-742f-4f99-b202-646a1802ee81.png"
      },
      // Bagageiro 539
      'gradeado-539-96x90-preto': {
        'black': "/lovable-uploads/de4e7a24-e550-4586-bc7b-b4a05b04a8bf.png",
        'silver': "/lovable-uploads/39ab0e43-708e-41dd-99cb-9e138de39ab1.png"
      }
    };

    return imagesByProductAndColor[productId]?.[color] || product.image;
  };

  const currentImage = getImageByColor(product.id, selectedColor);

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in h-[400px] flex flex-col ${className}`}>
      <Link to={`/produtos/${product.category}/${product.id}`}>
        <div className="h-32 sm:h-36 md:h-48 overflow-hidden flex items-center justify-center p-4">
          <img
            src={currentImage}
            alt={`${product.category === 'travessas' ? 'Travessa' : 'Bagageiro'} ${product.name}`}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
            style={{ padding: '8px' }}
          />
        </div>
      </Link>
      
      <div className="p-4 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg md:text-xl font-bold flex-1">{product.name}</h3>
          <ColorSelector 
            productId={product.id}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
            showPreview={false}
          />
        </div>
        
        <p className="text-gray-700 text-sm md:text-base mb-2 line-clamp-3">{product.description}</p>
        
        {(product.category === 'bagageiros' && (product.size || product.dimensions)) && (
          <p className="text-gray-700 text-xs md:text-sm">
            <strong>Dimensões:</strong> {product.size || product.dimensions}
          </p>
        )}
        
        <div className="mt-auto">
          <p className="text-xs md:text-sm text-gray-600 font-semibold">Capacidade máxima: 45kg</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;