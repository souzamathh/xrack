import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Check, 
  ShoppingCart, 
  Package, 
  Truck, 
  Shield, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import ProductCompatibilityChecker from './ProductCompatibilityChecker';

interface ProductDetailContentProps {
  category?: string;
  id?: string;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ category, id }) => {
  const params = useParams();
  const productCategory = category || params.category;
  const productId = id || params.id;
  const isSmartProduct = productCategory === 'travessas' && productId === 'smart';
  const isStyleProduct = productCategory === 'travessas' && productId === 'style';
  const isSlimProduct = productCategory === 'travessas' && productId === 'slim';
  const isLockerProduct = productCategory === 'travessas' && productId === 'locker';
  const isTubularProduct = productCategory === 'travessas' && productId === 'tubular';
  const isWayProduct = productCategory === 'travessas' && productId === 'uno-way';

  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState(productId === 'gradeado-539-96x90-preto' ? '96x90' : '127x96');
  const [mainImage, setMainImage] = useState(0);
  
  // Reset main image when color or size changes
  useEffect(() => {
    setMainImage(0);
  }, [selectedColor, selectedSize]);

  // Define image paths based on product and color
  const getProductImages = () => {
    // Bagageiros - modificado para incluir o novo Gradeado 501-3
    if (productCategory === 'bagageiros') {
      if (productId === 'gradeado-501-3-110x90-preto') {
        // Novo produto Gradeado 501-3 com as imagens fornecidas
        return [
          "/lovable-uploads/ea232286-bc3d-4d17-aaf3-ef3c5f08a4e1.png", // 1.png (principal)
          "/lovable-uploads/ecc36034-1164-4a37-b538-df0959ae432e.png", // 2.png
          "/lovable-uploads/93f8e902-3fb8-4dda-ba96-2b3bee8bbac9.png", // 3.png
          "/lovable-uploads/0632d062-9f26-4eb6-a8a6-72c1721a6863.png", // 4.png
          "/lovable-uploads/884a595c-ebbe-4493-a21e-94f2b00c0dc7.png", // 5.png
          "/lovable-uploads/f7b7e66c-3f31-4d21-a33b-b06c16a6652a.png"  // 6.png
        ];
      } else if (productId === 'gradeado-307-c-140x100-preto') {
        // Novo produto Gradeado 307-C com as imagens fornecidas
        return [
          "/lovable-uploads/a44e5f48-edbf-4eb3-96ad-1f86da1a9d03.png", // 1.png (principal)
          "/lovable-uploads/7d8c9d50-e023-4377-8f85-8f8a81500131.png", // 2.png
          "/lovable-uploads/fbdb4c07-743d-4866-be1c-67e0d6422ba0.png", // 3.png
          "/lovable-uploads/87109467-e9a0-4039-b464-bdb54903ba83.png", // 4.png
          "/lovable-uploads/198655ad-401c-448f-ab8d-c7c8b7641871.png", // 5.png
          "/lovable-uploads/18a3d2e4-73c0-49ab-827b-c06f3523c3b2.png"  // 6.png
        ];
      } else if (productId === 'gradeado-307-2-96x96-preto') {
        // Gradeado 307-2 com variações de cor
        switch (selectedColor) {
          case 'black':
            return [
              "/lovable-uploads/bc8a9f53-598f-443e-a034-446bcf3eafa6.png", // 1.png (principal)
              "/lovable-uploads/fb483dd7-6e83-4c4c-8937-a394e93dd2d9.png", // 2.png
              "/lovable-uploads/2016b5cc-19b2-409a-af5b-c8ab6cc2958f.png", // 3.png
              "/lovable-uploads/d88ee421-2c1f-4008-a9d9-e7be6dbc1da7.png", // 4.png
              "/lovable-uploads/ee1a56c9-66b9-409d-bf94-22850330a1c9.png", // 5.png
              "/lovable-uploads/1c40d763-923e-4c23-8308-19ebff4587ca.png"  // 6.png
            ];
          case 'silver':
            return [
              "/lovable-uploads/b2dfa986-e873-4771-9c73-30990b4f0403.png", // 1.png (principal prata)
              "/lovable-uploads/baa165d7-1226-48ca-a788-fdf55d106eec.png", // 2.png
              "/lovable-uploads/4410a07e-8226-4218-ad64-7a12d3623a9c.png", // 3.png
              "/lovable-uploads/2db140b4-11db-4ebf-8ea3-5897fc8433f8.png", // 4.png
              "/lovable-uploads/3b70194c-26b9-4169-814d-2615b499c506.png", // 5.png
              "/lovable-uploads/91339655-8006-4509-9e2a-2843a6e6bdb8.png"  // 6.png
            ];
          default:
            return [
              "/lovable-uploads/bc8a9f53-598f-443e-a034-446bcf3eafa6.png", // 1.png (principal)
              "/lovable-uploads/fb483dd7-6e83-4c4c-8937-a394e93dd2d9.png", // 2.png
              "/lovable-uploads/2016b5cc-19b2-409a-af5b-c8ab6cc2958f.png", // 3.png
              "/lovable-uploads/d88ee421-2c1f-4008-a9d9-e7be6dbc1da7.png", // 4.png
              "/lovable-uploads/ee1a56c9-66b9-409d-bf94-22850330a1c9.png", // 5.png
              "/lovable-uploads/1c40d763-923e-4c23-8308-19ebff4587ca.png"  // 6.png
            ];
        }
      } else if (productId === 'gradeado-511-127x96-preto') {
        // Produto Gradeado 511 - apenas cor preta disponível
        return [
          "/lovable-uploads/56860209-742f-4f99-b202-646a1802ee81.png", // Imagem principal
          "/lovable-uploads/2bca53bd-e0fa-4e5b-a3f7-5e6df6936c62.png", // Imagem instalado no carro
          "/lovable-uploads/e141fc65-94a3-4d23-81d9-b83d9df6a6ac.png", // Imagem com medidas
          "/lovable-uploads/79fdbdd0-ddff-46dd-bf40-47de2d0f0b7e.png", // Detalhes do produto
          "/lovable-uploads/ae3f0767-2b11-4b20-a7a9-b536638e24b2.png"  // Vista lateral instalado
        ];
      } else if (productId === 'gradeado-514-127x96-preto') {
        // Produto Gradeado 514 com variações de tamanho e cor
        if (selectedSize === '160x110') {
          if (selectedColor === 'silver') {
            return [
              "/lovable-uploads/aae2a4d9-06ad-4bc5-8fa0-9091c26b203c.png", // 1.png (principal - 160x110 Prata)
              "/lovable-uploads/1f648201-064f-43d7-b34b-4841a911397e.png", // 2.png (160x110 Prata)
              "/lovable-uploads/886a6066-c460-4a71-8b3d-91693cbb7945.png", // 3.png (160x110 Prata)
              "/lovable-uploads/8eb2eebe-2551-4b2b-b454-ff648dd0922b.png"  // 4.png (160x110 Prata)
            ];
          } else {
            return [
              "/lovable-uploads/019b6923-20aa-44f0-a4f9-58f1b9236a52.png", // 1.png (principal - 160x110 Preto)
              "/lovable-uploads/d723f8a5-cfea-48ca-b5c5-4009e7566eb3.png", // 2.png (160x110 Preto)
              "/lovable-uploads/ce93a31a-50c8-493a-953d-d22edf80727a.png", // 3.png (160x110 Preto)
              "/lovable-uploads/d3e04ab1-5fa9-4a1e-b2af-d179bd645c62.png"  // 4.png (160x110 Preto)
            ];
          }
        } else {
          return [
            "/lovable-uploads/030029dd-13d1-400c-aee3-68586122fb32.png", // 1.png (principal - 127x96)
            "/lovable-uploads/03286507-5a01-499c-b85d-a5b2d8a1e027.png", // 2.png (127x96)
            "/lovable-uploads/64cb69fe-98c3-4a55-8eb0-a35210b599d9.png", // 3.png (127x96)
            "/lovable-uploads/b7e1fe20-4aed-4510-b90d-f56f7720f796.png"  // 4.png (127x96)
          ];
        }
      } else if (productId === 'gradeado-539-96x90-preto') {
        // Produto Gradeado 539 com variações de cor e tamanho
        if (selectedColor === 'silver' && selectedSize === '127x96') {
          return [
            "/lovable-uploads/7be179b1-4803-4c5c-a163-db81284d6168.png", // 1.png (principal prata 127x96)
            "/lovable-uploads/eb223a15-01f6-41cf-92de-a86bb35ab6bb.png", // 2.png
            "/lovable-uploads/6616eaaf-897e-49d2-8656-95fca071df4c.png", // 3.png
            "/lovable-uploads/788182a9-b85a-4d5d-87af-ba916349b4d1.png"  // 4.png
          ];
        } else if (selectedColor === 'silver' && selectedSize === '96x90') {
          return [
            "/lovable-uploads/39ab0e43-708e-41dd-99cb-9e138de39ab1.png", // 1.png (principal prata 96x90)
            "/lovable-uploads/c24a9d38-c1bd-443c-a116-b026825d7789.png", // 2.png
            "/lovable-uploads/fccde7ee-4f47-4fa2-8d40-8e56760aa939.png", // 3.png
            "/lovable-uploads/7a6947fe-ec3e-4505-8f96-2a7fdd5b6a05.png", // 4.png
            "/lovable-uploads/9a9b9b5b-e4c4-433a-aa52-ac54c459d52e.png"  // 5.png
          ];
        } else if (selectedColor === 'silver' && selectedSize === '160x110') {
          return [
            "/lovable-uploads/50abc35b-7b83-485a-9030-ec52fa724f4a.png", // 1.png (principal prata 160x110)
            "/lovable-uploads/f2a2ced9-c54d-4d3c-9649-a996d3a5cfd4.png", // 2.png (no carro)
            "/lovable-uploads/9faa8e04-eeab-4f8b-9b61-2b1016ac0a69.png", // 3.png (medidas)
            "/lovable-uploads/5dcef233-09a8-42ab-b079-5cfca434cebb.png"  // 4.png (ângulo)
          ];
        } else if (selectedColor === 'black' && selectedSize === '160x110') {
          return [
            "/lovable-uploads/dc69b779-5c27-4dd6-9541-0e80b4f5e98f.png", // 1.png (principal preto 160x110)
            "/lovable-uploads/ade4479b-d95d-48d0-9d8c-aa697b0411a5.png", // 2.png
            "/lovable-uploads/44e74754-7b8c-4eac-8b26-26a024318bd1.png", // 3.png (medidas)
            "/lovable-uploads/314eade3-97e0-4e7a-960c-d27c00cb21d3.png"  // 4.png (frontal)
          ];
        } else {
          // Default: black 96x90
          return [
            "/lovable-uploads/de4e7a24-e550-4586-bc7b-b4a05b04a8bf.png", // 1.png (principal)
            "/lovable-uploads/76eee612-c954-47c5-a034-b1973b6f24b8.png", // 2.png
            "/lovable-uploads/b5f4e7d3-ac22-4450-a32b-a42bea75d553.png", // 3.png
            "/lovable-uploads/98413fa9-4f5c-4173-b229-6b7df5e20989.png"  // 4.png
          ];
        }
      } else if (productId === 'gradeado-544-127x96-preto') {
        // Produto Gradeado 544 com variações de tamanho
        if (selectedSize === '160x110') {
          return [
            "/lovable-uploads/6a67308d-f1f1-4fed-813d-b6e8b3da16b6.png", // 1.png (principal 160x110)
            "/lovable-uploads/e41d1083-b09a-473e-9bd9-1be296678acc.png", // 2.png (no carro)
            "/lovable-uploads/84fc0232-30cc-4ee7-ba70-84c2644dc964.png", // 3.png (medidas)
            "/lovable-uploads/2950ef49-8bd8-4a72-a31f-89b38d69dd9f.png"  // 4.png (detalhes)
          ];
        } else {
          // Default: 127x96
          return [
            "/lovable-uploads/6ef11061-44fb-4e3d-8371-34ee89465107.png", // 1.png (principal)
            "/lovable-uploads/7a899029-464b-4d5b-ae4b-ad87d49c8bb1.png", // 2.png
            "/lovable-uploads/e81e3994-d502-4e14-a9a1-c739985479b0.png", // 3.png
            "/lovable-uploads/c150d8ad-e412-4c4e-870f-a4fadadf19c8.png", // 4.png
            "/lovable-uploads/ff6c45c9-1b6c-4b04-90ca-463bc6386dfd.png"  // 5.png
          ];
        }
      } else if (productId === 'gradeado-548-127x96-preto') {
        // Novo produto Gradeado 548 com as imagens fornecidas
        return [
          "/lovable-uploads/4ff6a7e8-1dc5-4c2e-9d65-e058cae27713.png", // 1.png (principal)
          "/lovable-uploads/03e96339-e078-411c-84d4-20371d86b424.png", // 2.png
          "/lovable-uploads/3e8aa255-edec-440c-aea3-1b8be8d548e9.png", // 3.png
          "/lovable-uploads/ce7ddd53-bad9-4e8a-ad99-e5a2acdd57db.png", // 4.png
          "/lovable-uploads/05d09eb8-9504-4ffd-a10c-132d3b63f41c.png"  // 5.png
        ];
      } else if (productId === 'gradeado-d52-132x104-preto') {
        // Novo produto Gradeado D-52 com as imagens fornecidas
        return [
          "/lovable-uploads/64d44c0f-82bc-454d-862a-c7c95d23fabb.png", // 1.png (principal)
          "/lovable-uploads/ea985fc6-71ff-4191-90f1-c236853c1035.png", // 2.png
          "/lovable-uploads/51a44251-2a57-4132-8016-a4e5ac4a0c38.png", // 3.png
          "/lovable-uploads/2f4d5572-6651-470f-986a-aed3c9892c86.png", // 4.png
          "/lovable-uploads/bf8ec966-ed75-42b9-a1df-e95f34829f39.png", // 5.png
          "/lovable-uploads/db5956ac-d51f-4a82-bb62-f4755b8de784.png"  // 6.png
        ];
      } else if (productId === 'gradeado-d59-127x96-preto') {
        // Novo produto Gradeado D-59 com as imagens fornecidas
        return [
          "/lovable-uploads/559fe3ed-c74d-4558-98ad-a1ff818c9f81.png", // 1.png (principal)
          "/lovable-uploads/d3cf0a8f-bf71-49f0-ba24-6f1574d3e407.png", // 2.png
          "/lovable-uploads/baf5dfad-45c0-45df-8c34-ee67b8f02f1d.png", // 3.png
          "/lovable-uploads/06fba426-038c-410c-9b11-fa1be37e453a.png", // 4.png
          "/lovable-uploads/c30b7b04-9148-4b7e-94dd-da77b1159dc9.png", // 5.png
          "/lovable-uploads/e59fc59d-0953-4df2-a838-ff11b1e88eb3.png"  // 6.png
        ];
      } else if (productId === 'gradeado-p') {
        // Nova imagem para Gradeado P com as 4 imagens fornecidas
        return [
          "/lovable-uploads/a405c107-016f-477c-949f-6e1ea22d8470.png", // 1.png (principal)
          "/lovable-uploads/236e05c2-7325-4686-b467-7a865b774f3c.png", // 2.png
          "/lovable-uploads/6310bad7-069e-4a0f-a08e-7cc3b875fc6e.png", // 3.png
          "/lovable-uploads/4337226b-157b-4536-99a2-811f6fa43817.png"  // 4.png
        ];
      } else if (productId === 'gradeado-gg' || productId === 'gradeado-xg') {
        // Nova imagem para Gradeado GG e XG
        return [
          "/lovable-uploads/62c39066-709b-4a70-9321-6144f422f6f4.png"
        ];
      } else {
        // Demais gradeados com apenas uma imagem
        return [
          "/lovable-uploads/9badf46e-b01f-4925-a5d0-fc1019a54998.png"
        ];
      }
    }

    // SMART TRAVESSA – Lógica de variantes por cor (corrigida)
    if (productCategory === 'travessas' && productId === 'smart') {
      switch(selectedColor) {
        case 'black': // Preto
          return [
            "/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png", // 1-Preto
            "/lovable-uploads/a6bfcdc3-b3c6-41aa-bad5-dd19ee8f1d33.png", // 2-Preto
            "/lovable-uploads/d1895a06-81ca-4eb4-b62a-56abab22bf6d.png"  // 3-Preto
          ];
        case 'silver': // Prata
          return [
            "/lovable-uploads/1240ebf0-2af6-41b2-8b14-f1d4c7230d10.png", // 1-Prata
            "/lovable-uploads/a988f69c-e674-4815-911f-cff44c99f10c.png", // 2-Prata
            "/lovable-uploads/bbab24d1-e5b6-4500-bfa2-500e8f980cbd.png"  // 3-Prata
          ];
        case 'graphite': // Grafite
          return [
            "/lovable-uploads/6b62308b-28bc-4a19-bbeb-cc7f4e50e571.png", // 1-Grafite
            "/lovable-uploads/a3aa63f3-2736-426f-b9cf-3590d214620e.png", // 2-Grafite
            "/lovable-uploads/21a46790-2896-42b3-92fd-e6f00bbf6ebf.png"  // 3-Grafite
          ];
        default:
          return [
            "/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png", // 1-Preto
            "/lovable-uploads/a6bfcdc3-b3c6-41aa-bad5-dd19ee8f1d33.png", // 2-Preto
            "/lovable-uploads/d1895a06-81ca-4eb4-b62a-56abab22bf6d.png"  // 3-Preto
          ];
      }
    }

    // STYLE TRAVESSA - Atualizada com as novas imagens recebidas
    if (productCategory === 'travessas' && productId === 'style') {
      switch (selectedColor) {
        case 'black':
          return [
            "/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png", // Par preto (nova imagem)
            "/lovable-uploads/3055fd6c-ecf7-485f-a213-6f81b96c9cd3.png", // Único preto (nova imagem)
            "/lovable-uploads/77006375-31f6-4947-b536-fef21225e6cd.png"  // Vista frontal preto (nova imagem)
          ];
        case 'silver':
          return [
            "/lovable-uploads/9169976d-f990-4d90-809c-af2bc7f90b5a.png", // Par prata (nova imagem)
            "/lovable-uploads/402201c5-67e9-4d69-b0d2-ed08e049a3e2.png", // Único prata (nova imagem)
            "/lovable-uploads/06474bff-f4c1-49d8-aaf2-ce04707d147d.png"  // Vista frontal prata (nova imagem)
          ];
        case 'graphite':
          return [
            "/lovable-uploads/1ef1429c-62e5-45d1-8103-1062783b90f7.png", // Par grafite (nova imagem)
            "/lovable-uploads/c0110882-4752-46ff-bf8d-450cb7e1d4d4.png", // Único grafite (nova imagem)
            "/lovable-uploads/cc1dc7c4-5e3b-460c-80d9-b8ea2444055c.png"  // Vista frontal grafite (nova imagem)
          ];
        default:
          return [
            "/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png", // Par preto (nova imagem)
            "/lovable-uploads/3055fd6c-ecf7-485f-a213-6f81b96c9cd3.png", // Único preto (nova imagem)
            "/lovable-uploads/77006375-31f6-4947-b536-fef21225e6cd.png"  // Vista frontal preto (nova imagem)
          ];
      }
    }
    
    // SLIM TRAVESSA - Lógica de variantes por cor
    if (productCategory === 'travessas' && productId === 'slim') {
      switch (selectedColor) {
        case 'black':
          return [
            "/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png", // 1-Preto
            "/lovable-uploads/8d8e0941-3326-4d5a-96b4-b56772a6b13f.png", // 2-Preto
            "/lovable-uploads/c1ac86a4-5fb0-4c60-b0d1-e20e45bfa91f.png"  // 3-Preto
          ];
        case 'silver':
          return [
            "/lovable-uploads/2e4cf8fc-8d4c-4118-9386-6b7973d767f9.png", // 1-Prata
            "/lovable-uploads/609af4cb-497f-4016-8355-3eb764b64ead.png", // 2-Prata
            "/lovable-uploads/4b1c4fd1-0ff5-466f-a91c-6fbd0ad957dd.png"  // 3-Prata
          ];
        case 'graphite':
          return [
            "/lovable-uploads/dff748ae-2dc7-4726-908b-380326a09a56.png", // 1-Grafite
            "/lovable-uploads/530e639f-a83a-4191-80e0-c256b71ecadf.png", // 2-Grafite
            "/lovable-uploads/4bbff2c2-2a15-407b-bb44-7a98e4c88ce2.png"  // 3-Grafite
          ];
        default:
          return [
            "/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png", // 1-Preto
            "/lovable-uploads/8d8e0941-3326-4d5a-96b4-b56772a6b13f.png", // 2-Preto
            "/lovable-uploads/c1ac86a4-5fb0-4c60-b0d1-e20e45bfa91f.png"  // 3-Preto
          ];
      }
    }
    
    // UNO WAY TRAVESSA - Lógica de variantes por cor
    if (productCategory === 'travessas' && productId === 'uno-way') {
      switch (selectedColor) {
        case 'black':
          return [
            "/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png", // 1-Preto
            "/lovable-uploads/d7f5ae99-90b1-48c5-bb5a-580eae058270.png", // 2-Preto
            "/lovable-uploads/76f8b29d-c145-4c75-9d5d-60a2a41eaa57.png"  // 3-Preto
          ];
        case 'silver':
          return [
            "/lovable-uploads/a3369dab-60f9-44a7-9207-806ebb627bd2.png", // 1-Prata
            "/lovable-uploads/a3369dab-60f9-44a7-9207-806ebb627bd2.png", // 1-Prata (repetido como placeholder)
            "/lovable-uploads/a3369dab-60f9-44a7-9207-806ebb627bd2.png"  // 1-Prata (repetido como placeholder)
          ];
        case 'graphite':
          return [
            "/lovable-uploads/uno-way-grafite-1.png", // Capa Grafite
            "/lovable-uploads/uno-way-grafite-2.png"  // Auxiliar Grafite
          ];
        default:
          return [
            "/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png", // 1-Preto
            "/lovable-uploads/d7f5ae99-90b1-48c5-bb5a-580eae058270.png", // 2-Preto
            "/lovable-uploads/76f8b29d-c145-4c75-9d5d-60a2a41eaa57.png"  // 3-Preto
          ];
      }
    }
    
    // LOCKER TRAVESSA - Lógica de variantes por cor
    if (productCategory === 'travessas' && productId === 'locker') {
      switch (selectedColor) {
        case 'black':
          return [
            "/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png", // 1-Preto
            "/lovable-uploads/014fcc4d-9fde-4d15-957f-42b2b7699fdb.png", // 2-Preto
          ];
        case 'silver':
          return [
            "/lovable-uploads/467dcdd9-9bda-4cbc-bee7-7c13dd573367.png", // 1-Prata
            "/lovable-uploads/76ed83ec-a737-47f3-9f06-c00934d8e096.png", // 2-Prata
          ];
        case 'graphite':
          return [
            "/lovable-uploads/d15208ab-3ee4-438b-b49f-cf2ed6f397a2.png", // 1-Grafite
            "/lovable-uploads/7ed44c07-7c99-4f00-b408-c40d9495c354.png", // 2-Grafite
          ];
        default:
          return [
            "/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png", // 1-Preto
            "/lovable-uploads/014fcc4d-9fde-4d15-957f-42b2b7699fdb.png", // 2-Preto
          ];
      }
    }
    
    // TUBULAR TRAVESSA - Lógica de variantes por cor
    if (productCategory === 'travessas' && productId === 'tubular') {
      switch (selectedColor) {
        case 'black':
          return [
            "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png", // 1-Preto
            "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png", // 1-Preto (repetido como placeholder)
          ];
        case 'silver':
          return [
            "/lovable-uploads/b5ed9857-5d08-472a-9103-4336fbc27742.png", // 1-Prata
            "/lovable-uploads/b5ed9857-5d08-472a-9103-4336fbc27742.png", // 1-Prata (repetido como placeholder)
          ];
        case 'graphite':
          return [
            "/lovable-uploads/4aaeb781-6744-4c1f-90d6-47658e054955.png", // 1-Grafite
            "/lovable-uploads/4aaeb781-6744-4c1f-90d6-47658e054955.png", // 1-Grafite (repetido como placeholder)
          ];
        default:
          return [
            "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png", // 1-Preto
            "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png", // 1-Preto (repetido como placeholder)
          ];
      }
    }
    
    // Para outros modelos de travessas (não Smart, Style, Slim, Uno Way, Locker ou Tubular)
    return [
      "/lovable-uploads/048ff5e8-8601-4c9c-885d-aa8123d93e1a.png",
      "/lovable-uploads/048ff5e8-8601-4c9c-885d-aa8123d93e1a.png",
      "/lovable-uploads/048ff5e8-8601-4c9c-885d-aa8123d93e1a.png",
      "/lovable-uploads/048ff5e8-8601-4c9c-885d-aa8123d93e1a.png"
    ];
  };

  // Reset the selected image when changing color
  useEffect(() => {
    setMainImage(0);
  }, [selectedColor]);

  const productImages = getProductImages();

  const getProductTitle = () => {
    if (productCategory === 'travessas') {
      switch (productId) {
        case 'smart': return 'Travessa Larga Rack de Teto Smart';
        case 'style': return 'Travessa Larga de Teto Style (100% Alumínio)';
        case 'slim': return 'Kit Par de Travessas Rack de Teto Slim';
        case 'uno-way': return 'Par de Rack de Teto Travessa Fiat Uno Way';
        case 'locker': return 'Rack de Teto Travessa Locker';
        case 'tubular': return 'Travessa De Teto Tubular Rack Bagageiro';
        default: return 'Travessa de Teto';
      }
    } else if (productCategory === 'bagageiros') {
      switch (productId) {
        case 'gradeado-501-3-110x90-preto': return 'Bagageiro Maleiro Gradeado de Teto 501-3 (140 x 100 cm)';
        case 'gradeado-307-c-140x100-preto': return 'Bagageiro Maleiro Gradeado de Teto 307-C (140 x 100 cm)';
        case 'gradeado-307-2-96x96-preto': return selectedColor === 'silver' ? 'Bagageiro Maleiro Gradeado de Teto 307-2 (96 x 96 cm)' : 'Bagageiro Maleiro Gradeado de Teto 307-2 (96 x 96 cm)';
        case 'gradeado-511-127x96-preto': return selectedColor === 'silver' ? 'Bagageiro Maleiro Gradeado de Teto 511' : 'Bagageiro Maleiro Gradeado de Teto 511';
        case 'gradeado-514-127x96-preto': 
          if (selectedSize === '160x110') {
            return selectedColor === 'silver' ? 'Bagageiro Maleiro Gradeado de Teto 514 — 160 x 110 cm — Prata' : 'Bagageiro Maleiro Gradeado de Teto 514 — 160 x 110 cm — Preto';
          }
          return 'Bagageiro Maleiro Gradeado de Teto 514';
        case 'gradeado-539-96x90-preto': 
          if (selectedSize === '127x96') {
            return selectedColor === 'silver' ? 'Bagageiro Maleiro Gradeado de Teto 539 — 127 x 96 cm — Prata' : 'Bagageiro Maleiro Gradeado de Teto 539 — 127 x 96 cm — Preto';
          } else if (selectedSize === '160x110') {
            return selectedColor === 'silver' ? 'Bagageiro Maleiro Gradeado de Teto 539 — 160 x 110 cm — Prata' : 'Bagageiro Maleiro Gradeado de Teto 539 — 160 x 110 cm — Preto';
          }
          return selectedColor === 'silver' ? '539 — 96 x 90 cm — Prata' : 'Bagageiro Maleiro Gradeado de Teto 539';
        case 'gradeado-544-127x96-preto': return 'Bagageiro Maleiro Gradeado de Teto 544';
        case 'gradeado-548-127x96-preto': return 'Bagageiro Maleiro Gradeado de Teto 548 (127 x 96 cm)';
        case 'gradeado-d52-132x104-preto': return 'Bagageiro Maleiro Gradeado de Teto D-52 (132 x 104 cm)';
        case 'gradeado-d59-127x96-preto': return 'Bagageiro Maleiro Gradeado de Teto D-59 (127 x 96 cm)';
        case 'gradeado-p': return 'Bagageiro Maleiro Gradeado de Teto P (97 × 81 × 17 cm)';
        case 'gradeado-m': return 'Bagageiro Maleiro Gradeado de Teto M (100 × 80 × 12 cm)';
        case 'gradeado-g': return 'Bagageiro Maleiro Gradeado de Teto G (110 × 90 × 11 cm)';
        case 'gradeado-gg': return 'Bagageiro Maleiro Gradeado de Teto GG (120 × 100 × 11 cm)';
        case 'gradeado-xg': return 'Bagageiro Maleiro Gradeado de Teto XG (150 × 100 × 11 cm)';
        default: return 'Bagageiro de Teto';
      }
    }
    
    return 'Produto';
  };

  const getProductDescription = () => {
    if (productCategory === 'travessas') {
      switch (productId) {
        case 'smart':
          return (
            <>
              <p className="mb-4">
                Não é plástico. Todo o conjunto de ponteiras e perfis são fabricados 100% em alumínio de alta resistência, garantindo durabilidade e segurança para suas viagens.
              </p>
              <h3 className="text-xl font-bold mb-2">Aplicação</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Montadora: Universal</li>
                <li>Instalação fácil: Fixação direta nas longarinas originais do veículo, sem necessidade de furos ou adaptações.</li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Mais Espaço e Segurança para suas Viagens</h3>
              <p className="mb-4">
                Seu carro foi feito para grandes momentos, e com o Rack de Teto Travessa XRack, você aproveita ainda mais o espaço do seu carro. Ideal para transportar cargas de até 45 kg, esse rack permite que você leve bagagens extras, malas, suportes de bicicleta e outros acessórios com total segurança.
              </p>
              <h3 className="text-xl font-bold mb-2">Especificações Técnicas</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Modelo transversal para fixação nas longarinas</li>
                <li>Perfis de alumínio de alta resistência e leveza</li>
                <li>Ponteiras de alumínio, sem plástico, garantindo maior durabilidade</li>
                <li>Acabamento premium com pintura eletrostática, proporcionando resistência contra desgastes</li>
                <li>Suporta até 45 kg de carga bem distribuída</li>
              </ul>
            </>
          );
        case 'style':
          return (
            <>
              <p className="mb-4">
                "NÃO É PLÁSTICO" TODO CONJUNTO DE PONTEIRAS E BARRAS SÃO FABRICADAS EM ALUMÍNIO
              </p>
              <p className="mb-4 text-yellow-600 font-medium">
                ATENÇÃO: TODOS OS ACESSÓRIOS INSTALADOS NO TETO DO VEÍCULO REPRODUZEM RUÍDOS CAUSADOS PELA ALTERAÇÃO DA AERODINÂMICA ORIGINAL DO VEÍCULO (GERALMENTE, ACIMA DE 80KM/h)
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Serve somente em veículos com longarinas suspensas ao teto COM FURAÇÃO ORIGINAL;</li>
                <li>Não é Necessário Furar o Veículo, pois é instalado nas Longarinas na furação original do veículo;</li>
                <li>Ideal para que você leve carga com até 45kg, ele é instalado de maneira simples e sem a necessidade da qualquer adaptação diretamente nas longarinas do veículo.</li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Especificação Técnica:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Modelo: Transversal;</li>
                <li>Barras Ponteiras em Alumínio de Alta Resistência;</li>
                <li>Chapa de Fixação em aço carbono;</li>
                <li>Pintura eletrostática com tratamento;</li>
                <li>Suporta Até 45Kg de Carga Bem Distribuída</li>
              </ul>
            </>
          );
        case 'slim':
          return (
            <>
              <p className="mb-4">
                As Travessas Rack de Teto XRack são essenciais para maximizar a capacidade de carga do seu veículo, permitindo transportar bagagens, bicicletas, caiaques, pranchas e muito mais. Projetadas para longa durabilidade, são fáceis de instalar e não requerem adaptações ou furações no veículo, pois os Fixadores Ajustáveis garantem Fixação Segura!
              </p>
              <p className="mb-4">
                A linha de Travessas Rack de Teto XRack, com ponteiras e barras 100% em alumínio, oferece resistência, segurança e conforto para suas viagens. As ponteiras com borrachas protegem o as longarinas do veículo, e o design avançado reduz ruídos e melhora a eficiência de consumo.
              </p>
              <h3 className="text-xl font-bold mb-2">CARACTERÍSTICAS:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Marca: XRack</li>
                <li>Modelo: Slim</li>
                <li>Capacidade: Até 45 kg</li>
                <li>Largura: 4,5 cm</li>
                <li>Altura: 2 cm</li>
                <li>Cores: Preta, Prata e Grafite (Escolha ao efetuar a compra)</li>
                <li>Instalação: Para veículos com longarinas suspensas do teto</li>
              </ul>
            </>
          );
        default:
          return (
            <p className="mb-4">
              Travessa de teto de alta qualidade para seu veículo. Fabricada em alumínio de alta resistência, suporta até 45 kg de carga distribuída. Ideal para aumentar a capacidade de carga do seu veículo.
            </p>
          );
      }
    } else if (productCategory === 'bagageiros') {
      if (productId === 'gradeado-501-3-110x90-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado 501-3 com formato retangular 140 x 100 cm, ideal para bagageiros de médio porte. Construído em material resistente com acabamento preto clássico, proporciona fixação confiável e visual clean para seu veículo.
            </p>
            <p className="mb-4">
              O Gradeado 501-3 foi desenvolvido especialmente para bagageiros de médio porte, oferecendo a combinação perfeita entre funcionalidade e estilo. Suas dimensões otimizadas de 140 x 100 cm garantem aproveitamento eficiente do espaço disponível.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Material de alta resistência com tratamento anticorrosão</li>
              <li>Formato retangular: 140 x 100 cm - ideal para bagageiros de médio porte</li>
              <li>Sistema de fixação inteligente com distribuição uniforme</li>
              <li>Disponível em acabamento na cor preta</li>
              <li>Compatibilidade testada com principais marcas do mercado</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-307-c-140x100-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado 307-C projetado para bagageiros de 140 x 100cm, com acabamento preto premium e construção robusta. Oferece máxima segurança para transporte de bagagens, combinando funcionalidade e design moderno para uso em diversos tipos de veículos.
            </p>
            <p className="mb-4">
              O Gradeado 307-C representa a evolução em sistemas de fixação para bagageiros. Com suas dimensões generosas de 140 x 100cm, proporciona amplo espaço de fixação mantendo a elegância do acabamento preto.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Construção em aço anticorrosivo de alta qualidade</li>
              <li>Dimensões amplas: 140 x 100 cm - máxima versatilidade</li>
              <li>Sistema de fixação reforçado com ganchos de segurança</li>
              <li>Acabamento na cor preta</li>
              <li>Design aerodinâmico que reduz ruído e resistência</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-307-2-96x96-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado 307-2 desenvolvido para bagageiros de 96 x 96cm, fabricado em material resistente e durável. Ideal para transporte seguro de bagagens, oferece fixação robusta e design funcional para uso universal em diferentes modelos de veículos.
            </p>
            <p className="mb-4">
              O Gradeado 307-2 é a solução perfeita para quem busca praticidade e segurança no transporte de bagagens. Com dimensões otimizadas de 96 x 96cm, adapta-se perfeitamente aos principais modelos de bagageiros do mercado.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>100% alumínio resistente à corrosão e intempéries</li>
              <li>Dimensões: 96 x 96 cm - compatibilidade universal</li>
              <li>Fixação segura com ganchos inclusos</li>
              <li>Acabamento premium disponível nas cores Preto e Prata</li>
              <li>Capacidade de carga otimizada para uso rodoviário</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-511-127x96-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado 511 de alta resistência para bagageiros grandes. Design robusto e funcional com acabamento premium disponível em preto e prata.
            </p>
            <p className="mb-4">
              O Gradeado 511 foi desenvolvido especialmente para atender as demandas de transporte com suas dimensões variadas. Construído em alumínio de alta qualidade, oferece a combinação perfeita entre funcionalidade e estilo, garantindo máxima versatilidade para diferentes tipos de cargas.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Alumínio anticorrosivo de alta qualidade</li>
              <li>Dimensões: {selectedColor === 'silver' || selectedColor === 'black-160x110' ? '160 x 110 cm' : '127 x 96 cm'} - máxima versatilidade</li>
              <li>Sistema de fixação reforçado com ganchos de segurança</li>
              <li>Acabamento premium em {selectedColor === 'silver' ? 'Prata' : 'Preto'}</li>
              <li>Design aerodinâmico que reduz ruído e resistência</li>
              <li>Ganchos inclusos para fixação segura</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-539-96x90-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado 539 versátil e funcional para cargas médias. Material resistente em alumínio com design moderno, disponível em múltiplas dimensões para máxima versatilidade.
            </p>
            <p className="mb-4">
              O Gradeado 539 foi desenvolvido para oferecer praticidade e eficiência em suas três variações de tamanho: 96 x 90cm, 127 x 96cm e 160 x 110cm. Perfeito para diferentes tipos de veículos que necessitam de funcionalidade sem comprometer o design.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Material em aço anticorrosivo de alta qualidade</li>
              <li>Dimensões variáveis: 96 x 90cm, 127 x 96cm ou 160 x 110cm - máxima versatilidade</li>
              <li>Sistema de fixação inteligente com distribuição uniforme</li>
              <li>Acabamento premium nas cores preto ou prata</li>
              <li>Design moderno e aerodinâmico</li>
              <li>Ganchos inclusos para fixação segura</li>
              <li>Elasticidade máxima testada para cargas médias</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-544-127x96-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado 544 premium para transporte seguro. Design aerodinâmico e construção robusta em alumínio anticorrosivo com acabamento premium em preto, disponível em múltiplos tamanhos.
            </p>
            <p className="mb-4">
              O Gradeado 544 representa a evolução em sistemas de fixação para bagageiros. Disponível em dimensões de 127 x 96cm e 160 x 110cm, proporciona amplo espaço de fixação mantendo a elegância do design aerodinâmico.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Construção em alumínio anticorrosivo de alta qualidade</li>
              <li>Dimensões versáteis: 127 x 96cm ou 160 x 110cm - máxima versatilidade</li>
              <li>Sistema de fixação reforçado com ganchos de segurança</li>
              <li>Acabamento premium na cor preta</li>
              <li>Design aerodinâmico que reduz ruído e resistência</li>
              <li>Ganchos inclusos para fixação segura</li>
              <li>Elasticidade máxima testada para uso rodoviário</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-548-127x96-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado 548 premium para transporte seguro de cargas. Construção robusta em material resistente com design aerodinâmico otimizado para reduzir ruído e resistência.
            </p>
            <p className="mb-4">
              O Gradeado 548 foi desenvolvido com tecnologia avançada para atender às demandas de transporte rodoviário. Com suas dimensões amplas de 127 x 96cm, oferece máxima versatilidade e capacidade de fixação para diferentes tipos de cargas.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Construção em aço anticorrosivo de alta qualidade</li>
              <li>Dimensões amplas: 127 x 96 cm - máxima capacidade</li>
              <li>Sistema de fixação reforçado com ganchos de segurança inclusos</li>
              <li>Acabamento premium em preto com pintura eletrostática</li>
              <li>Design aerodinâmico que reduz significativamente ruído e resistência</li>
              <li>Elasticidade máxima testada para cargas pesadas</li>
              <li>Compatibilidade universal com travessas de teto</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-d52-132x104-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado D-52 premium para máxima capacidade de carga. Design robusto e funcional com sistema de fixação reforçado, ideal para transporte de cargas pesadas.
            </p>
            <p className="mb-4">
              O Gradeado D-52 representa o que há de mais avançado em bagageiros de teto. Com suas dimensões generosas de 132 x 104cm, é o modelo ideal para quem precisa de máxima capacidade de transporte sem abrir mão da segurança e qualidade.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Construção em aço anticorrosivo de alta qualidade</li>
              <li>Dimensões extra grandes: 132 x 104 cm - máxima capacidade</li>
              <li>Sistema de fixação premium com ganchos reforçados inclusos</li>
              <li>Acabamento premium em preto com tratamento anticorrosivo</li>
              <li>Design robusto desenvolvido para cargas pesadas</li>
              <li>Elasticidade máxima testada para uso profissional</li>
              <li>Compatibilidade universal com travessas de teto</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      } else if (productId === 'gradeado-d59-127x96-preto') {
        return (
          <>
            <p className="mb-4">
              Gradeado D-59 premium com design aerodinâmico e construção robusta. Ideal para transporte seguro de cargas com máxima durabilidade e performance em viagens rodoviárias.
            </p>
            <p className="mb-4">
              O Gradeado D-59 foi desenvolvido com tecnologia avançada para oferecer a combinação perfeita entre funcionalidade e estilo. Com suas dimensões otimizadas de 127 x 96cm, proporciona amplo espaço de fixação mantendo a elegância do design aerodinâmico.
            </p>
            <h3 className="text-xl font-bold mb-2">Características Principais:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Construção em aço anticorrosivo de alta qualidade</li>
              <li>Dimensões amplas: 127 x 96 cm - máxima versatilidade</li>
              <li>Sistema de fixação reforçado com ganchos de segurança inclusos</li>
              <li>Acabamento premium em preto com tratamento anticorrosivo</li>
              <li>Design aerodinâmico que reduz significativamente ruído e resistência</li>
              <li>Elasticidade máxima testada para uso profissional</li>
              <li>Compatibilidade universal com travessas, suportes e racks de teto</li>
            </ul>
            <p className="mb-4 font-semibold text-green-600">
              Compre agora!
            </p>
          </>
        );
      }
      
      return (
        <>
          <p className="mb-4">
            Se divirta e leve tudo o que puder no carro, basta instalar esse Bagageiro Maleiro de Teto que foi fabricado para facilitar a sua vida, principalmente em viagens, passeios e até mesmo durante o seu trabalho.
          </p>
          <p className="mb-4">
            O bagageiro maleiro é no modelo gradeado, sendo capaz de suportar o peso de até 45Kg de carga, assim, suas malas, acessórios e itens de trabalho poderão ser transportados com mais facilidade e praticidade. Esse acessório é produzido em aço e ainda conta com pintura eletrostática para conferir resistência e longa vida útil.
          </p>
          <h3 className="text-xl font-bold mb-2">Modelo Disponível:</h3>
          <p className="mb-4">• Gradeado</p>
          
          <h3 className="text-xl font-bold mb-2">Cor Disponível:</h3>
          <p className="mb-4">• Preto</p>
          
          <h3 className="text-xl font-bold mb-2">Compatível com Veículos com Rack ou travessas de Teto:</h3>
          <p className="mb-4">
            • Universal (É necessário que o veículo possua rack de teto ou travessas pré-instaladas.)<br />
            • Trabalhamos com travessas/suportes de teto para diversos veículos (solicite um combo completo caso precise)
          </p>
        </>
      );
    }
    
    return null;
  };

  const getTechnicalSpecs = () => {
    if (productCategory === 'travessas') {
      return [
        { label: 'Material', value: '100% Alumínio' },
        { label: 'Capacidade de Carga', value: '45 kg bem distribuídos' },
        { label: 'Instalação', value: 'Longarinas originais do veículo' },
        { label: 'Necessita furação', value: 'Não' },
        { label: 'Cores disponíveis', value: 'Preto, Prata, Grafite' }
      ];
    } else if (productCategory === 'bagageiros') {
      let dimensions = 'Universal';
      switch(productId) {
        case 'gradeado-501-3-110x90-preto': dimensions = '140 × 110 cm'; break;
        case 'gradeado-307-c-140x100-preto': dimensions = '140 × 100 cm'; break;
        case 'gradeado-307-2-96x96-preto': dimensions = '96 × 96 cm'; break;
        case 'gradeado-511-127x96-preto': dimensions = '160 × 110 cm, 127 × 96 cm'; break;
        case 'gradeado-514-127x96-preto': dimensions = selectedSize === '160x110' ? '127 x 96 cm, 160 × 110 cm' : '127 × 96 cm'; break;
        case 'gradeado-539-96x90-preto': 
          if (selectedSize === '127x96') {
            dimensions = '127 × 96 cm';
          } else if (selectedSize === '160x110') {
            dimensions = '160 × 110 cm';
          } else {
            dimensions = '96 × 90 cm, 127 x 96 cm, 160 x 110 cm';
          }
          break;
        case 'gradeado-544-127x96-preto': dimensions = selectedSize === '160x110' ? '127 × 96 cm, 160 × 110 cm' : '127 × 96 cm, 160 × 110 cm'; break;
        case 'gradeado-548-127x96-preto': dimensions = '127 × 96 cm'; break;
        case 'gradeado-d52-132x104-preto': dimensions = '132 × 104 cm'; break;
        case 'gradeado-d59-127x96-preto': dimensions = '127 × 96 cm'; break;
        case 'gradeado-p': dimensions = '97 × 81 × 17 cm'; break;
        case 'gradeado-m': dimensions = '100 × 80 × 12 cm'; break;
        case 'gradeado-g': dimensions = '110 × 90 × 11 cm'; break;
        case 'gradeado-gg': dimensions = '120 × 100 × 11 cm'; break;
        case 'gradeado-xg': dimensions = '150 × 100 × 11 cm'; break;
      }
      
      return [
        { label: 'Material', value: 'Aço anticorrosivo' },
        { label: 'Capacidade de Carga', value: '45 kg bem distribuídos' },
        { label: 'Dimensões', value: dimensions },
        { label: 'Acabamento', value: 'Pintura eletrostática' },
        { label: 'Cores disponíveis', value: ['gradeado-307-2-96x96-preto', 'gradeado-539-96x90-preto'].includes(productId) ? 'Preto, Prata' : 'Preto' }
      ];
    }
    
    return [];
  };

  const getContentPackage = () => {
    if (productCategory === 'travessas') {
      return [
        '2 Perfis de Alumínio',
        '4 Ponteiras de Alumínio',
        '4 Parafusos Sextavados M6x12mm',
        '4 Parafusos de Inox Allen M6x50mm',
        '4 Porcas de Inox Allen M6x35mm',
        '1 Ferramenta Chave Allen 6mm',
        '1 Manual de instalação'
      ];
    } else if (productCategory === 'bagageiros') {
      return [
        '1 Bagageiro Gradeado',
        'Kit de Instalação (abraçadeiras, parafusos, porcas e arruelas)',
        '1 Manual de instalação'
      ];
    }
    
    return [];
  };

  // Map color IDs to display names
  const getColorName = (colorId: string) => {
    switch (colorId) {
      case 'black':
        return 'Preto';
      case 'silver':
        return 'Prata';
      case 'graphite':
        return 'Grafite';
      default:
        return colorId;
    }
  };

  return (
    <div className="xrack-container px-4 md:px-4 py-24">
      <div className="mb-8">
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-xrack-red">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <a href="/categorias" className="ml-1 text-sm font-medium text-gray-700 hover:text-xrack-red md:ml-2">
                  Categorias
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <a href={`/categorias#${productCategory}`} className="ml-1 text-sm font-medium text-gray-700 hover:text-xrack-red md:ml-2">
                  {productCategory === 'travessas' ? 'Travessas de Teto' : 'Bagageiros de Teto'}
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {getProductTitle()}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {productCategory === 'travessas' && (isSmartProduct || isStyleProduct || isSlimProduct || isLockerProduct || isTubularProduct || isWayProduct) && (
        <ProductCompatibilityChecker 
          productType={
            isSmartProduct ? 'smart' : 
            isStyleProduct ? 'style' : 
            isSlimProduct ? 'slim' :
            isLockerProduct ? 'locker' :
            isTubularProduct ? 'tubular' :
            isWayProduct ? 'way' : 'smart'
          }
        />
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <img 
              src={productImages[mainImage]} 
              alt={`${getProductTitle()} - ${getColorName(selectedColor)}`} 
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(idx)}
                className={`aspect-square bg-white rounded-lg p-2 border-2 transition-colors ${
                  mainImage === idx ? 'border-xrack-red' : 'border-transparent'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${getProductTitle()} - ${getColorName(selectedColor)} - View ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="lg:sticky lg:top-24">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{getProductTitle()}</h1>
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-1 text-sm text-gray-600">(4.9/5)</span>
            </div>
            <div className="text-sm text-gray-600">Mais de 2,987 vendidos</div>
          </div>
          
          <p className="text-2xl font-bold text-xrack-red mb-6">Solicite um orçamento</p>
          
          {(productCategory === 'travessas' || (productCategory === 'bagageiros' && (productId === 'gradeado-307-2-96x96-preto' || productId === 'gradeado-539-96x90-preto' || (productId === 'gradeado-514-127x96-preto' && selectedSize === '160x110')))) && (
            <div className="mb-6">
              <p className="font-medium mb-2">Cor:</p>
              <div className="flex space-x-3">
                <div 
                  className={`color-option color-black ${selectedColor === 'black' ? 'active' : ''}`}
                  onClick={() => setSelectedColor('black')}
                  title="Preto"
                >
                  <span className="sr-only">Preto</span>
                </div>
                <div 
                  className={`color-option color-silver ${selectedColor === 'silver' ? 'active' : ''}`}
                  onClick={() => setSelectedColor('silver')}
                  title="Prata"
                >
                  <span className="sr-only">Prata</span>
                </div>
                {productCategory === 'travessas' && (
                  <div 
                    className={`color-option color-graphite ${selectedColor === 'graphite' ? 'active' : ''}`}
                    onClick={() => setSelectedColor('graphite')}
                    title="Grafite"
                  >
                    <span className="sr-only">Grafite</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Cor selecionada: <span className="font-medium">{getColorName(selectedColor)}</span>
              </p>
            </div>
          )}
          
          {/* Seletor de Tamanho para produtos com variações de tamanho */}
          {(productCategory === 'bagageiros' && (productId === 'gradeado-514-127x96-preto' || productId === 'gradeado-539-96x90-preto' || productId === 'gradeado-544-127x96-preto')) && (
            <div className="mb-6">
              <p className="font-medium mb-2">Tamanho:</p>
              <div className="flex space-x-3">
                {productId === 'gradeado-539-96x90-preto' ? (
                  <>
                    <button 
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === '96x90' 
                          ? 'border-xrack-red bg-xrack-red text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-xrack-red'
                      }`}
                      onClick={() => setSelectedSize('96x90')}
                    >
                      96 x 90 cm
                    </button>
                    <button 
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === '127x96' 
                          ? 'border-xrack-red bg-xrack-red text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-xrack-red'
                      }`}
                      onClick={() => setSelectedSize('127x96')}
                    >
                      127 x 96 cm
                    </button>
                    <button 
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === '160x110' 
                          ? 'border-xrack-red bg-xrack-red text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-xrack-red'
                      }`}
                      onClick={() => setSelectedSize('160x110')}
                    >
                      160 x 110 cm
                    </button>
                  </>
                ) : productId === 'gradeado-544-127x96-preto' ? (
                  <>
                    <button 
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === '127x96' 
                          ? 'border-xrack-red bg-xrack-red text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-xrack-red'
                      }`}
                      onClick={() => setSelectedSize('127x96')}
                    >
                      127 x 96 cm
                    </button>
                    <button 
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === '160x110' 
                          ? 'border-xrack-red bg-xrack-red text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-xrack-red'
                      }`}
                      onClick={() => setSelectedSize('160x110')}
                    >
                      160 x 110 cm
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === '127x96' 
                          ? 'border-xrack-red bg-xrack-red text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-xrack-red'
                      }`}
                      onClick={() => setSelectedSize('127x96')}
                    >
                      127 x 96 cm
                    </button>
                    <button 
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === '160x110' 
                          ? 'border-xrack-red bg-xrack-red text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-xrack-red'
                      }`}
                      onClick={() => setSelectedSize('160x110')}
                    >
                      160 x 110 cm
                    </button>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Tamanho selecionado: <span className="font-medium">
                  {productId === 'gradeado-539-96x90-preto' 
            ? (selectedSize === '96x90' ? '96 x 90 cm' : selectedSize === '127x96' ? '127 x 96 cm' : '160 x 110 cm')
                    : productId === 'gradeado-544-127x96-preto' 
                      ? (selectedSize === '127x96' ? '127 x 96 cm' : '160 x 110 cm')
                      : (selectedSize === '127x96' ? '127 x 96 cm' : '160 x 110 cm')
                  }
                </span>
              </p>
            </div>
          )}
          
          <div className="mb-8">
            <a 
              href="https://wa.me/5511910201100" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-xrack w-full py-4 text-lg font-bold"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h3 className="font-bold mb-3">Características</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Suporta até 45 kg de carga distribuída</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Instalação sem adaptação (compatível com longarinas originais)</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>{productCategory === 'travessas' ? '100% alumínio de alta resistência' : ((productId === 'gradeado-307-2-96x96-preto' || productId === 'gradeado-514-127x96-preto') ? '100% alumínio de alta resistência' : 'Alumínio com pintura eletrostática de alta durabilidade')}</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Acompanha kit completo para instalação</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Garantia de 1 ano</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Package className="text-xrack-red mr-2" size={20} />
              <span className="text-sm">Pronta entrega</span>
            </div>
            <div className="flex items-center">
              <Truck className="text-xrack-red mr-2" size={20} />
              <span className="text-sm">Envio para todo Brasil</span>
            </div>
            <div className="flex items-center">
              <ShoppingCart className="text-xrack-red mr-2" size={20} />
              <span className="text-sm">Compras B2B</span>
            </div>
            <div className="flex items-center">
              <Shield className="text-xrack-red mr-2" size={20} />
              <span className="text-sm">Garantia de 1 ano</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Descrição do Produto</h2>
        <div className="prose max-w-none">
          {getProductDescription()}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Especificações Técnicas</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-xrack">
              <tbody>
                {getTechnicalSpecs().map((spec, idx) => (
                  <tr key={idx}>
                    <td className="font-medium bg-gray-50">{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Conteúdo da Embalagem</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-5 space-y-2">
              {getContentPackage().map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Informações Importantes</h2>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="mb-4">
              <strong>Atenção:</strong> Todo acessório instalado no teto do veículo pode reproduzir ruídos causados pela alteração na aerodinâmica original (geralmente acima de 60km/h).
            </p>
            <p className="mb-4">
              <strong>Aplicação:</strong> Verifique se o seu veículo possui longarinas suspensas do teto ou acopladas com furação original para instalação das travessas.
            </p>
            <p>
              <strong>Instalação:</strong> Recomendamos a instalação por profissional especializado para garantir segurança e o correto funcionamento do produto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContent;
