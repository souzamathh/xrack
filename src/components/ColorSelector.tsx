import React from 'react';

interface ColorSelectorProps {
  productId: string;
  selectedColor: string;
  onColorChange: (color: string) => void;
  showPreview?: boolean;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ 
  productId, 
  selectedColor, 
  onColorChange,
  showPreview = true 
}) => {
  const getAvailableColors = (id: string) => {
    // Definir cores disponíveis para cada produto
    const colorsByProduct = {
      // Travessas - todas têm preto, prata e grafite
      'smart': ['black', 'silver', 'graphite'],
      'style': ['black', 'silver', 'graphite'],
      'slim': ['black', 'silver', 'graphite'],
      'uno-way': ['black', 'silver', 'graphite'],
      'locker': ['black', 'silver', 'graphite'],
      'tubular': ['black', 'silver', 'graphite'],
      
      // Bagageiros - apenas preto conforme solicitado
      'gradeado-p': ['black'],
      'gradeado-m': ['black'],
      'gradeado-g': ['black'],
      'gradeado-gg': ['black'],
      'gradeado-xg': ['black'],
      'gradeado-d52-132x104-preto': ['black'],
      'gradeado-d59-127x96-preto': ['black'],
      'gradeado-501-3-110x90-preto': ['black'],
      'gradeado-307-c-140x100-preto': ['black'],
      'gradeado-514-127x96-preto': ['black'],
      'gradeado-544-127x96-preto': ['black'],
      'gradeado-548-127x96-preto': ['black'],
      'gradeado-307-2-96x96-preto': ['black', 'silver'],
      'gradeado-511-127x96-preto': ['black'],
      'gradeado-539-96x90-preto': ['black', 'silver'],
    };

    return colorsByProduct[id] || ['black'];
  };

  const getColorInfo = (color: string) => {
    const colorMap = {
      black: { name: 'Preto', class: 'bg-gray-900' },
      silver: { name: 'Prata', class: 'bg-gray-300' },
      graphite: { name: 'Grafite', class: 'bg-gray-600' }
    };
    return colorMap[color] || { name: 'Preto', class: 'bg-gray-900' };
  };

  const availableColors = getAvailableColors(productId);

  if (availableColors.length <= 1) {
    return null; // Não mostrar seletor se só há uma cor
  }

  return (
    <div className="flex flex-col gap-2">
      {showPreview && (
        <span className="text-sm text-gray-600">
          Cor: {getColorInfo(selectedColor).name}
        </span>
      )}
      <div className="flex gap-2">
        {availableColors.map((color) => {
          const colorInfo = getColorInfo(color);
          return (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${colorInfo.class} ${
                selectedColor === color 
                  ? 'border-xrack-red scale-110 shadow-md' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              title={colorInfo.name}
              aria-label={`Selecionar cor ${colorInfo.name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;